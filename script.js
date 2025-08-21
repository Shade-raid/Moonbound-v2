// Moonbound: The Ashen Crown Chronicles - Visual Novel
// Made by Shade
class MoonboundVisualNovel {
    constructor() {
        this.currentScreen = 'main-menu';
        this.currentScene = 0;
        this.currentLine = 0;
        this.isTyping = false;
        this.autoMode = false;
        this.textSpeed = 5;
        this.selectedChampion = null;
        this.championRoute = null;
        this.bondLevel = 0;
        this.storyProgress = {};
        this.saveData = this.loadSaveData();
        
        this.initializeEventListeners();
        this.initializeStory();
    }

    // Deep story data with extensive content
    initializeStory() {
        this.story = {
            // Prologue - Introduction to the world
            prologue: [
                {
                    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
                    characters: [],
                    dialogue: [
                        { speaker: '', text: 'In the twilight of the 13th century, the mystical Ashen Crown has shattered the very fabric of time itself.' },
                        { speaker: '', text: 'I am the Chronicler - an immortal observer bound to witness infinite cycles of heroes rising to challenge the curse.' },
                        { speaker: '', text: 'Each Requiem resets the world, but the bonds I forge with my champions transcend death itself.' },
                        { speaker: '', text: 'The Crown\'s malevolent power grows stronger with each passing cycle. Its influence spreads like a shadow across the land.' },
                        { speaker: '', text: 'I have witnessed countless heroes fall, their stories lost to the endless cycle of death and rebirth.' },
                        { speaker: '', text: 'But this time feels different. The Crown\'s power has reached a critical threshold.' },
                        { speaker: '', text: 'If it is not stopped now, the very fabric of reality may unravel completely.' },
                        { speaker: '', text: 'Now, as the darkness gathers, I must choose a champion to stand against the tide of corruption...' }
                    ]
                }
            ],
            
            // Champion Selection
            championSelection: [
                {
                    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
                    characters: [],
                    dialogue: [
                        { speaker: '', text: 'Five champions have answered the call. Each carries their own burden, their own destiny.' },
                        { speaker: '', text: 'Their stories are written in blood and tears, their souls scarred by the Crown\'s touch.' },
                        { speaker: '', text: 'But within each of them burns a flame of hope, a desire to break the cycle.' },
                        { speaker: '', text: 'Whose story shall I chronicle in this cycle? Whose fate shall I share?' }
                    ],
                    choices: [
                        { text: 'Sir Kolos - Knight of Esztergom', nextScene: 'kolos_intro', champion: 'kolos' },
                        { text: 'Ördög - The Cuman Outrider', nextScene: 'ordog_intro', champion: 'ordog' },
                        { text: 'Boszorkány - Danube Witch', nextScene: 'boszorkany_intro', champion: 'boszorkany' },
                        { text: 'Jósnő - The Székely Seer', nextScene: 'josno_intro', champion: 'josno' },
                        { text: 'Fekete Kereszt - Black Cross Paladin', nextScene: 'fekete_intro', champion: 'fekete' }
                    ]
                }
            ],

            // Sir Kolos - Deep Storyline
            kolos_intro: [
                {
                    background: 'linear-gradient(135deg, #2d1b3d 0%, #1a1a2e 100%)',
                    characters: [{ position: 'center', name: 'Sir Kolos', sprite: '⚔️', visible: true }],
                    dialogue: [
                        { speaker: 'Sir Kolos', text: 'Chronicler... I have awaited your summons.' },
                        { speaker: 'Sir Kolos', text: 'Once captain of the royal guard, now bound by oath to protect what remains.' },
                        { speaker: '', text: 'His armor gleams with a faint, ethereal light, and his eyes carry the weight of countless battles.' },
                        { speaker: 'Sir Kolos', text: 'The Crown\'s curse has taken much from us all. But honor demands we stand against it.' },
                        { speaker: '', text: 'His voice is steady, but there is a tremor of emotion beneath the surface.' },
                        { speaker: 'Sir Kolos', text: 'I have failed before, Chronicler. Failed to protect those I swore to defend.' },
                        { speaker: 'Sir Kolos', text: 'But perhaps in this cycle, with your guidance, I can redeem that failure.' }
                    ]
                }
            ],
            kolos_backstory: [
                {
                    background: 'linear-gradient(135deg, #2d1b3d 0%, #1a1a2e 100%)',
                    characters: [{ position: 'center', name: 'Sir Kolos', sprite: '⚔️', visible: true }],
                    dialogue: [
                        { speaker: 'Sir Kolos', text: 'In my time as captain, I witnessed the Crown\'s corruption firsthand.' },
                        { speaker: 'Sir Kolos', text: 'The king I swore to protect... he was the first to fall to its influence.' },
                        { speaker: '', text: 'His voice grows heavy with the memory of betrayal.' },
                        { speaker: 'Sir Kolos', text: 'I watched as the man I had served for twenty years became something... other.' },
                        { speaker: 'Sir Kolos', text: 'His eyes, once bright with wisdom, grew dark with hunger.' },
                        { speaker: 'Sir Kolos', text: 'His voice, once commanding respect, became a whisper of madness.' },
                        { speaker: 'Sir Kolos', text: 'I tried to save him, Chronicler. I tried everything I knew.' },
                        { speaker: 'Sir Kolos', text: 'But the Crown\'s power was too strong. It had already claimed his soul.' },
                        { speaker: '', text: 'He looks down at his gauntleted hands, as if they still carry the weight of his failure.' },
                        { speaker: 'Sir Kolos', text: 'I failed to save him. But perhaps in this cycle, I can redeem that failure.' }
                    ],
                    choices: [
                        { text: 'Your honor is beyond reproach', nextScene: 'kolos_honor', route: 'honor' },
                        { text: 'Sometimes duty requires difficult choices', nextScene: 'kolos_pragmatic', route: 'pragmatic' },
                        { text: 'We will face this together', nextScene: 'kolos_bond', route: 'bond' }
                    ]
                }
            ],
            kolos_honor: [
                {
                    background: 'linear-gradient(135deg, #2d1b3d 0%, #1a1a2e 100%)',
                    characters: [{ position: 'center', name: 'Sir Kolos', sprite: '⚔️', visible: true }],
                    dialogue: [
                        { speaker: 'Sir Kolos', text: 'Your words honor me, Chronicler.' },
                        { speaker: 'Sir Kolos', text: 'But honor alone cannot break the Crown\'s hold. We need strength, strategy...' },
                        { speaker: 'Sir Kolos', text: 'And perhaps something more. Something I have long denied myself.' },
                        { speaker: '', text: 'He looks at you with a mixture of gratitude and something deeper.' },
                        { speaker: 'Sir Kolos', text: 'I have lived by the code of chivalry all my life.' },
                        { speaker: 'Sir Kolos', text: 'But the Crown does not fight with honor. It corrupts, it deceives, it destroys.' },
                        { speaker: 'Sir Kolos', text: 'Perhaps it is time to adapt our methods while keeping our principles intact.' },
                        { speaker: '', text: 'His expression shows the internal struggle between duty and pragmatism.' }
                    ]
                }
            ],
            kolos_honor_continued: [
                {
                    background: 'linear-gradient(135deg, #2d1b3d 0%, #1a1a2e 100%)',
                    characters: [{ position: 'center', name: 'Sir Kolos', sprite: '⚔️', visible: true }],
                    dialogue: [
                        { speaker: 'Sir Kolos', text: 'The Crown\'s power grows stronger with each cycle.' },
                        { speaker: 'Sir Kolos', text: 'It has learned from our failures, adapted to our strategies.' },
                        { speaker: 'Sir Kolos', text: 'But honor is not weakness, Chronicler. It is our strength.' },
                        { speaker: 'Sir Kolos', text: 'It is what separates us from the darkness we fight.' },
                        { speaker: '', text: 'He draws his sword, the blade gleaming with an inner light.' },
                        { speaker: 'Sir Kolos', text: 'This blade has tasted the blood of countless enemies.' },
                        { speaker: 'Sir Kolos', text: 'But it has never been wielded in dishonor.' },
                        { speaker: 'Sir Kolos', text: 'Together, we will find a way to defeat the Crown while remaining true to ourselves.' }
                    ]
                }
            ],
            kolos_pragmatic: [
                {
                    background: 'linear-gradient(135deg, #2d1b3d 0%, #1a1a2e 100%)',
                    characters: [{ position: 'center', name: 'Sir Kolos', sprite: '⚔️', visible: true }],
                    dialogue: [
                        { speaker: 'Sir Kolos', text: 'You speak wisdom, Chronicler.' },
                        { speaker: 'Sir Kolos', text: 'I have been too rigid in my thinking. The Crown does not fight with honor.' },
                        { speaker: 'Sir Kolos', text: 'Perhaps it is time to adapt our methods to match our enemy.' },
                        { speaker: '', text: 'His expression hardens with newfound determination.' },
                        { speaker: 'Sir Kolos', text: 'I have seen what happens when we cling too tightly to old ways.' },
                        { speaker: 'Sir Kolos', text: 'The Crown exploits our weaknesses, turns our virtues against us.' },
                        { speaker: 'Sir Kolos', text: 'But adaptation does not mean abandoning our principles entirely.' },
                        { speaker: 'Sir Kolos', text: 'It means finding new ways to uphold them in a world that has changed.' }
                    ]
                }
            ],
            kolos_pragmatic_continued: [
                {
                    background: 'linear-gradient(135deg, #2d1b3d 0%, #1a1a2e 100%)',
                    characters: [{ position: 'center', name: 'Sir Kolos', sprite: '⚔️', visible: true }],
                    dialogue: [
                        { speaker: 'Sir Kolos', text: 'The Crown has learned to expect certain patterns from us.' },
                        { speaker: 'Sir Kolos', text: 'It anticipates our moves, counters our strategies.' },
                        { speaker: 'Sir Kolos', text: 'But if we can surprise it, catch it off guard...' },
                        { speaker: 'Sir Kolos', text: 'Perhaps we can strike a blow that will truly matter.' },
                        { speaker: '', text: 'He sheathes his sword with a decisive motion.' },
                        { speaker: 'Sir Kolos', text: 'I am ready to learn new ways of fighting, Chronicler.' },
                        { speaker: 'Sir Kolos', text: 'Ready to adapt while staying true to what I am.' },
                        { speaker: 'Sir Kolos', text: 'Together, we will find the path to victory.' }
                    ]
                }
            ],
            kolos_bond: [
                {
                    background: 'linear-gradient(135deg, #2d1b3d 0%, #1a1a2e 100%)',
                    characters: [{ position: 'center', name: 'Sir Kolos', sprite: '⚔️', visible: true }],
                    dialogue: [
                        { speaker: 'Sir Kolos', text: 'Together...' },
                        { speaker: 'Sir Kolos', text: 'I have fought alone for so long, I had forgotten what it means to have a companion.' },
                        { speaker: 'Sir Kolos', text: 'Your presence gives me strength I did not know I possessed.' },
                        { speaker: '', text: 'He reaches out, his gauntleted hand hovering near yours.' },
                        { speaker: 'Sir Kolos', text: 'In all my years of service, I have never felt such a connection.' },
                        { speaker: 'Sir Kolos', text: 'It is as if our souls recognize each other across the vast expanse of time.' },
                        { speaker: 'Sir Kolos', text: 'Perhaps this is what I have been missing all along.' },
                        { speaker: 'Sir Kolos', text: 'Not just a cause to fight for, but someone to fight alongside.' }
                    ]
                }
            ],
            kolos_bond_continued: [
                {
                    background: 'linear-gradient(135deg, #2d1b3d 0%, #1a1a2e 100%)',
                    characters: [{ position: 'center', name: 'Sir Kolos', sprite: '⚔️', visible: true }],
                    dialogue: [
                        { speaker: 'Sir Kolos', text: 'The Crown has always sought to isolate us.' },
                        { speaker: 'Sir Kolos', text: 'To make us feel alone in our struggle.' },
                        { speaker: 'Sir Kolos', text: 'But together, we are stronger than it can imagine.' },
                        { speaker: 'Sir Kolos', text: 'Our bond transcends the cycles, transcends death itself.' },
                        { speaker: '', text: 'He places his hand over his heart in a gesture of solemn oath.' },
                        { speaker: 'Sir Kolos', text: 'I swear to you, Chronicler, that I will not fail this time.' },
                        { speaker: 'Sir Kolos', text: 'Not because of duty, not because of honor.' },
                        { speaker: 'Sir Kolos', text: 'But because of the bond we share.' }
                    ]
                }
            ],

            // Ördög - Deep Storyline
            ordog_intro: [
                {
                    background: 'linear-gradient(135deg, #1a2e3d 0%, #16213e 100%)',
                    characters: [{ position: 'center', name: 'Ördög', sprite: '🏹', visible: true }],
                    dialogue: [
                        { speaker: 'Ördög', text: 'Chronicler... I did not expect to be chosen.' },
                        { speaker: 'Ördög', text: 'A nomad warrior seeking redemption for abandoning his tribe.' },
                        { speaker: '', text: 'His movements are fluid, like the wind he rides, and his eyes carry the wildness of the steppes.' },
                        { speaker: 'Ördög', text: 'The Crown took everything from my people. Now I fight for their memory.' },
                        { speaker: '', text: 'There is a haunted look in his eyes, the weight of guilt and loss.' },
                        { speaker: 'Ördög', text: 'I have wandered these lands for years, seeking purpose.' },
                        { speaker: 'Ördög', text: 'Perhaps now, with your guidance, I can find it.' }
                    ]
                }
            ],
            ordog_backstory: [
                {
                    background: 'linear-gradient(135deg, #1a2e3d 0%, #16213e 100%)',
                    characters: [{ position: 'center', name: 'Ördög', sprite: '🏹', visible: true }],
                    dialogue: [
                        { speaker: 'Ördög', text: 'My tribe was scattered when the Crown\'s influence spread.' },
                        { speaker: 'Ördög', text: 'I ran when I should have stayed. Fought when I should have fled.' },
                        { speaker: 'Ördög', text: 'Now I wander, seeking a way to make amends for my cowardice.' },
                        { speaker: '', text: 'His voice carries the weight of guilt and the hope of redemption.' },
                        { speaker: 'Ördög', text: 'The Cuman people have always been nomads.' },
                        { speaker: 'Ördög', text: 'We follow the wind, the stars, the call of the wild.' },
                        { speaker: 'Ördög', text: 'But when the Crown\'s shadow fell upon our lands...' },
                        { speaker: 'Ördög', text: 'I saw my people fall one by one, their spirits broken.' },
                        { speaker: 'Ördög', text: 'I should have stood with them. Should have fought to the end.' },
                        { speaker: 'Ördög', text: 'Instead, I ran like a coward, leaving them to their fate.' }
                    ],
                    choices: [
                        { text: 'Redemption comes through action', nextScene: 'ordog_redemption', route: 'redemption' },
                        { text: 'Your survival was not cowardice', nextScene: 'ordog_survival', route: 'survival' },
                        { text: 'We will find your people together', nextScene: 'ordog_bond', route: 'bond' }
                    ]
                }
            ],

            // Boszorkány - Deep Storyline
            boszorkany_intro: [
                {
                    background: 'linear-gradient(135deg, #3d1b2e 0%, #1a1a2e 100%)',
                    characters: [{ position: 'center', name: 'Boszorkány', sprite: '🔮', visible: true }],
                    dialogue: [
                        { speaker: 'Boszorkány', text: 'Ah, the Chronicler approaches...' },
                        { speaker: 'Boszorkány', text: 'Master of old ways, bargaining with forces beyond comprehension.' },
                        { speaker: '', text: 'Her presence seems to bend the very air around her, and her eyes hold ancient knowledge.' },
                        { speaker: 'Boszorkány', text: 'The Crown\'s power is not so different from my own. Perhaps I can turn it against itself.' },
                        { speaker: '', text: 'There is something otherworldly about her, as if she exists partially in another realm.' },
                        { speaker: 'Boszorkány', text: 'I have walked the paths of magic for centuries, Chronicler.' },
                        { speaker: 'Boszorkány', text: 'But the Crown\'s power... it is something new, something dangerous.' }
                    ]
                }
            ],
            boszorkany_backstory: [
                {
                    background: 'linear-gradient(135deg, #3d1b2e 0%, #1a1a2e 100%)',
                    characters: [{ position: 'center', name: 'Boszorkány', sprite: '🔮', visible: true }],
                    dialogue: [
                        { speaker: 'Boszorkány', text: 'I have studied the Crown\'s magic for centuries.' },
                        { speaker: 'Boszorkány', text: 'It draws power from the same source as my own arts - the lunar essence.' },
                        { speaker: 'Boszorkány', text: 'But where I seek balance, it seeks domination. Where I create, it destroys.' },
                        { speaker: '', text: 'Her voice carries the weight of forbidden knowledge and dangerous ambition.' },
                        { speaker: 'Boszorkány', text: 'The old ways are dying, Chronicler.' },
                        { speaker: 'Boszorkány', text: 'The magic that once flowed freely through the land is being corrupted.' },
                        { speaker: 'Boszorkány', text: 'The Crown is not just a threat to humanity.' },
                        { speaker: 'Boszorkány', text: 'It is a threat to magic itself.' },
                        { speaker: 'Boszorkány', text: 'If it is not stopped, all that I have learned, all that I am...' },
                        { speaker: 'Boszorkány', text: 'It will be lost forever.' }
                    ],
                    choices: [
                        { text: 'Knowledge is power', nextScene: 'boszorkany_knowledge', route: 'knowledge' },
                        { text: 'Power comes with a price', nextScene: 'boszorkany_price', route: 'price' },
                        { text: 'Share your wisdom with me', nextScene: 'boszorkany_bond', route: 'bond' }
                    ]
                }
            ],

            // Jósnő - Deep Storyline
            josno_intro: [
                {
                    background: 'linear-gradient(135deg, #1b3d2e 0%, #1a1a2e 100%)',
                    characters: [{ position: 'center', name: 'Jósnő', sprite: '👁️', visible: true }],
                    dialogue: [
                        { speaker: 'Jósnő', text: 'Chronicler... I have seen you in my visions.' },
                        { speaker: 'Jósnő', text: 'Blessed with visions of all possible futures, struggling with foreknowledge.' },
                        { speaker: '', text: 'Her eyes seem to look through you, seeing possibilities that have not yet come to pass.' },
                        { speaker: 'Jósnő', text: 'The Crown has clouded my sight. But with your help, perhaps I can see clearly again.' },
                        { speaker: '', text: 'There is a distant look in her eyes, as if she is constantly seeing beyond the present moment.' },
                        { speaker: 'Jósnő', text: 'The future is not fixed, Chronicler.' },
                        { speaker: 'Jósnő', text: 'But the Crown seeks to make it so.' }
                    ]
                }
            ],
            josno_backstory: [
                {
                    background: 'linear-gradient(135deg, #1b3d2e 0%, #1a1a2e 100%)',
                    characters: [{ position: 'center', name: 'Jósnő', sprite: '👁️', visible: true }],
                    dialogue: [
                        { speaker: 'Jósnő', text: 'I have witnessed countless timelines, countless possibilities.' },
                        { speaker: 'Jósnő', text: 'In some, we succeed. In others, we fail. In most, we never meet.' },
                        { speaker: 'Jósnő', text: 'But this timeline... this one feels different. Special.' },
                        { speaker: '', text: 'Her voice is soft, like a whisper from the future itself.' },
                        { speaker: 'Jósnő', text: 'The Székely people have always had the gift of foresight.' },
                        { speaker: 'Jósnő', text: 'We see the threads of fate, the patterns of destiny.' },
                        { speaker: 'Jósnő', text: 'But the Crown... it is trying to unravel those threads.' },
                        { speaker: 'Jósnő', text: 'It seeks to create a future where only its will exists.' },
                        { speaker: 'Jósnő', text: 'Where all possibilities lead to the same dark end.' },
                        { speaker: 'Jósnő', text: 'I cannot allow that to happen.' }
                    ],
                    choices: [
                        { text: 'Fate is not written in stone', nextScene: 'josno_fate', route: 'fate' },
                        { text: 'Your visions guide us', nextScene: 'josno_visions', route: 'visions' },
                        { text: 'Let us write our own destiny', nextScene: 'josno_bond', route: 'bond' }
                    ]
                }
            ],

            // Fekete Kereszt - Deep Storyline
            fekete_intro: [
                {
                    background: 'linear-gradient(135deg, #2e1b1b 0%, #1a1a2e 100%)',
                    characters: [{ position: 'center', name: 'Fekete Kereszt', sprite: '✝️', visible: true }],
                    dialogue: [
                        { speaker: 'Fekete Kereszt', text: 'Chronicler... I come seeking answers.' },
                        { speaker: 'Fekete Kereszt', text: 'A fallen crusader questioning whether his holy mission was righteous.' },
                        { speaker: '', text: 'His armor bears the marks of countless battles, and his eyes carry the weight of doubt.' },
                        { speaker: 'Fekete Kereszt', text: 'I fought in the name of God, but the Crown\'s power makes me question everything.' },
                        { speaker: '', text: 'There is a deep weariness in his voice, the exhaustion of a man who has seen too much.' },
                        { speaker: 'Fekete Kereszt', text: 'I have spilled blood in the name of righteousness.' },
                        { speaker: 'Fekete Kereszt', text: 'But now I wonder if any of it was truly righteous.' }
                    ]
                }
            ],
            fekete_backstory: [
                {
                    background: 'linear-gradient(135deg, #2e1b1b 0%, #1a1a2e 100%)',
                    characters: [{ position: 'center', name: 'Fekete Kereszt', sprite: '✝️', visible: true }],
                    dialogue: [
                        { speaker: 'Fekete Kereszt', text: 'I led men to their deaths believing it was God\'s will.' },
                        { speaker: 'Fekete Kereszt', text: 'But the Crown\'s power... it feels divine, yet it corrupts everything it touches.' },
                        { speaker: 'Fekete Kereszt', text: 'How can I know what is truly righteous anymore?' },
                        { speaker: '', text: 'His voice carries the weight of spiritual crisis and moral uncertainty.' },
                        { speaker: 'Fekete Kereszt', text: 'The Black Cross was founded to fight evil.' },
                        { speaker: 'Fekete Kereszt', text: 'We were the sword of God, the shield of the innocent.' },
                        { speaker: 'Fekete Kereszt', text: 'But the Crown\'s power... it is like nothing we have ever faced.' },
                        { speaker: 'Fekete Kereszt', text: 'It does not just corrupt the body. It corrupts the soul.' },
                        { speaker: 'Fekete Kereszt', text: 'I have seen good men become monsters under its influence.' },
                        { speaker: 'Fekete Kereszt', text: 'Men I would have trusted with my life.' }
                    ],
                    choices: [
                        { text: 'Faith and doubt can coexist', nextScene: 'fekete_faith', route: 'faith' },
                        { text: 'Righteousness comes from action', nextScene: 'fekete_action', route: 'action' },
                        { text: 'Let us find the truth together', nextScene: 'fekete_bond', route: 'bond' }
                    ]
                }
            ],

            // Common ending scenes
            ending_common: [
                {
                    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
                    characters: [],
                    dialogue: [
                        { speaker: '', text: 'The cycle draws to a close once more.' },
                        { speaker: '', text: 'The bonds we have forged will echo through the ages.' },
                        { speaker: '', text: 'And when the next Requiem comes, perhaps we will meet again.' },
                        { speaker: '', text: 'For in the dance of heroes and villains across infinite cycles...' },
                        { speaker: '', text: 'Some connections transcend even death itself.' },
                        { speaker: '', text: 'The Ashen Crown may reset the world, but it cannot reset the heart.' },
                        { speaker: '', text: 'Until we meet again, Chronicler...' },
                        { speaker: '', text: 'May the stars guide your path.' }
                    ]
                }
            ]
        };
    }

