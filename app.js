const $ = id => document.getElementById(id);
const LS_KEY = 'ai_studio_v2';

let editor;
let state = {
    files: {
        'index.html': `<!DOCTYPE html>
<html>
<head>
    <title>Test</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>It works</h1>
    <button onclick="sayHi()">Click me</button>
    <script src="script.js"><\/script>
</body>
</html>`,
        'style.css': `body { font-family: sans-serif; padding: 40px; } h1 { color: #8ab4f8; }`,
        'script.js': `function sayHi() { alert('Hello from JS!'); }`
    },
    activeFile: 'index.html',
    chat: [],
    settings: {
        apiKey: '',
        model: 'deepseek/deepseek-chat-v3.1:free',
        adminPass: 'admin',
        fullHistory: true
    },
    showPreview: false
};

require.config({ paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs' }});
require(['vs/editor/editor.main'], function () {
    editor = monaco.editor.create($('editor-container'), {
        value: state.files[state.activeFile],
        language: getLang(state.activeFile),
        theme: 'vs-dark',
        automaticLayout: true,
        minimap: { enabled: false }
    });

    editor.onDidChangeModelContent(() => {
        state.files[state.activeFile] = editor.getValue();
        saveState();
        if (state.showPreview) updatePreview();
    });

    loadState();
});

function getLang(filename) {
    if (filename.endsWith('.html')) return 'html';
    if (filename.endsWith('.css')) return 'css';
    if (filename.endsWith('.js')) return 'javascript';
    if (filename.endsWith('.json')) return 'json';
    return 'plaintext';
}

function loadState() {
    const saved = localStorage.getItem(LS_KEY);
    if (saved) state = {...state,...JSON.parse(saved) };
    renderFiles();
    renderTabs();
    openFile(state.activeFile);
    renderChat();
    $('full-history-toggle').checked = state.settings.fullHistory;
}

function saveState() {
    localStorage.setItem(LS_KEY, JSON.stringify(state));
}

function renderFiles() {
    $('file-tree').innerHTML = '';
    Object.keys(state.files).forEach(name => {
        const div = document.createElement('div');
        div.className = 'file-item' + (name === state.activeFile? ' active' : '');
        div.innerHTML = `<span>${name}</span><span class="file-delete">×</span>`;
        div.onclick = e => {
            if (e.target.classList.contains('file-delete')) {
                e.stopPropagation();
                if (confirm(`Delete ${name}?`)) {
                    delete state.files[name];
                    if (state.activeFile === name) {
                        state.activeFile = Object.keys(state.files)[0] || null;
                    }
                    saveState(); renderFiles(); renderTabs();
                    if (state.activeFile) openFile(state.activeFile);
                }
            } else {
                openFile(name);
            }
        };
        $('file-tree').appendChild(div);
    });
}

function renderTabs() {
    $('tabs').innerHTML = '';
    Object.keys(state.files).forEach(name => {
        const tab = document.createElement('div');
        tab.className = 'tab' + (name === state.activeFile? ' active' : '');
        tab.innerHTML = `${name} <span class="tab-close">×</span>`;
        tab.onclick = e => {
            if (e.target.classList.contains('tab-close')) {
                e.stopPropagation();
                delete state.files[name];
                if (state.activeFile === name) state.activeFile = Object.keys(state.files)[0] || null;
                saveState(); renderFiles(); renderTabs();
                if (state.activeFile) openFile(state.activeFile);
            } else {
                openFile(name);
            }
        };
        $('tabs').appendChild(tab);
    });
}

function openFile(name) {
    state.activeFile = name;
    if (editor) {
        monaco.editor.setModelLanguage(editor.getModel(), getLang(name));
        editor.setValue(state.files[name] || '');
    }
    saveState();
    renderFiles();
    renderTabs();
    updatePreview();
}

function updatePreview() {
    if (!state.showPreview ||!state.activeFile.endsWith('.html')) {
        $('preview').style.display = 'none';
        $('editor-container').style.display = 'block';
        return;
    }

    let html = state.files[state.activeFile];
    // Inline CSS and JS
    html = html.replace(/<link rel="stylesheet" href="([^"]+)">/g, (match, file) => {
        return state.files[file]? `<style>${state.files[file]}</style>` : match;
    });
    html = html.replace(/<script src="([^"]+)"><\/script>/g, (match, file) => {
        return state.files[file]? `<script>${state.files[file]}<\/script>` : match;
    });

    $('preview').srcdoc = html;
    $('preview').style.display = 'block';
    $('editor-container').style.display = 'none';
}

$('toggle-preview-btn').onclick = () => {
    state.showPreview =!state.showPreview;
    $('toggle-preview-btn').textContent = state.showPreview? 'Editor' : 'Preview';
    updatePreview();
};

