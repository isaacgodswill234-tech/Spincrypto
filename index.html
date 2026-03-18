<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>SpinCrypto - Vibrant Edition</title>
    
    <!-- Scripts & CDNs -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js" crossorigin></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js" crossorigin></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.5/babel.min.js" crossorigin></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/framer-motion@10.16.4/dist/framer-motion.js" crossorigin></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/canvas-confetti/1.9.2/confetti.browser.min.js" crossorigin></script>
    
    <!-- Firebase -->
    <script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js" crossorigin></script>
    <script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-auth-compat.js" crossorigin></script>
    <script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-database-compat.js" crossorigin></script>
    <script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-storage-compat.js" crossorigin></script>

    <!-- Telegram WebApp -->
    <script src="https://telegram.org/js/telegram-web-app.js" crossorigin></script>

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;900&display=swap');
        
        body {
            font-family: 'Outfit', sans-serif;
            background: #ffffff;
            color: #1a1a1a;
            overflow-x: hidden;
        }

        .candy-gradient {
            background: linear-gradient(135deg, #FF0080 0%, #7928CA 100%);
        }

        .vibrant-border {
            border: 3px solid transparent;
            background: linear-gradient(white, white) padding-box,
                        linear-gradient(to right, #FF0080, #7928CA) border-box;
        }

        .glass-card {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.05);
        }

        .wheel-slice {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .animate-float {
            animation: float 3s ease-in-out infinite;
        }

        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }

        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }

        @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
        }
        .animate-marquee {
            display: inline-block;
            animation: marquee 30s linear infinite;
        }

        .tab-active {
            background: linear-gradient(to right, #FF0080, #7928CA);
            color: white !important;
        }
    </style>

    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#FF0080',
                        secondary: '#7928CA',
                        accent: '#FFD600',
                        brightBlue: '#0070F3',
                        softPink: '#FFF0F6',
                        softBlue: '#F0F7FF',
                    },
                    borderRadius: {
                        '3xl': '1.5rem',
                        '4xl': '2rem',
                    }
                }
            }
        }
    </script>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        const { useState, useEffect, useRef, useMemo } = React;
        const MotionLib = window.Motion || window.FramerMotion || { 
            motion: { div: (props) => <div {...props} /> }, 
            AnimatePresence: ({children}) => children 
        };
        const { motion, AnimatePresence } = MotionLib;

        // --- Error Boundary ---
        class ErrorBoundary extends React.Component {
            constructor(props) {
                super(props);
                this.state = { hasError: false };
            }
            static getDerivedStateFromError(error) { return { hasError: true }; }
            componentDidCatch(error, errorInfo) { console.error("App Error:", error, errorInfo); }
            render() {
                if (this.state.hasError) {
                    return (
                        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-white">
                            <h1 className="text-2xl font-black mb-4">Something went wrong.</h1>
                            <button onClick={() => window.location.reload()} className="px-6 py-3 bg-primary text-white rounded-2xl font-black">Reload App</button>
                        </div>
                    );
                }
                return this.props.children;
            }
        }

        // --- Firebase Initialization ---
        const getStoredConfig = () => {
            const stored = localStorage.getItem('firebase_config');
            if (stored) return JSON.parse(stored);
            return {
                projectId: "gen-lang-client-0163222437",
                appId: "1:110886016178:web:615362c6c77d59498a65ab",
                apiKey: "AIzaSyBOFMgZ4KgaQhL3PVLYP2daB2xAuJjlELM",
                authDomain: "gen-lang-client-0163222437.firebaseapp.com",
                databaseURL: "https://gen-lang-client-0163222437-default-rtdb.firebaseio.com/",
                storageBucket: "gen-lang-client-0163222437.firebasestorage.app",
                adminIds: "",
                adsSdkUrl: "//libtl.com/sdk.js",
                adsZoneId: "10701758",
                adsFunctionName: "show_10091487",
                referralReward: "5",
                minAdsPerWithdrawal: "10",
                broadcastMessage: "Welcome to SpinCrypto! Earn spins by watching ads and completing tasks.",
                telegramBotToken: "",
                telegramChannelId: "",
                botUsername: "SpinCryptoBot",
                appName: "spin_app",
                minWithdrawal_TON_1: "10",
                minWithdrawal_TON_2: "20",
                minWithdrawal_TON_3: "50",
                minAds_TON_1: "10",
                minAds_TON_2: "20",
                minAds_TON_3: "50",
                minWithdrawal_USDT: "50",
                minWithdrawal_NOT: "10000",
                minWithdrawal_DOGS: "50000",
                minWithdrawal_HMSTR: "100000",
                minWithdrawal_PEPE: "1000000",
                minWithdrawal_SOL: "1",
                dailyAdsLimit: "0"
            };
        };

        const initialConfig = getStoredConfig();
        if (!firebase.apps.length) {
            firebase.initializeApp(initialConfig);
        }
        const auth = firebase.auth();
        const db = firebase.database();
        const storage = firebase.storage();

        // --- Constants ---
        const TOKENS = ['TON', 'USDT', 'NOT', 'DOGS', 'HMSTR', 'PEPE', 'SOL'];
        const TOKEN_ICONS = {
            TON: '💎', USDT: '💵', NOT: '🌑', DOGS: '🦴', HMSTR: '🐹', PEPE: '🐸', SOL: '☀️'
        };

        const WHEEL_SLICES = [
            { label: '0.1 TON', value: 0.1, token: 'TON', color: '#FF0080' },
            { label: '1 USDT', value: 1, token: 'USDT', color: '#0070F3' },
            { label: '500 NOT', value: 500, token: 'NOT', color: '#FFD600' },
            { label: '1000 DOGS', value: 1000, token: 'DOGS', color: '#7928CA' },
            { label: 'Better Luck', value: 0, token: 'NONE', color: '#f3f4f6' },
            { label: '0.5 TON', value: 0.5, token: 'TON', color: '#FF0080' },
            { label: '5 USDT', value: 5, token: 'USDT', color: '#0070F3' },
            { label: '2000 HMSTR', value: 2000, token: 'HMSTR', color: '#FFD600' },
        ];

        // --- Components ---

        // --- Icons (Inline SVGs for stability) ---
        const ICONS = {
            zap: (s) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
            calendar: (s) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
            users: (s) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
            wallet: (s) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"/><path d="M4 6v12c0 1.1.9 2 2 2h14v-4"/><path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"/></svg>,
            trophy: (s) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>,
            target: (s) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
            settings: (s) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>,
            crown: (s) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z"/></svg>,
            search: (s) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
            'check-circle': (s) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
            'alert-circle': (s) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
            info: (s) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        };

        const Icon = ({ name, className = "", size = 24 }) => {
            const renderIcon = ICONS[name] || ICONS.info;
            return (
                <span className={`inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
                    {renderIcon(size)}
                </span>
            );
        };

        const Card = ({ children, className = "" }) => (
            <div className={`glass-card rounded-2xl p-3 ${className}`}>
                {children}
            </div>
        );

        const Button = ({ children, onClick, className = "", variant = "primary", disabled = false }) => {
            const base = "py-2.5 px-4 rounded-xl font-black text-[11px] uppercase tracking-widest transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100";
            const variants = {
                primary: "candy-gradient text-white shadow-lg shadow-primary/20",
                secondary: "bg-softPink text-primary border-2 border-primary/10",
                outline: "bg-white border-2 border-zinc-100 text-zinc-500",
                accent: "bg-accent text-zinc-950 shadow-lg shadow-accent/20"
            };
            return (
                <button onClick={onClick} disabled={disabled} className={`${base} ${variants[variant]} ${className}`}>
                    {children}
                </button>
            );
        };

        // --- Main App ---

        function App() {
            const [config, setConfig] = useState(initialConfig);
            const [user, setUser] = useState(null);
            const [activeTab, setActiveTab] = useState('home');
            const [withdrawingToken, setWithdrawingToken] = useState(null);
            const [withdrawAddress, setWithdrawAddress] = useState('');
            const [withdrawAmount, setWithdrawAmount] = useState('');
            const [isSpinning, setIsSpinning] = useState(false);
            const [isAutoSpin, setIsAutoSpin] = useState(false);
            const [rotation, setRotation] = useState(0);
            const [leaderboard, setLeaderboard] = useState([]);
            const [topReferrers, setTopReferrers] = useState([]);
            const [tasks, setTasks] = useState([]);
            const [toasts, setToasts] = useState([]);
            const [isAdmin, setIsAdmin] = useState(false);
            const [editingTask, setEditingTask] = useState(null);
            const [recentSpins, setRecentSpins] = useState([]);
            const [stats, setStats] = useState({ totalUsers: 0, totalSpins: 0, totalWithdrawals: 0, totalDebt: 0 });
            const [allWithdrawals, setAllWithdrawals] = useState([]);
            const [searchQuery, setSearchQuery] = useState('');
            const [foundUser, setFoundUser] = useState(null);
            const [allUsers, setAllUsers] = useState([]);

            const tgUser = useMemo(() => window.Telegram?.WebApp?.initDataUnsafe?.user, []);
            const telegramId = useMemo(() => tgUser?.id?.toString(), [tgUser]);
            const startParam = useMemo(() => window.Telegram?.WebApp?.initDataUnsafe?.start_param, []);

            const adminIds = useMemo(() => {
                const ids = (config.adminIds || "").split(',').map(id => id.trim()).filter(id => id);
                return ids;
            }, [config.adminIds]);

            useEffect(() => {
                if (user) {
                    const isOwner = user.email === 'officialbonesceo@gmail.com';
                    const userTelegramId = user.telegramId?.toString();
                    const hasAdminId = adminIds.length > 0 && (adminIds.includes(user.uid) || (userTelegramId && adminIds.includes(userTelegramId)));
                    setIsAdmin(isOwner || hasAdminId);
                } else {
                    setIsAdmin(false);
                }
            }, [user, adminIds]);

            useEffect(() => {
                // Config Sync
                db.ref('config').on('value', (s) => {
                    if (s.exists()) {
                        const dbConfig = s.val();
                        setConfig(prev => {
                            const merged = { ...prev, ...dbConfig };
                            localStorage.setItem('firebase_config', JSON.stringify(merged));
                            return merged;
                        });
                    }
                });

                // Auth
                const unsubscribe = auth.onAuthStateChanged(async (u) => {
                    if (u) {
                        const snapshot = await db.ref(`users/${u.uid}`).get();
                        if (snapshot.exists()) {
                            const existingUser = snapshot.val();
                            const updates = {};
                            if (telegramId && existingUser.telegramId !== telegramId) {
                                updates.telegramId = telegramId;
                            }
                            if (tgUser?.username && existingUser.username !== tgUser.username) {
                                updates.username = tgUser.username;
                            }
                            if (Object.keys(updates).length > 0) {
                                await db.ref(`users/${u.uid}`).update(updates);
                                setUser({ ...existingUser, ...updates });
                            } else {
                                setUser(existingUser);
                            }
                        } else {
                            const newUser = {
                                uid: u.uid,
                                telegramId: telegramId || null,
                                username: tgUser?.username || u.displayName || `User_${u.uid.slice(0, 5)}`,
                                spins: 5,
                                totalSpinsPerformed: 0,
                                balances: { TON: 0, USDT: 0, NOT: 0, DOGS: 0, HMSTR: 0, PEPE: 0, SOL: 0 },
                                withdrawalCounts: { TON: 0, USDT: 0, NOT: 0, DOGS: 0, HMSTR: 0, PEPE: 0, SOL: 0 },
                                referralCount: 0,
                                adsWatched: 0,
                                adsSinceLastWithdrawal: 0,
                                dailyAdsWatched: 0,
                                lastAdWatchDate: "",
                                taskAttempts: {},
                                withdrawals: {},
                                lastDaily: 0
                            };
                            
                            // Handle Referral
                            const ref = startParam;
                            if (ref && ref !== u.uid && ref !== telegramId) {
                                // Try to find by UID first, then by Telegram ID if needed
                                let refUid = ref;
                                let refSnapshot = await db.ref(`users/${ref}`).get();
                                
                                // If not found by UID, it might be a Telegram ID
                                if (!refSnapshot.exists()) {
                                    const usersSnap = await db.ref('users').orderByChild('telegramId').equalTo(ref).limitToFirst(1).get();
                                    if (usersSnap.exists()) {
                                        refUid = Object.keys(usersSnap.val())[0];
                                        refSnapshot = await db.ref(`users/${refUid}`).get();
                                    }
                                }

                                if (refSnapshot.exists()) {
                                    const refData = refSnapshot.val();
                                    const reward = parseInt(config.referralReward || "5");
                                    await db.ref(`users/${refUid}`).update({
                                        spins: (refData.spins || 0) + reward,
                                        referralCount: (refData.referralCount || 0) + 1
                                    });
                                    newUser.referredBy = refUid;
                                }
                            }
                            await db.ref(`users/${u.uid}`).set(newUser);
                            setUser(newUser);
                        }
                        // Listen for updates
                        db.ref(`users/${u.uid}`).on('value', (s) => setUser(s.val()));
                    } else {
                        auth.signInAnonymously();
                    }
                });

                // Leaderboards
                db.ref('users').on('value', (s) => {
                    const data = s.val() || {};
                    const list = Object.values(data);
                    setAllUsers(list);
                    
                    // Top Spinners
                    const sortedSpins = [...list].sort((a, b) => (b.totalSpinsPerformed || 0) - (a.totalSpinsPerformed || 0)).slice(0, 5);
                    setLeaderboard(sortedSpins);

                    // Top Referrers
                    const sortedReferrals = [...list].sort((a, b) => (b.referralCount || 0) - (a.referralCount || 0)).slice(0, 5);
                    setTopReferrers(sortedReferrals);

                    // Stats for Admin
                    const users = list;
                    const totalSpins = users.reduce((acc, u) => acc + (u.totalSpinsPerformed || 0), 0);
                    const totalAds = users.reduce((acc, u) => acc + (u.adsWatched || 0), 0);
                    const totalReferrals = users.reduce((acc, u) => acc + (u.referralCount || 0), 0);
                    const avgSpins = users.length > 0 ? (totalSpins / users.length).toFixed(1) : 0;
                    
                    // Calculate total balances
                    const totalBalances = {};
                    TOKENS.forEach(t => {
                        totalBalances[t] = users.reduce((acc, u) => acc + (u.balances?.[t] || 0), 0).toFixed(2);
                    });

                    setStats(prev => ({ 
                        ...prev, 
                        totalUsers: users.length, 
                        totalSpins,
                        totalAds,
                        totalReferrals,
                        avgSpins,
                        totalBalances
                    }));
                });

                // Tasks
                db.ref('tasks').on('value', (s) => {
                    const data = s.val() || {};
                    setTasks(Object.values(data));
                });

                // Recent Spins for Ticker
                db.ref('recentSpins').limitToLast(10).on('value', (s) => {
                    const data = s.val() || {};
                    setRecentSpins(Object.values(data).reverse());
                });

                db.ref('withdrawals').on('value', (s) => {
                    const data = s.val() || {};
                    const list = Object.values(data);
                    setAllWithdrawals(list);
                    
                    const pending = list.filter(w => w.status === 'pending');
                    const approved = list.filter(w => w.status === 'approved');
                    
                    const totalDebt = pending.reduce((acc, curr) => acc + (parseFloat(curr.amount) || 0), 0);
                    const totalPaid = approved.reduce((acc, curr) => acc + (parseFloat(curr.amount) || 0), 0);
                    
                    setStats(prev => ({ 
                        ...prev, 
                        totalWithdrawals: list.length,
                        totalDebt: totalDebt.toFixed(2),
                        totalPaid: totalPaid.toFixed(2),
                        pendingCount: pending.length
                    }));
                });

                return () => {
                    unsubscribe();
                    if (user) db.ref(`users/${user.uid}`).off();
                    db.ref('users').off();
                    db.ref('tasks').off();
                    db.ref('recentSpins').off();
                    db.ref('withdrawals').off();
                };
            }, [config]);

            useEffect(() => {
                if (config.adsSdkUrl) {
                    const script = document.createElement('script');
                    script.src = config.adsSdkUrl;
                    script.async = true;
                    if (config.adsZoneId) {
                        script.setAttribute('data-zone', config.adsZoneId);
                    }
                    if (config.adsFunctionName) {
                        script.setAttribute('data-sdk', config.adsFunctionName);
                    }
                    document.head.appendChild(script);
                }
            }, [config.adsSdkUrl, config.adsZoneId, config.adsFunctionName]);
            const addToast = (message, type = 'info') => {
                const id = Date.now() + Math.random();
                setToasts(prev => [...prev, { id, message, type }]);
                setTimeout(() => {
                    setToasts(prev => prev.filter(t => t.id !== id));
                }, 3000);
            };

            const handleSpin = async () => {
                if (isSpinning || user.spins <= 0) return;
                
                try {
                    setIsSpinning(true);
                    const extraDegrees = Math.floor(Math.random() * 360) + 1440; // 4 full rotations
                    const newRotation = rotation + extraDegrees;
                    setRotation(newRotation);

                    setTimeout(async () => {
                        setIsSpinning(false);
                        const finalAngle = newRotation % 360;
                        const sliceAngle = 360 / WHEEL_SLICES.length;
                        const index = Math.floor(((360 - finalAngle + (sliceAngle / 2)) % 360) / sliceAngle);
                        const result = WHEEL_SLICES[index];

                        if (result.token !== 'NONE') {
                            const newBalances = { ...user.balances };
                            newBalances[result.token] = (newBalances[result.token] || 0) + result.value;
                            await db.ref(`users/${user.uid}`).update({
                                balances: newBalances,
                                spins: user.spins - 1,
                                totalSpinsPerformed: user.totalSpinsPerformed + 1
                            });

                            // Add to recent spins
                            if (result.value > 0) {
                                await db.ref('recentSpins').push({
                                    username: user.username,
                                    label: result.label,
                                    timestamp: Date.now()
                                });
                            }

                            addToast(`Won ${result.label}!`, 'success');
                            try {
                                if (window.confetti) {
                                    window.confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
                                }
                            } catch (e) {
                                console.error("Confetti error:", e);
                            }
                        } else {
                            await db.ref(`users/${user.uid}`).update({
                                spins: user.spins - 1,
                                totalSpinsPerformed: user.totalSpinsPerformed + 1
                            });
                            addToast("Better luck next time!", 'info');
                        }
                    }, 4000);
                } catch (error) {
                    console.error("Spin error:", error);
                    setIsSpinning(false);
                    addToast("Failed to process spin. Try again.", "error");
                }
            };

            useEffect(() => {
                if (isAutoSpin && !isSpinning && user && user.spins > 0) {
                    const timer = setTimeout(() => {
                        handleSpin();
                    }, 1500);
                    return () => clearTimeout(timer);
                } else if (isAutoSpin && user && user.spins <= 0 && !isSpinning) {
                    setIsAutoSpin(false);
                    addToast("Auto-spin stopped: Out of spins", "info");
                }
            }, [isAutoSpin, isSpinning, user?.spins]);

            const handleDailyClaim = async () => {
                const now = Date.now();
                const lastClaim = user.lastDailyClaim || 0;
                const oneDay = 24 * 60 * 60 * 1000;

                if (now - lastClaim < oneDay) {
                    const remaining = oneDay - (now - lastClaim);
                    const hours = Math.floor(remaining / (60 * 60 * 1000));
                    const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000));
                    addToast(`Next claim in ${hours}h ${minutes}m`, "info");
                    return;
                }

                try {
                    await db.ref(`users/${user.uid}`).update({
                        spins: (user.spins || 0) + 5,
                        lastDailyClaim: now
                    });
                    addToast("Daily claim successful! +5 Spins", "success");
                } catch (error) {
                    addToast("Failed to claim daily reward", "error");
                }
            };

            const handleWithdraw = async (token, address, amount) => {
                const count = (user.withdrawalCounts && user.withdrawalCounts[token]) || 0;
                const tier = Math.min(count + 1, 3);
                
                let minWithdrawal, minAds;
                
                if (token === 'TON') {
                    minWithdrawal = parseFloat(config[`minWithdrawal_TON_${tier}`] || config.minWithdrawal_TON_1);
                    minAds = parseInt(config[`minAds_TON_${tier}`] || config.minAds_TON_1);
                } else {
                    minWithdrawal = parseFloat(config[`minWithdrawal_${token}`] || "0");
                    minAds = parseInt(config.minAdsPerWithdrawal || "0");
                }

                const userBalance = user.balances[token] || 0;
                const adsWatched = user.adsSinceLastWithdrawal || 0;

                if (!address || address.length < 10) {
                    addToast("Please enter a valid wallet address", "error");
                    return;
                }

                const withdrawAmount = parseFloat(amount);
                if (isNaN(withdrawAmount) || withdrawAmount < minWithdrawal) {
                    addToast(`Minimum withdrawal is ${minWithdrawal} ${token}`, "error");
                    return;
                }

                if (withdrawAmount > userBalance) {
                    addToast("Insufficient balance", "error");
                    return;
                }

                if (adsWatched < minAds) {
                    addToast(`You need to watch ${minAds - adsWatched} more ads to withdraw`, "error");
                    return;
                }

                try {
                    const withdrawalId = db.ref('withdrawals').push().key;
                    const withdrawalData = {
                        id: withdrawalId,
                        uid: user.uid,
                        username: user.username,
                        token,
                        amount: withdrawAmount,
                        address,
                        status: 'pending',
                        timestamp: Date.now()
                    };

                    await db.ref(`withdrawals/${withdrawalId}`).set(withdrawalData);
                    await db.ref(`users/${user.uid}/withdrawals/${withdrawalId}`).set(withdrawalData);
                    
                    const newBalances = { ...user.balances };
                    newBalances[token] = userBalance - withdrawAmount;
                    await db.ref(`users/${user.uid}`).update({
                        balances: newBalances,
                        adsSinceLastWithdrawal: 0
                    });

                    // Send to Telegram
                    const botToken = config.telegramBotToken;
                    const channelId = config.telegramChannelId;
                    if (botToken && channelId) {
                        const message = `🚀 *New Withdrawal Request*\n\n👤 *User:* @${withdrawalData.username}\n🆔 *UID:* \`${withdrawalData.uid}\`\n💰 *Amount:* ${withdrawalData.amount} ${withdrawalData.token}\n🕒 *Time:* ${new Date(withdrawalData.timestamp).toLocaleString()}\n\n_Status: Pending Approval_`;
                        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                chat_id: channelId,
                                text: message,
                                parse_mode: 'Markdown'
                            })
                        }).catch(e => console.error("Telegram error:", e));
                    }

                    addToast("Withdrawal request sent! Takes 6-12 hours.", "success");
                } catch (error) {
                    console.error("Withdrawal error:", error);
                    addToast("Failed to request withdrawal.", "error");
                }
            };

            const handleActionWithdrawal = async (id, uid, status) => {
                try {
                    await db.ref(`withdrawals/${id}`).update({ status });
                    await db.ref(`users/${uid}/withdrawals/${id}`).update({ status });
                    
                    if (status === 'approved') {
                        const withdrawal = allWithdrawals.find(w => w.id === id);
                        if (withdrawal) {
                            const currentCount = await db.ref(`users/${uid}/withdrawalCounts/${withdrawal.token}`).get();
                            const newCount = (currentCount.val() || 0) + 1;
                            await db.ref(`users/${uid}/withdrawalCounts/${withdrawal.token}`).set(newCount);
                        }
                    }
                    
                    addToast(`Withdrawal ${status}!`, 'success');
                } catch (e) {
                    addToast("Action failed", "error");
                }
            };

            if (!user) return (
                <div className="h-screen flex items-center justify-center candy-gradient">
                    <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity }} className="text-white font-black text-4xl italic">
                        SPINCRYPTO
                    </motion.div>
                </div>
            );

            return (
                <div className="min-h-screen pb-32">
                    {/* Ticker */}
                    <div className="bg-zinc-900 text-white py-1 overflow-hidden whitespace-nowrap relative z-50">
                        <div className="flex animate-marquee gap-8">
                            {recentSpins.length > 0 ? recentSpins.map((s, i) => (
                                <span key={i} className="text-[10px] font-black uppercase tracking-widest">
                                    🚀 {s.username} just claimed <span className="text-accent">{s.label}</span>!
                                </span>
                            )) : (
                                <span className="text-[10px] font-black uppercase tracking-widest">
                                    Welcome to SpinCrypto! Start spinning to win big!
                                </span>
                            )}
                        </div>
                    </div>

                              {config.broadcastMessage && (
                        <div className="bg-primary/10 border-b border-primary/5 p-1 text-center">
                            <p className="text-[8px] font-black text-primary uppercase tracking-widest animate-pulse">
                                📢 {config.broadcastMessage}
                            </p>
                        </div>
                    )}

                    {/* Header */}
                    <header className="p-2 flex items-center justify-between sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-zinc-100">
                        <div className="flex items-center gap-1.5">
                            <div className="w-6 h-6 rounded-lg candy-gradient flex items-center justify-center shadow-lg shadow-primary/20">
                                <Icon name="zap" className="text-white" size={14} />
                            </div>
                            <div>
                                <h1 className="text-sm font-black tracking-tighter leading-none">SPINCRYPTO</h1>
                                <p className="text-[7px] text-primary font-bold uppercase tracking-widest">Vibrant Edition</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <div className="bg-softPink border border-primary/10 rounded-lg px-2 py-1 flex items-center gap-1.5">
                                <Icon name="zap" className="text-primary" size={10} />
                                <span className="text-[10px] font-black text-primary">{user.spins}</span>
                            </div>
                        </div>
                    </header>

                    <main className="p-2 max-w-md mx-auto">
                        <div className="w-full">
                            {activeTab === 'home' && (
                                <div className="space-y-3 flex flex-col items-center animate-in fade-in duration-300">
                                    {/* Stats Grid */}
                                    <div className="w-full grid grid-cols-3 gap-1.5">
                                        <Card 
                                            onClick={handleDailyClaim}
                                            className="flex flex-col items-center gap-0.5 bg-softPink border-primary/5 cursor-pointer hover:scale-105 transition-transform p-1.5"
                                        >
                                            <Icon name="calendar" className="text-primary" size={12} />
                                            <p className="text-[6px] font-black uppercase text-zinc-400">Daily</p>
                                            <p className="text-[8px] font-black text-primary">CLAIM</p>
                                        </Card>
                                        <Card className="flex flex-col items-center gap-0.5 bg-softBlue border-brightBlue/5 p-1.5">
                                            <Icon name="zap" className="text-brightBlue" size={12} />
                                            <p className="text-[6px] font-black uppercase text-zinc-400">Total</p>
                                            <p className="text-[8px] font-black text-brightBlue">{user.totalSpinsPerformed}</p>
                                        </Card>
                                        <Card className="flex flex-col items-center gap-0.5 bg-yellow-50 border-accent/5 p-1.5">
                                            <Icon name="users" className="text-accent" size={12} />
                                            <p className="text-[6px] font-black uppercase text-zinc-400">Friends</p>
                                            <p className="text-[8px] font-black text-accent">{user.referralCount}</p>
                                        </Card>
                                    </div>

                                    {/* Wheel Section */}
                                    <div className="relative py-2">
                                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-30">
                                            <div className="w-4 h-4 bg-white rounded-full shadow-xl flex items-center justify-center border border-zinc-100">
                                                <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[7px] border-t-zinc-900"></div>
                                            </div>
                                        </div>
                                        <div className="relative w-48 h-48 rounded-full border-[6px] border-white shadow-xl overflow-hidden bg-zinc-50 ring-2 ring-zinc-50">
                                            <div 
                                                className="w-full h-full relative transition-transform duration-[4000ms] ease-[cubic-bezier(0.15,0,0.15,1)]" 
                                                style={{ transform: `rotate(${rotation}deg)` }}
                                            >
                                                {WHEEL_SLICES.map((s, i) => {
                                                    const angle = 360 / WHEEL_SLICES.length;
                                                    return (
                                                        <div 
                                                            key={i} 
                                                            className="absolute top-0 left-1/2 w-1/2 h-full origin-left" 
                                                            style={{ 
                                                                transform: `rotate(${i * angle}deg)`, 
                                                                backgroundColor: s.color, 
                                                                clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 50%)',
                                                                opacity: 0.9
                                                            }}
                                                        >
                                                            <div className="absolute top-8 left-4 -rotate-90 flex flex-col items-center">
                                                                <span className="text-[6px] font-black text-white uppercase tracking-tighter text-center leading-none drop-shadow-md">{s.label}</span>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            <div className="absolute inset-0 m-auto w-8 h-8 bg-white rounded-full border-2 border-zinc-50 z-20 flex items-center justify-center shadow-lg">
                                                <Icon name="zap" className="text-primary" size={14} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full space-y-2">
                                        <div className="flex gap-2">
                                            <Button 
                                                onClick={handleSpin} 
                                                disabled={isSpinning || user.spins <= 0}
                                                className="flex-[2] text-[10px] py-2 shadow-lg shadow-primary/20"
                                            >
                                                {isSpinning ? 'SPINNING...' : 'SPIN NOW'}
                                            </Button>
                                            <Button
                                                variant={isAutoSpin ? "accent" : "outline"}
                                                onClick={() => {
                                                    if (user.spins <= 0 && !isAutoSpin) {
                                                        addToast("No spins left for auto-spin", "error");
                                                        return;
                                                    }
                                                    setIsAutoSpin(!isAutoSpin);
                                                    addToast(isAutoSpin ? "Auto-spin OFF" : "Auto-spin ON", "info");
                                                }}
                                                className="flex-1 text-[8px] py-2 flex flex-col items-center justify-center leading-none"
                                            >
                                                <Icon name="zap" size={10} className={isAutoSpin ? "animate-pulse" : ""} />
                                                AUTO
                                            </Button>
                                        </div>
                                        
                                        <Button 
                                            onClick={async () => {
                                                const funcName = config.adsFunctionName;
                                                const zoneId = config.adsZoneId;
                                                const dailyLimit = parseInt(config.dailyAdsLimit || "0");
                                                const today = new Date().toISOString().split('T')[0];
                                                const userLastDate = user.lastAdWatchDate || "";
                                                let dailyCount = user.dailyAdsWatched || 0;

                                                if (userLastDate !== today) {
                                                    dailyCount = 0;
                                                }

                                                if (dailyLimit > 0 && dailyCount >= dailyLimit) {
                                                    addToast(`Daily limit of ${dailyLimit} ads reached!`, "error");
                                                    return;
                                                }
                                                
                                                // Try to call the function directly or through window
                                                let adFunc = window[funcName];
                                                
                                                if (!adFunc && typeof eval !== 'undefined') {
                                                    try {
                                                        adFunc = eval(funcName);
                                                    } catch (e) {}
                                                }
                                                
                                                if (!adFunc || typeof adFunc !== 'function') {
                                                    addToast("Ad SDK not ready. Please wait or reload.", "error");
                                                    console.log("Ad function not found:", funcName, "Available on window:", Object.keys(window).filter(k => k.toLowerCase().includes('ad') || k.toLowerCase().includes('show')));
                                                    return;
                                                }

                                                addToast("Loading Ad...", "info");
                                                console.log(`Calling ad function: ${funcName} with zoneId: ${zoneId}`);

                                                try {
                                                    // Some SDKs expect an object, some a number, some nothing
                                                    // We try to be flexible
                                                    let adResult = adFunc(zoneId) || adFunc({ zoneId }) || adFunc();
                                                    
                                                    // Handle Adsgram style (init().show())
                                                    if (adResult && typeof adResult.show === 'function') {
                                                        adResult = adResult.show();
                                                    }
                                                    
                                                    if (adResult && typeof adResult.then === 'function') {
                                                        adResult.then(async () => {
                                                            console.log("Ad completed successfully");
                                                            await db.ref(`users/${user.uid}`).update({
                                                                spins: (user.spins || 0) + 1,
                                                                adsWatched: (user.adsWatched || 0) + 1,
                                                                adsSinceLastWithdrawal: (user.adsSinceLastWithdrawal || 0) + 1,
                                                                dailyAdsWatched: dailyCount + 1,
                                                                lastAdWatchDate: today
                                                            });
                                                            addToast("Ad watched! +1 Spin", "success");
                                                        }).catch(e => {
                                                            console.error("Ad Promise Error:", e);
                                                            addToast("Ad failed to load", "error");
                                                        });
                                                    } else {
                                                        // If it's not a promise, we assume it showed and just wait a bit or give reward
                                                        setTimeout(async () => {
                                                            await db.ref(`users/${user.uid}`).update({
                                                                spins: (user.spins || 0) + 1,
                                                                adsWatched: (user.adsWatched || 0) + 1,
                                                                adsSinceLastWithdrawal: (user.adsSinceLastWithdrawal || 0) + 1,
                                                                dailyAdsWatched: dailyCount + 1,
                                                                lastAdWatchDate: today
                                                            });
                                                            addToast("Ad watched! +1 Spin", "success");
                                                        }, 5000);
                                                    }
                                                } catch (e) {
                                                    console.error("Ad Execution Error:", e);
                                                    addToast("Ad error", "error");
                                                }
                                            }} 
                                            variant="secondary"
                                            className="w-full py-1.5 flex items-center justify-center gap-1.5 border-2 border-primary/10 text-[10px]"
                                        >
                                            <Icon name="play" size={12} />
                                            WATCH AD (+1 SPIN)
                                        </Button>
                                        {parseInt(config.dailyAdsLimit || "0") > 0 && (
                                            <div className="text-[8px] text-center mt-1 text-zinc-400 font-bold uppercase tracking-widest">
                                                Daily Limit: {user.lastAdWatchDate === new Date().toISOString().split('T')[0] ? user.dailyAdsWatched || 0 : 0}/{config.dailyAdsLimit}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'wallet' && (
                                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                                    <div className="flex items-center justify-between mb-1">
                                        <h2 className="text-base font-black tracking-tighter">WALLET</h2>
                                        <Icon name="wallet" className="text-zinc-300" size={18} />
                                    </div>
                                    <div className="space-y-3">
                                        <div className="p-2.5 bg-zinc-50 rounded-xl border border-zinc-100">
                                            <p className="text-[8px] font-black text-zinc-400 uppercase tracking-widest mb-1">Referral Link</p>
                                            <div className="flex items-center gap-1.5">
                                                <input 
                                                    readOnly 
                                                    value={`https://t.me/${config.botUsername}/${config.appName}?startapp=${user.telegramId || user.uid}`}
                                                    className="flex-1 bg-white border border-zinc-100 rounded-lg p-1.5 text-[9px] font-mono focus:outline-none"
                                                />
                                                <Button 
                                                    variant="secondary" 
                                                    className="py-1.5 px-3 text-[9px]"
                                                    onClick={() => {
                                                        navigator.clipboard.writeText(`https://t.me/${config.botUsername}/${config.appName}?startapp=${user.telegramId || user.uid}`);
                                                        addToast("Link copied!", "success");
                                                    }}
                                                >
                                                    Copy
                                                </Button>
                                            </div>
                                            <p className="text-[8px] text-primary font-black mt-1.5 uppercase tracking-widest">
                                                Earn {config.referralReward || 5} Spins per referral!
                                            </p>
                                        </div>

                                        <div className="p-2.5 bg-zinc-50 rounded-xl border border-zinc-100">
                                            <p className="text-[8px] font-black text-zinc-400 uppercase tracking-widest mb-1">Your Telegram ID</p>
                                            <div className="flex items-center gap-1.5">
                                                <input 
                                                    readOnly 
                                                    value={user.telegramId || "Not Linked"}
                                                    className="flex-1 bg-white border border-zinc-100 rounded-lg p-1.5 text-[9px] font-mono focus:outline-none"
                                                />
                                                <Button 
                                                    variant="secondary" 
                                                    className="py-1.5 px-3 text-[9px]"
                                                    onClick={() => {
                                                        if (user.telegramId) {
                                                            navigator.clipboard.writeText(user.telegramId);
                                                            addToast("ID copied!", "success");
                                                        }
                                                    }}
                                                >
                                                    Copy
                                                </Button>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 gap-3">
                                            {TOKENS.map(t => {
                                                const count = (user.withdrawalCounts && user.withdrawalCounts[t]) || 0;
                                                const tier = Math.min(count + 1, 3);
                                                
                                                let minWithdrawal, minAds;
                                                if (t === 'TON') {
                                                    minWithdrawal = parseFloat(config[`minWithdrawal_TON_${tier}`] || config.minWithdrawal_TON_1);
                                                    minAds = parseInt(config[`minAds_TON_${tier}`] || config.minAds_TON_1);
                                                } else {
                                                    minWithdrawal = parseFloat(config[`minWithdrawal_${t}`] || "0");
                                                    minAds = parseInt(config.minAdsPerWithdrawal || "0");
                                                }

                                                const canWithdraw = (user.balances[t] || 0) >= minWithdrawal && (user.adsSinceLastWithdrawal || 0) >= minAds;
                                                
                                                if (withdrawingToken === t) {
                                                    return (
                                                        <Card key={t} className="p-3 space-y-3 border-primary/30 bg-primary/5">
                                                            <div className="flex items-center justify-between">
                                                                <h3 className="text-[10px] font-black uppercase tracking-widest">Withdraw {t}</h3>
                                                                <Button variant="secondary" className="p-1 h-5 w-5" onClick={() => setWithdrawingToken(null)}>
                                                                    <Icon name="x" size={12} />
                                                                </Button>
                                                            </div>
                                                            <div className="space-y-1">
                                                                <label className="text-[8px] font-black uppercase text-zinc-400">Wallet Address</label>
                                                                <input 
                                                                    type="text" 
                                                                    value={withdrawAddress}
                                                                    onChange={(e) => setWithdrawAddress(e.target.value)}
                                                                    placeholder="Enter address"
                                                                    className="w-full bg-white border border-zinc-200 rounded-lg px-3 py-1.5 text-[10px] font-mono focus:outline-none focus:border-primary"
                                                                />
                                                            </div>
                                                            <div className="space-y-1">
                                                                <label className="text-[8px] font-black uppercase text-zinc-400">Amount (Min: {minWithdrawal})</label>
                                                                <input 
                                                                    type="number" 
                                                                    value={withdrawAmount}
                                                                    onChange={(e) => setWithdrawAmount(e.target.value)}
                                                                    placeholder={`Min ${minWithdrawal}`}
                                                                    className="w-full bg-white border border-zinc-200 rounded-lg px-3 py-1.5 text-[10px] font-mono focus:outline-none focus:border-primary"
                                                                />
                                                            </div>
                                                            <Button 
                                                                variant="primary" 
                                                                className="w-full py-2 text-[10px]"
                                                                onClick={() => {
                                                                    handleWithdraw(t, withdrawAddress, withdrawAmount);
                                                                    setWithdrawingToken(null);
                                                                    setWithdrawAddress('');
                                                                    setWithdrawAmount('');
                                                                }}
                                                            >
                                                                Confirm Withdrawal
                                                            </Button>
                                                        </Card>
                                                    );
                                                }
                                                
                                                return (
                                                    <Card key={t} className="flex items-center justify-between p-2 hover:border-primary/20 transition-all">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-9 h-9 rounded-xl bg-zinc-50 flex items-center justify-center text-lg">
                                                                {TOKEN_ICONS[t]}
                                                            </div>
                                                            <div>
                                                                <p className="text-[8px] font-black text-zinc-400 uppercase tracking-widest">{t}</p>
                                                                <p className="text-sm font-black text-zinc-900 font-mono">{user.balances[t] || 0}</p>
                                                            </div>
                                                        </div>
                                                        <Button 
                                                            variant={canWithdraw ? "primary" : "secondary"} 
                                                            className="py-1.5 px-3 text-[8px]"
                                                             onClick={() => {
                                                                 setWithdrawingToken(t);
                                                                 setWithdrawAmount(user.balances[t] || 0);
                                                             }}
                                                        >
                                                            Withdraw
                                                        </Button>
                                                    </Card>
                                                );
                                            })}
                                        </div>

                                        {user.withdrawals && Object.keys(user.withdrawals).length > 0 && (
                                            <div className="space-y-2">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Withdrawal History</h3>
                                                    <span className="text-[7px] font-black text-primary uppercase tracking-widest animate-pulse">Processing: 6-12h</span>
                                                </div>
                                                {Object.values(user.withdrawals).reverse().map(w => (
                                                    <div key={w.id} className="p-2 bg-zinc-50 rounded-xl border border-zinc-100 flex items-center justify-between">
                                                        <div>
                                                            <p className="text-[9px] font-black uppercase tracking-widest">{w.amount} {w.token}</p>
                                                            <p className="text-[7px] text-zinc-400">{new Date(w.timestamp).toLocaleString()}</p>
                                                        </div>
                                                        <div className={`px-1.5 py-0.5 rounded-lg text-[7px] font-black uppercase tracking-widest ${
                                                            w.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                                                            w.status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                                        }`}>
                                                            {w.status}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'leaderboard' && (
                                <div className="space-y-3 animate-in fade-in slide-in-from-right-4 duration-300">
                                    <div className="flex items-center justify-between mb-1">
                                        <h2 className="text-base font-black tracking-tighter">LEADERBOARD</h2>
                                        <Icon name="trophy" className="text-accent" size={18} />
                                    </div>

                                    <div className="space-y-2">
                                        <div className="space-y-1.5">
                                            <h3 className="text-[8px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-1">
                                                <Icon name="zap" size={10} className="text-primary" />
                                                Top Spinners
                                            </h3>
                                            {leaderboard.map((u, i) => (
                                                <Card key={u.uid} className={`flex items-center justify-between p-1.5 ${u.uid === user.uid ? 'vibrant-border' : ''}`}>
                                                    <div className="flex items-center gap-2">
                                                        <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-[9px] font-black ${i === 0 ? 'bg-accent text-zinc-950' : 'bg-zinc-50 text-zinc-400'}`}>
                                                            {i + 1}
                                                        </div>
                                                        <div>
                                                            <p className="font-black text-[10px]">@{u.username}</p>
                                                            <p className="text-[7px] text-zinc-400 uppercase font-bold">ID: {u.telegramId || u.uid.slice(0, 8)} • {u.totalSpinsPerformed} Spins</p>
                                                        </div>
                                                    </div>
                                                    {i === 0 && <Icon name="crown" size={12} className="text-accent" />}
                                                </Card>
                                            ))}
                                        </div>

                                        <div className="space-y-1.5">
                                            <h3 className="text-[8px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-1">
                                                <Icon name="users" size={10} className="text-accent" />
                                                Top Referrers
                                            </h3>
                                            {topReferrers.map((u, i) => (
                                                <Card key={u.uid} className={`flex items-center justify-between p-1.5 ${u.uid === user.uid ? 'vibrant-border' : ''}`}>
                                                    <div className="flex items-center gap-2">
                                                        <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-[9px] font-black ${i === 0 ? 'bg-accent text-zinc-950' : 'bg-zinc-50 text-zinc-400'}`}>
                                                            {i + 1}
                                                        </div>
                                                        <div>
                                                            <p className="font-black text-[10px]">@{u.username}</p>
                                                            <p className="text-[7px] text-zinc-400 uppercase font-bold">ID: {u.telegramId || u.uid.slice(0, 8)} • {u.referralCount} Friends</p>
                                                        </div>
                                                    </div>
                                                    {i === 0 && <Icon name="crown" size={12} className="text-accent" />}
                                                </Card>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'tasks' && (
                                <div className="space-y-3 animate-in fade-in slide-in-from-left-4 duration-300">
                                    <div className="flex items-center justify-between mb-1">
                                        <h2 className="text-base font-black tracking-tighter">MISSIONS</h2>
                                        <Icon name="target" className="text-primary" size={18} />
                                    </div>
                                    <div className="space-y-1.5">
                                        {tasks.length === 0 ? (
                                            <div className="py-6 text-center">
                                                <Icon name="search" className="mx-auto text-zinc-100 mb-1" size={24} />
                                                <p className="text-zinc-400 font-bold uppercase text-[8px]">No missions available</p>
                                            </div>
                                        ) : (
                                            tasks.map(t => (
                                                <Card key={t.id} className="p-1.5 flex items-center justify-between group hover:border-primary/20 transition-all">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-8 h-8 rounded-lg bg-softPink flex items-center justify-center text-primary">
                                                            <Icon name="target" size={14} />
                                                        </div>
                                                        <div>
                                                            <p className="font-black text-[10px] leading-tight">{t.title}</p>
                                                            <p className="text-[8px] text-primary font-black uppercase tracking-widest">+{t.reward} Spins</p>
                                                        </div>
                                                    </div>
                                                    <Button 
                                                        variant="secondary" 
                                                        className="py-1 px-2.5 text-[8px]"
                                                        onClick={async () => {
                                                            const attempts = (user.taskAttempts && user.taskAttempts[t.id]) || 0;
                                                            
                                                            if (t.link && attempts === 0) {
                                                                window.open(t.link, '_blank');
                                                            }

                                                            if (attempts < 2) {
                                                                const newAttempts = attempts + 1;
                                                                await db.ref(`users/${user.uid}/taskAttempts/${t.id}`).set(newAttempts);
                                                                addToast(`Step ${newAttempts}/3: Please complete the task!`, "info");
                                                            } else {
                                                                addToast(`Completing mission: ${t.title}...`, "info");
                                                                setTimeout(async () => {
                                                                    await db.ref(`users/${user.uid}`).update({
                                                                        spins: (user.spins || 0) + t.reward
                                                                    });
                                                                    // Mark as completed by setting attempts to a high number or removing
                                                                    await db.ref(`users/${user.uid}/taskAttempts/${t.id}`).set(999);
                                                                    addToast(`Mission complete! +${t.reward} Spins`, "success");
                                                                }, 1500);
                                                            }
                                                        }}
                                                        disabled={user.taskAttempts && user.taskAttempts[t.id] === 999}
                                                    >
                                                        {user.taskAttempts && user.taskAttempts[t.id] === 999 ? 'DONE' : 'START'}
                                                    </Button>
                                                </Card>
                                            ))
                                        )}
                                    </div>
                                </div>
                            )}
                            {activeTab === 'admin' && (
                                <div className="space-y-3 animate-in fade-in zoom-in-95 duration-300">
                                    <div className="flex items-center justify-between mb-1">
                                        <h2 className="text-lg font-black tracking-tighter">ADMIN</h2>
                                        <Icon name="settings" className="text-zinc-300" size={20} />
                                    </div>

                                    <div className="grid grid-cols-3 gap-1.5">
                                        <Card className="p-1.5 bg-softPink border-primary/5">
                                            <p className="text-[6px] font-black uppercase text-zinc-400">Users</p>
                                            <p className="text-[10px] font-black text-primary">{stats.totalUsers}</p>
                                        </Card>
                                        <Card className="p-1.5 bg-softBlue border-brightBlue/5">
                                            <p className="text-[6px] font-black uppercase text-zinc-400">Spins</p>
                                            <p className="text-[10px] font-black text-brightBlue">{stats.totalSpins}</p>
                                        </Card>
                                        <Card className="p-1.5 bg-yellow-50 border-accent/5">
                                            <p className="text-[6px] font-black uppercase text-zinc-400">Pending</p>
                                            <p className="text-[10px] font-black text-accent">{stats.pendingCount || 0}</p>
                                        </Card>
                                        <Card className="p-1.5 bg-green-50 border-green-500/5">
                                            <p className="text-[6px] font-black uppercase text-zinc-400">Paid</p>
                                            <p className="text-[10px] font-black text-green-600">${stats.totalPaid || 0}</p>
                                        </Card>
                                        <Card className="p-1.5 bg-purple-50 border-purple-500/5">
                                            <p className="text-[6px] font-black uppercase text-zinc-400">Ads</p>
                                            <p className="text-[10px] font-black text-purple-600">{stats.totalAds || 0}</p>
                                        </Card>
                                        <Card className="p-1.5 bg-orange-50 border-orange-500/5">
                                            <p className="text-[6px] font-black uppercase text-zinc-400">Refs</p>
                                            <p className="text-[10px] font-black text-orange-600">{stats.totalReferrals || 0}</p>
                                        </Card>
                                    </div>

                                    <Card className="p-2 space-y-1.5">
                                        <h3 className="font-black text-[8px] uppercase tracking-widest text-primary">User Balances (Debt)</h3>
                                        <div className="grid grid-cols-2 gap-1.5">
                                            {TOKENS.map(t => (
                                                <div key={t} className="flex justify-between items-center p-1.5 bg-zinc-50 rounded-lg">
                                                    <span className="text-[8px] font-bold text-zinc-500">{t}</span>
                                                    <span className="text-[9px] font-black">{stats.totalBalances?.[t] || 0}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </Card>
                                    
                                    <Card className="p-2 space-y-1.5">
                                        <div className="flex items-center justify-between">
                                            <h3 className="font-black text-[8px] uppercase tracking-widest text-primary">Admin Management</h3>
                                            <Button 
                                                size="sm" 
                                                className="py-0.5 px-2 text-[7px] h-5"
                                                onClick={async () => {
                                                    const currentAdmins = (config.adminIds || "").split(',').map(id => id.trim()).filter(id => id);
                                                    const myId = user.telegramId || user.uid;
                                                    if (!currentAdmins.includes(myId)) {
                                                        const newAdmins = [...currentAdmins, myId].join(',');
                                                        await db.ref('config').update({ adminIds: newAdmins });
                                                        addToast("Your ID added to admins!", "success");
                                                    } else {
                                                        addToast("You are already an admin.", "info");
                                                    }
                                                }}
                                            >
                                                Add My ID
                                            </Button>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[6px] font-black text-zinc-400 uppercase tracking-widest">Admin IDs (Telegram or UID)</label>
                                            <input 
                                                type="text" 
                                                defaultValue={config.adminIds}
                                                onBlur={async (e) => {
                                                    const val = e.target.value;
                                                    await db.ref('config').update({ adminIds: val });
                                                    addToast("Admin IDs updated.", "info");
                                                }}
                                                className="w-full bg-zinc-50 border border-zinc-100 rounded-lg p-1 text-[8px] font-mono focus:outline-none focus:border-primary/30"
                                            />
                                        </div>
                                    </Card>

                                    <Card className="p-2 space-y-1.5">
                                        <h3 className="font-black text-[8px] uppercase tracking-widest text-primary">Global Configuration</h3>
                                        <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                                            {Object.keys(config).filter(k => k !== 'adminIds').map(key => (
                                                <div key={key} className="space-y-0.5">
                                                    <label className="text-[6px] font-black text-zinc-400 uppercase tracking-widest truncate block">{key}</label>
                                                    <input 
                                                        type="text" 
                                                        defaultValue={config[key]}
                                                        onBlur={async (e) => {
                                                            const val = e.target.value;
                                                            await db.ref('config').update({ [key]: val });
                                                            addToast(`Updated ${key}.`, 'info');
                                                        }}
                                                        className="w-full bg-zinc-50 border border-zinc-100 rounded-lg p-1 text-[8px] font-mono focus:outline-none focus:border-primary/30 transition-all"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </Card>

                                    <Card className="p-2 space-y-1.5">
                                        <h3 className="font-black text-[8px] uppercase tracking-widest text-orange-500">Withdrawals</h3>
                                        <div className="space-y-1">
                                            {allWithdrawals.filter(w => w.status === 'pending').length === 0 ? (
                                                <p className="text-center text-[7px] text-zinc-400 uppercase font-black py-1">No pending</p>
                                            ) : (
                                                allWithdrawals.filter(w => w.status === 'pending').map(w => (
                                                    <div key={w.id} className="p-1.5 bg-zinc-50 rounded-lg border border-zinc-100 space-y-1">
                                                        <div className="flex justify-between items-start leading-none">
                                                            <div>
                                                                <p className="text-[8px] font-black uppercase">@{w.username}</p>
                                                                <p className="text-[9px] font-black text-primary">{w.amount} {w.token}</p>
                                                            </div>
                                                            <p className="text-[6px] text-zinc-400">{new Date(w.timestamp).toLocaleDateString()}</p>
                                                        </div>
                                                        <div className="flex gap-1">
                                                            <button 
                                                                onClick={() => handleActionWithdrawal(w.id, w.uid, 'approved')}
                                                                className="flex-1 py-1 text-[7px] bg-green-500 text-white rounded-md font-black uppercase"
                                                            >
                                                                Approve
                                                            </button>
                                                            <button 
                                                                onClick={() => handleActionWithdrawal(w.id, w.uid, 'declined')}
                                                                className="flex-1 py-1 text-[7px] bg-red-50 text-red-600 rounded-md font-black uppercase"
                                                            >
                                                                Decline
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                    </Card>

                                    <Card className="p-2 space-y-1.5">
                                        <h3 className="font-black text-[8px] uppercase tracking-widest text-accent">Missions</h3>
                                        <div className="space-y-1.5">
                                            <div className="p-1.5 bg-zinc-50 rounded-xl space-y-1">
                                                <input id="taskTitle" type="text" placeholder="Title" className="w-full bg-white border border-zinc-100 rounded-lg p-1 text-[8px] focus:outline-none" />
                                                <input id="taskReward" type="number" placeholder="Reward" className="w-full bg-white border border-zinc-100 rounded-lg p-1 text-[8px] focus:outline-none" />
                                                <input id="taskLink" type="text" placeholder="Link" className="w-full bg-white border border-zinc-100 rounded-lg p-1 text-[8px] focus:outline-none" />
                                                <button 
                                                    className="w-full py-1 bg-accent text-zinc-950 rounded-lg text-[8px] font-black uppercase"
                                                    onClick={async () => {
                                                        const title = document.getElementById('taskTitle').value;
                                                        const reward = parseInt(document.getElementById('taskReward').value);
                                                        const link = document.getElementById('taskLink').value;
                                                        if (title && reward) {
                                                            const newTaskRef = db.ref('tasks').push();
                                                            await newTaskRef.set({ id: newTaskRef.key, title, reward, link: link || "" });
                                                            addToast("Mission added!", "success");
                                                            document.getElementById('taskTitle').value = '';
                                                            document.getElementById('taskReward').value = '';
                                                            document.getElementById('taskLink').value = '';
                                                        }
                                                    }}
                                                >
                                                    Add Mission
                                                </button>
                                            </div>

                                            <div className="space-y-1">
                                                {tasks.map(t => (
                                                    <div key={t.id} className="flex items-center justify-between p-1 border border-zinc-100 rounded-lg">
                                                        <div>
                                                            <p className="text-[8px] font-black leading-none">{t.title}</p>
                                                            <p className="text-[6px] text-accent font-black">+{t.reward} Spins</p>
                                                        </div>
                                                        <button 
                                                            onClick={async () => {
                                                                await db.ref(`tasks/${t.id}`).remove();
                                                                addToast("Mission deleted", "info");
                                                            }}
                                                            className="text-red-500 p-1"
                                                        >
                                                            <Icon name="trash-2" size={10} />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </Card>

                                    <Card className="p-2 space-y-2">
                                        <h3 className="font-black text-[8px] uppercase tracking-widest text-blue-500">User Management</h3>
                                        <div className="space-y-2">
                                            <div className="flex gap-1.5">
                                                <input 
                                                    type="text" 
                                                    placeholder="Search ID"
                                                    value={searchQuery}
                                                    onChange={(e) => setSearchQuery(e.target.value)}
                                                    className="flex-1 bg-zinc-50 border border-zinc-100 rounded-lg p-1.5 text-[9px] focus:outline-none"
                                                />
                                                <Button 
                                                    variant="secondary" 
                                                    className="py-1 px-3 text-[8px]"
                                                    onClick={() => {
                                                        const found = allUsers.find(u => u.uid === searchQuery || u.telegramId === searchQuery || u.username === searchQuery || (u.username && u.username.toLowerCase() === searchQuery.toLowerCase()));
                                                        if (found) {
                                                            setFoundUser(found);
                                                            addToast("User found!", "success");
                                                        } else {
                                                            setFoundUser(null);
                                                            addToast("User not found", "error");
                                                        }
                                                    }}
                                                >
                                                    Search
                                                </Button>
                                            </div>

                                            {foundUser && (
                                                <div className="p-2 bg-zinc-50 rounded-xl border border-primary/10 space-y-2">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <p className="text-[9px] font-black uppercase">@{foundUser.username}</p>
                                                            <p className="text-[7px] text-zinc-400 font-mono truncate w-24">ID: {foundUser.telegramId || foundUser.uid}</p>
                                                        </div>
                                                        <div className="text-right">
                                                            <p className="text-[8px] font-black uppercase text-primary">{foundUser.spins} Spins</p>
                                                            <p className="text-[8px] font-black uppercase text-secondary">{foundUser.referralCount} Refs</p>
                                                        </div>
                                                    </div>

                                                    <div className="space-y-2">
                                                        <div className="flex items-center gap-1">
                                                            <input 
                                                                id="adminAddSpins"
                                                                type="number" 
                                                                placeholder="Amount"
                                                                className="flex-1 bg-white border border-zinc-100 rounded-lg p-1 text-[8px] focus:outline-none"
                                                            />
                                                            <button 
                                                                className="bg-primary text-white rounded-md px-2 py-1 text-[7px] font-black uppercase"
                                                                onClick={async () => {
                                                                    const amount = parseInt(document.getElementById('adminAddSpins').value);
                                                                    if (!isNaN(amount)) {
                                                                        const newSpins = (foundUser.spins || 0) + amount;
                                                                        await db.ref(`users/${foundUser.uid}`).update({ spins: newSpins });
                                                                        setFoundUser(prev => ({ ...prev, spins: newSpins }));
                                                                        addToast(`Updated spins: ${newSpins}`, "success");
                                                                        document.getElementById('adminAddSpins').value = '';
                                                                    }
                                                                }}
                                                            >
                                                                Add
                                                            </button>
                                                            <button 
                                                                className="bg-red-500 text-white rounded-md px-2 py-1 text-[7px] font-black uppercase"
                                                                onClick={async () => {
                                                                    const amount = parseInt(document.getElementById('adminAddSpins').value);
                                                                    if (!isNaN(amount)) {
                                                                        const newSpins = Math.max(0, (foundUser.spins || 0) - amount);
                                                                        await db.ref(`users/${foundUser.uid}`).update({ spins: newSpins });
                                                                        setFoundUser(prev => ({ ...prev, spins: newSpins }));
                                                                        addToast(`Updated spins: ${newSpins}`, "success");
                                                                        document.getElementById('adminAddSpins').value = '';
                                                                    }
                                                                }}
                                                            >
                                                                Reduce
                                                            </button>
                                                        </div>

                                                        <div className="space-y-1">
                                                            <p className="text-[6px] font-black uppercase text-zinc-400 tracking-widest">Update Balance</p>
                                                            <div className="grid grid-cols-2 gap-1">
                                                                {TOKENS.map(t => (
                                                                    <div key={t} className="flex flex-col gap-0.5">
                                                                        <label className="text-[5px] font-black uppercase text-zinc-400 truncate">{t} ({foundUser.balances?.[t] || 0})</label>
                                                                        <div className="flex gap-0.5">
                                                                            <input 
                                                                                id={`adminAddBalance_${t}`}
                                                                                type="number" 
                                                                                placeholder="Amt"
                                                                                className="w-full bg-white border border-zinc-100 rounded-md p-0.5 text-[7px] focus:outline-none"
                                                                            />
                                                                            <button 
                                                                                className="bg-primary text-white rounded-sm px-1 py-0.5 text-[6px] font-black"
                                                                                onClick={async () => {
                                                                                    const amount = parseFloat(document.getElementById(`adminAddBalance_${t}`).value);
                                                                                    if (!isNaN(amount)) {
                                                                                        const current = foundUser.balances?.[t] || 0;
                                                                                        const newVal = parseFloat((current + amount).toFixed(6));
                                                                                        await db.ref(`users/${foundUser.uid}/balances/${t}`).set(newVal);
                                                                                        setFoundUser(prev => ({
                                                                                            ...prev,
                                                                                            balances: { ...prev.balances, [t]: newVal }
                                                                                        }));
                                                                                        addToast(`Updated ${t}: ${newVal}`, "success");
                                                                                        document.getElementById(`adminAddBalance_${t}`).value = '';
                                                                                    }
                                                                                }}
                                                                            >
                                                                                +
                                                                            </button>
                                                                            <button 
                                                                                className="bg-red-500 text-white rounded-sm px-1 py-0.5 text-[6px] font-black"
                                                                                onClick={async () => {
                                                                                    const amount = parseFloat(document.getElementById(`adminAddBalance_${t}`).value);
                                                                                    if (!isNaN(amount)) {
                                                                                        const current = foundUser.balances?.[t] || 0;
                                                                                        const newVal = Math.max(0, parseFloat((current - amount).toFixed(6)));
                                                                                        await db.ref(`users/${foundUser.uid}/balances/${t}`).set(newVal);
                                                                                        setFoundUser(prev => ({
                                                                                            ...prev,
                                                                                            balances: { ...prev.balances, [t]: newVal }
                                                                                        }));
                                                                                        addToast(`Updated ${t}: ${newVal}`, "success");
                                                                                        document.getElementById(`adminAddBalance_${t}`).value = '';
                                                                                    }
                                                                                }}
                                                                            >
                                                                                -
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </Card>

                                    <Card className="p-2 space-y-2">
                                        <h3 className="font-black text-[8px] uppercase tracking-widest text-red-500">Leaderboard Actions</h3>
                                        <Button 
                                            variant="secondary" 
                                            className="w-full py-2 text-[9px] text-red-500 border-red-100"
                                            onClick={async () => {
                                                if (confirm("Are you sure you want to clear the leaderboard? This will reset referral counts and ads watched for all users.")) {
                                                    const usersSnapshot = await db.ref('users').get();
                                                    if (usersSnapshot.exists()) {
                                                        const updates = {};
                                                        Object.keys(usersSnapshot.val()).forEach(uid => {
                                                            updates[`users/${uid}/referralCount`] = 0;
                                                            updates[`users/${uid}/adsWatched`] = 0;
                                                        });
                                                        await db.ref().update(updates);
                                                        addToast("Leaderboard cleared!", "success");
                                                    }
                                                }
                                            }}
                                        >
                                            Clear Leaderboard (Daily)
                                        </Button>
                                    </Card>
                                </div>
                            )}
                        </div>
                    </main>

                    {/* Navigation */}
                    <nav className="fixed bottom-2 left-1/2 -translate-x-1/2 w-[94%] max-w-xs bg-white/80 backdrop-blur-2xl border border-zinc-100 p-1 flex justify-around z-40 rounded-2xl shadow-2xl">
                        {[
                            { id: 'home', icon: 'zap', label: 'Spin' },
                            { id: 'leaderboard', icon: 'trophy', label: 'Top' },
                            { id: 'wallet', icon: 'wallet', label: 'Wallet' },
                            { id: 'tasks', icon: 'target', label: 'Tasks' },
                            ...(isAdmin ? [{ id: 'admin', icon: 'settings', label: 'Admin' }] : []),
                        ].map(t => (
                            <button 
                                key={t.id} 
                                onClick={() => setActiveTab(t.id)} 
                                className={`flex flex-col items-center justify-center w-10 h-10 rounded-xl transition-all relative group ${activeTab === t.id ? 'text-primary' : 'text-zinc-400 hover:text-zinc-600'}`}
                            >
                                {activeTab === t.id && (
                                    <motion.div 
                                        layoutId="nav-bg"
                                        className="absolute inset-0 bg-softPink rounded-xl border border-primary/10"
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <Icon name={t.icon} className="relative z-10" size={16} />
                                <span className="text-[7px] font-black uppercase tracking-tighter relative z-10 mt-0.5">{t.label}</span>
                            </button>
                        ))}
                    </nav>

                    {/* Toasts */}
                    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-1.5 w-full max-w-[280px] px-4 pointer-events-none">
                        <motion.AnimatePresence>
                            {toasts.map(t => (
                                <motion.div 
                                    key={t.id}
                                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                    className={`p-2 rounded-xl shadow-lg flex items-center gap-2 border pointer-events-auto ${
                                        t.type === 'success' ? 'bg-emerald-50 border-emerald-100 text-emerald-600' : 
                                        t.type === 'error' ? 'bg-red-50 border-red-100 text-red-600' :
                                        'bg-white border-zinc-100 text-zinc-900'
                                    }`}
                                >
                                    <Icon name={t.type === 'success' ? 'check-circle' : t.type === 'error' ? 'alert-circle' : 'info'} size={14} />
                                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">{t.message}</span>
                                </motion.div>
                            ))}
                        </motion.AnimatePresence>
                    </div>
                </div>
            );
        }

        // --- Global Error Handling ---
        window.onerror = function(message, source, lineno, colno, error) {
            console.error("Global Error:", { message, source, lineno, colno, error });
            return false;
        };

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        );
    </script>
</body>
</html>