    // Initialize event listeners
    initializeEventListeners() {
        // Main menu buttons
        document.getElementById('start-game').addEventListener('click', () => this.startGame());
        document.getElementById('load-game').addEventListener('click', () => this.loadGame());
        document.getElementById('settings').addEventListener('click', () => this.showScreen('settings-screen'));
        document.getElementById('credits').addEventListener('click', () => this.showScreen('credits-screen'));

        // Game screen events
        document.getElementById('text-box').addEventListener('click', () => this.nextLine());
        document.getElementById('save-btn').addEventListener('click', () => this.saveGame());
        document.getElementById('load-btn').addEventListener('click', () => this.loadGame());
        document.getElementById('auto-btn').addEventListener('click', () => this.toggleAuto());
        document.getElementById('skip-btn').addEventListener('click', () => this.skipScene());
        document.getElementById('menu-btn').addEventListener('click', () => this.showMainMenu());

        // Settings and credits back buttons
        document.getElementById('back-to-menu').addEventListener('click', () => this.showMainMenu());
        document.getElementById('credits-back').addEventListener('click', () => this.showMainMenu());

        // Settings controls
        document.getElementById('text-speed').addEventListener('input', (e) => {
            this.textSpeed = parseInt(e.target.value);
        });
    }

    // Screen management
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        document.getElementById(screenId).classList.add('active');
        this.currentScreen = screenId;
    }

    showMainMenu() {
        this.showScreen('main-menu');
        this.resetGame();
    }

    // Game control
    startGame() {
        this.showScreen('game-screen');
        this.currentScene = 'prologue';
        this.currentLine = 0;
        this.displayScene();
    }

    resetGame() {
        this.currentScene = 'prologue';
        this.currentLine = 0;
        this.isTyping = false;
        this.autoMode = false;
        this.selectedChampion = null;
        this.championRoute = null;
        this.bondLevel = 0;
        this.storyProgress = {};
    }

    // Scene display
    displayScene() {
        const sceneData = this.story[this.currentScene];
        if (!sceneData) return;

        const scene = sceneData[this.currentLine];
        if (!scene) {
            this.nextScene();
            return;
        }

        // Set background
        document.getElementById('background').style.background = scene.background;

        // Display characters
        this.displayCharacters(scene.characters);

        // Display dialogue
        this.displayDialogue(scene);
    }

    displayCharacters(characters) {
        // Clear all characters
        document.querySelectorAll('.character').forEach(char => {
            char.classList.remove('visible');
            char.style.backgroundImage = 'none';
        });

        // Show characters
        characters.forEach(char => {
            const charElement = document.getElementById(`character-${char.position}`);
            if (charElement && char.visible) {
                charElement.classList.add('visible');
                // Use emoji as placeholders for sprites
                charElement.style.backgroundImage = `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="80" font-size="80" text-anchor="middle" x="50">${char.sprite}</text></svg>')`;
            }
        });
    }

    displayDialogue(scene) {
        const dialogue = scene.dialogue[this.currentLine];
        if (!dialogue) {
            this.nextLine();
            return;
        }

        const speakerElement = document.getElementById('speaker-name');
        const textElement = document.getElementById('dialogue-text');

        // Set speaker name
        if (dialogue.speaker) {
            speakerElement.textContent = dialogue.speaker;
            speakerElement.classList.add('visible');
        } else {
            speakerElement.classList.remove('visible');
        }

        // Type out text
        this.typeText(textElement, dialogue.text);

        // Show choices if available
        if (scene.choices && this.currentLine === scene.dialogue.length - 1) {
            this.displayChoices(scene.choices);
        } else {
            this.hideChoices();
        }
    }

    typeText(element, text) {
        this.isTyping = true;
        element.textContent = '';
        
        const speed = 100 - (this.textSpeed * 10);
        let index = 0;

        const typeInterval = setInterval(() => {
            if (index < text.length) {
                element.textContent += text[index];
                index++;
            } else {
                clearInterval(typeInterval);
                this.isTyping = false;
                
                if (this.autoMode) {
                    setTimeout(() => this.nextLine(), 2000);
                }
            }
        }, speed);
    }

    displayChoices(choices) {
        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML = '';

        choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.className = 'choice-btn';
            button.textContent = choice.text;
            button.addEventListener('click', () => this.makeChoice(choice));
            choicesContainer.appendChild(button);
        });
    }

    hideChoices() {
        document.getElementById('choices').innerHTML = '';
    }

    makeChoice(choice) {
        if (choice.champion) {
            this.selectedChampion = choice.champion;
        }
        if (choice.route) {
            this.championRoute = choice.route;
            this.bondLevel++;
        }
        
        this.currentScene = choice.nextScene;
        this.currentLine = 0;
        this.displayScene();
    }

    nextLine() {
        if (this.isTyping) {
            // Skip typing animation
            const sceneData = this.story[this.currentScene];
            const scene = sceneData[this.currentLine];
            const dialogue = scene.dialogue[this.currentLine];
            document.getElementById('dialogue-text').textContent = dialogue.text;
            this.isTyping = false;
            return;
        }

        const sceneData = this.story[this.currentScene];
        this.currentLine++;

        if (this.currentLine >= sceneData.length) {
            this.nextScene();
        } else {
            this.displayScene();
        }
    }

    nextScene() {
        // Handle scene progression based on current state
        if (this.currentScene === 'prologue') {
            this.currentScene = 'championSelection';
            this.currentLine = 0;
        } else if (this.currentScene.includes('_intro')) {
            this.currentScene = this.currentScene.replace('_intro', '_backstory');
            this.currentLine = 0;
        } else if (this.currentScene.includes('_backstory')) {
            // Continue with champion-specific story based on route
            this.currentScene = this.selectedChampion + '_' + this.championRoute;
            this.currentLine = 0;
        } else if (this.currentScene.includes('_route')) {
            // Continue with route-specific content
            this.currentScene = this.currentScene + '_continued';
            this.currentLine = 0;
        } else {
            // End the story
            this.currentScene = 'ending_common';
            this.currentLine = 0;
        }

        this.displayScene();
    }

    // Auto mode
    toggleAuto() {
        this.autoMode = !this.autoMode;
        const autoBtn = document.getElementById('auto-btn');
        autoBtn.style.background = this.autoMode ? 'rgba(233, 69, 96, 0.8)' : 'rgba(26, 26, 46, 0.8)';
        
        if (this.autoMode && !this.isTyping) {
            setTimeout(() => this.nextLine(), 2000);
        }
    }

    // Skip functionality
    skipScene() {
        const sceneData = this.story[this.currentScene];
        if (sceneData && sceneData[0] && sceneData[0].choices) {
            // Skip to next scene if there are choices
            this.nextScene();
        } else {
            // Skip to end of current scene
            this.currentLine = sceneData.length - 1;
            this.displayScene();
        }
    }

    // Save/Load system
    saveGame() {
        const saveData = {
            currentScene: this.currentScene,
            currentLine: this.currentLine,
            selectedChampion: this.selectedChampion,
            championRoute: this.championRoute,
            bondLevel: this.bondLevel,
            storyProgress: this.storyProgress,
            timestamp: Date.now()
        };
        localStorage.setItem('moonbound_save', JSON.stringify(saveData));
        
        // Show save confirmation
        const saveBtn = document.getElementById('save-btn');
        const originalText = saveBtn.textContent;
        saveBtn.textContent = '✓';
        setTimeout(() => {
            saveBtn.textContent = originalText;
        }, 1000);
    }

    loadGame() {
        const savedData = localStorage.getItem('moonbound_save');
        if (savedData) {
            const data = JSON.parse(savedData);
            this.currentScene = data.currentScene;
            this.currentLine = data.currentLine;
            this.selectedChampion = data.selectedChampion;
            this.championRoute = data.championRoute;
            this.bondLevel = data.bondLevel;
            this.storyProgress = data.storyProgress || {};
            this.showScreen('game-screen');
            this.displayScene();
        } else {
            // No save data, start new game
            this.startGame();
        }
    }

    loadSaveData() {
        const savedData = localStorage.getItem('moonbound_save');
        return savedData ? JSON.parse(savedData) : null;
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new MoonboundVisualNovel();
});
