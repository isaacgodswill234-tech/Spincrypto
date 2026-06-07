const $ = id => document.getElementById(id);
const LS_KEY = 'ai_studio_data';

// State
let state = {
    files: { 'index.html': '<h1>Hello</h1>' },
    activeFile: 'index.html',
    chat: [],
    settings: {
        apiKey: '',
        model: 'deepseek/deepseek-chat-v3.1:free',
        adminPass: 'admin',
        fullHistory: true
    }
};

// Load
function loadState() {
    const saved = localStorage.getItem(LS_KEY);
    if (saved) state = JSON.parse(saved);
    renderFiles();
    renderTabs();
    renderEditor();
    renderChat();
    $('full-history-toggle').checked = state.settings.fullHistory;
}

// Save
function saveState() {
    localStorage.setItem(LS_KEY, JSON.stringify(state));
}

// Files
function renderFiles() {
    $('file-tree').innerHTML = '';
    Object.keys(state.files).forEach(name => {
        const div = document.createElement('div');
        div.className = 'file-item' + (name === state.activeFile? ' active' : '');
        div.innerHTML = `<span>${name}</span><span class="file-delete">×</span>`;
        div.onclick = e => {
            if (e.target.className === 'file-delete') {
                delete state.files[name];
                if (state.activeFile === name) state.activeFile = Object.keys(state.files)[0] || null;
                saveState(); renderFiles(); renderTabs(); renderEditor();
            } else {
                state.activeFile = name;
                saveState(); renderFiles(); renderTabs(); renderEditor();
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
        tab.textContent = name;
        tab.onclick = () => {
            state.activeFile = name;
            saveState(); renderFiles(); renderTabs(); renderEditor();
        };
        $('tabs').appendChild(tab);
    });
}

function renderEditor() {
    const editor = $('editor');
    const preview = $('preview');
    if (!state.activeFile) {
        editor.innerHTML = '';
        return;
    }
    const content = state.files[state.activeFile] || '';
    editor.innerHTML = `<textarea>${content.replace(/</g, '&lt;')}</textarea>`;
    editor.querySelector('textarea').oninput = e => {
        state.files[state.activeFile] = e.target.value;
        saveState();
        updatePreview();
    };
    updatePreview();
}

function updatePreview() {
    const preview = $('preview');
    const editor = $('editor');
    if (state.activeFile && state.activeFile.endsWith('.html')) {
        preview.style.display = 'block';
        editor.style.display = 'none';
        preview.srcdoc = state.files[state.activeFile];
    } else {
        preview.style.display = 'none';
        editor.style.display = 'block';
    }
}

// Chat
function renderChat() {
    $('chat-messages').innerHTML = '';
    state.chat.forEach(m => {
        const div = document.createElement('div');
        div.className = `msg ${m.role}`;
        div.innerHTML = DOMPurify.sanitize(marked.parse(m.content));
        $('chat-messages').appendChild(div);
    });
    $('chat-messages').scrollTop = $('chat-messages').scrollHeight;
}

async function sendMessage() {
    const input = $('chat-input');
    const text = input.value.trim();
    if (!text) return;
    if (!state.settings.apiKey) {
        alert('Set your OpenRouter API key in Admin Panel first');
        return;
    }

    state.chat.push({ role: 'user', content: text });
    input.value = '';
    renderChat();
    saveState();

    // Add thinking message
    state.chat.push({ role: 'assistant', content: '...' });
    renderChat();

    let messages = [{ role: 'system', content: 'You are an AI coding assistant. When asked to create files, wrap code in ```language:filename format. Example: ```html:index.html' }];
    if (state.settings.fullHistory) {
        messages = messages.concat(state.chat.slice(0, -1));
    } else {
        messages.push(state.chat[state.chat.length - 2]);
    }

    try {
        const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${state.settings.apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: state.settings.model,
                messages: messages
            })
        });
        const data = await res.json();
        const reply = data.choices[0].message.content;

        // Parse file blocks
        const fileRegex = /```(\w+):([^\n]+)\n([\s\S]*?)```/g;
        let match;
        while ((match = fileRegex.exec(reply))!== null) {
            const [,, filename, content] = match;
            state.files[filename.trim()] = content.trim();
        }

        state.chat[state.chat.length - 1] = { role: 'assistant', content: reply };
        saveState();
        renderChat();
        renderFiles();
        renderTabs();
        renderEditor();
    } catch (e) {
        state.chat[state.chat.length - 1] = { role: 'assistant', content: 'Error: ' + e.message };
        saveState();
        renderChat();
    }
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
    } else {
        alert('Wrong password');
    }
};

$('save-settings-btn').onclick = () => {
    state.settings.apiKey = $('api-key-input').value;
    state.settings.model = $('model-select').value;
    state.settings.fullHistory = $('full-history-toggle').checked;
    const newPass = $('admin-pass-set').value;
    if (newPass) state.settings.adminPass = newPass;
    saveState();
    alert('Saved');
    $('admin-modal').classList.add('hidden');
};

$('clear-chat-btn').onclick = () => {
    if (confirm('Clear all chat memory? This cannot be undone.')) {
        state.chat = [];
        saveState();
        renderChat();
    }
};

// Files
$('new-file-btn').onclick = () => {
    const name = prompt('File name:');
    if (name &&!state.files[name]) {
        state.files[name] = '';
        state.activeFile = name;
        saveState(); renderFiles(); renderTabs(); renderEditor();
    }
};

$('download-all-btn').onclick = () => {
    Object.entries(state.files).forEach(([name, content]) => {
        const blob = new Blob([content], { type: 'text/plain' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = name;
        a.click();
    });
};

// Resizer
let isResizing = false;
$('resizer').onmousedown = () => isResizing = true;
document.onmousemove = e => {
    if (!isResizing) return;
    const pct = e.clientX / window.innerWidth * 100;
    if (pct > 20 && pct < 80) {
        $('chat-panel').style.width = pct + '%';
    }
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

loadState();