$('run-btn').onclick = updatePreview;

function renderChat() {
    $('chat-messages').innerHTML = '';
    state.chat.forEach(m => {
        const div = document.createElement('div');
        div.className = `msg ${m.role}`;
        div.innerHTML = `<div class="msg-content">${DOMPurify.sanitize(marked.parse(m.content))}</div>`;
        $('chat-messages').appendChild(div);
    });
    $('chat-messages').scrollTop = $('chat-messages').scrollHeight;
}

async function sendMessage() {
    const input = $('chat-input');
    const text = input.value.trim();
    if (!text) return;
    if (!state.settings.apiKey) {
        alert('Set OpenRouter API key in Admin Panel first. Gear icon bottom left.');
        return;
    }

    $('send-btn').disabled = true;
    state.chat.push({ role: 'user', content: text });
    input.value = '';
    renderChat();
    saveState();

    state.chat.push({ role: 'assistant', content: 'Thinking...' });
    renderChat();

    let messages = [{
        role: 'system',
        content: 'You are a coding assistant. When creating/updating files, use format: ```language:filename\\ncode\\n```. Example: ```html:index.html\\n<h1>Hi</h1>\\n```. Create multiple files if needed. Explain briefly.'
    }];

    if (state.settings.fullHistory) {
        messages = messages.concat(state.chat.slice(0, -1).map(m => ({ role: m.role, content: m.content })));
    } else {
        messages.push(state.chat[state.chat.length - 2]);
    }

    try {
        const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${state.settings.apiKey}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': location.href,
                'X-Title': 'Local AI Studio'
            },
            body: JSON.stringify({
                model: state.settings.model,
                messages: messages
            })
        });

        if (!res.ok) throw new Error(`OpenRouter error: ${res.status}`);
        const data = await res.json();
        const reply = data.choices[0].message.content;

        const fileRegex = /```(\w+):([^\n]+)\n([\s\S]*?)```/g;
        let match, lastFile = null;
        while ((match = fileRegex.exec(reply))!== null) {
            const filename = match[2].trim();
            const content = match[3].trim();
            state.files[filename] = content;
            lastFile = filename;
        }

        state.chat[state.chat.length - 1] = { role: 'assistant', content: reply };
        saveState();
        renderChat();
        renderFiles();
        renderTabs();
        if (lastFile) openFile(lastFile);

    } catch (e) {
        state.chat[state.chat.length - 1] = { role: 'assistant', content: `Error: ${e.message}` };
        saveState();
        renderChat();
    }
    $('send-btn').disabled = false;
}

// Admin
$('admin-btn').onclick = () => $('admin-modal').classList.remove('hidden');
$('close-admin-btn').onclick = () => $('admin-modal').classList.add('hidden');
$('admin-login-btn').onclick = () => {
    if ($('admin-pass-input').value === state.settings.adminPass) {
        $('admin-login').classList.add('hidden');
        $('admin-settings').classList.remove('hidden');
        $('api-key-input').value = state.settings.apiKey;
        $('model-select').value = state.settings.model;
    } else alert('Wrong password');
};

$('save-settings-btn').onclick = () => {
    state.settings.apiKey = $('api-key-input').value.trim();
    state.settings.model = $('model-select').value;
    state.settings.fullHistory = $('full-history-toggle').checked;
    const newPass = $('admin-pass-set').value;
    if (newPass) state.settings.adminPass = newPass;
    saveState();
    alert('Saved');
    $('admin-modal').classList.add('hidden');
};

$('clear-chat-btn').onclick = () => {
    if (confirm('Wipe all chat memory?')) {
        state.chat = [];
        saveState();
        renderChat();
    }
};

// Files
$('new-file-btn').onclick = () => {
    const name = prompt('New file name: index.html, style.css, app.js etc');
    if (name &&!state.files[name]) {
        state.files[name] = '';
        saveState();
        renderFiles();
        renderTabs();
        openFile(name);
    }
};

$('download-all-btn').onclick = async () => {
    const zip = new JSZip();
    Object.entries(state.files).forEach(([name, content]) => {
        zip.file(name, content);
    });
    const blob = await zip.generateAsync({ type: 'blob' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'project.zip';
    a.click();
};

// Resizer
let isResizing = false;
$('resizer').onmousedown = e => { isResizing = true; e.preventDefault(); };
document.onmousemove = e => {
    if (!isResizing) return;
    const pct = e.clientX / window.innerWidth * 100;
    if (pct > 15 && pct < 85) $('chat-panel').style.width = pct + '%';
};
document.onmouseup = () => isResizing = false;

// Init
$('send-btn').onclick = sendMessage;
$('chat-input').onkeydown = e => {
    if (e.key === 'Enter' &&!e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
};
