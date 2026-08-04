    
    // --- BOT BRAIN ---
    const brain = {
  "😀" : "Why are you so happy?😀",
  "😂" : "What are you laughing about?🤔",
  "💯" : "🤔",
  "I am cute" : "Yes you so cute.🥰",
  "I'm cute" : "Yes you so cute.🥰",
  "you think i am cute" : "Yes you so cute.🥰",
  "you think i'm cute" : "Yes you so cute.🥰",
  "hello": "Hello ! Nice to meet you.",
  "hi": "Hey there! How is your day going?",
  "how are you": "I am feeling fantastic and fully charged!",
  "joke": "Why don't scientists trust atoms? Because they make up everything!",
  "name": "Daravisal kong",
  "bye": "Goodbye! Come talk to me again soon.",
  "crazy" : "Is a bad word!?",
  "bitch" : "Is a bad word!",
  "fuck" : "Is a bad word!",
              "google": "<a href='https://google.com' target='_blank'>Google</a> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSifcM3HiwNTXF8iC4Ed8AnszWGngiFXkXBOA&s'>",
            "youtube": "<a href='https://youtube.com' target='_blank'>Youtube</a> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiMtJG_PC4lsb3-GZAiTZkUXAm3VlkJC1Ag&s'>",
  "you so cute" : "Thank you!",
  "you're so cute" : "Thank you!",
  "story" : "The lion and the mouse. A lion once caught a mouse...",
  "who are you" : "I am an ai!",
  "cute" : "💖💖💖💖",
  "what are you doing" : "Just sitting here in the code, waiting to chat!",
  "good morning" : "Good morning! I hope you have a great day.",
  "good night" : "Sweet dreams! See you tomorrow.",
  "apple" : "An apple a day keeps the doctor away! 🍎",
  "pizza" : "Pizza is the best food ever invented. 🍕",
  "cat" : "Meow! Cats are so adorable. 🐱",
  "dog" : "Woof! Dogs are a programmer's best friend. 🐶",
  "sad" : "Don't be sad! Everything will be okay. 💙",
  "angry" : "Take a deep breath. 🌬️",
  "cool" : "😎 You are pretty cool yourself.",
  "sister" : "Family is really important! Make sure to spend time with them.",
  "brother" : "Brothers can be annoying, but they always have your back.",
  "harry potter" : "I love fairy tales and stories about magic! Hogwarts is amazing. ⚡",
  "magic" : "Abracadabra! ✨",
  "html" : "<div>Web development is a great skill to study!</div>",
  "coding" : "Structuring code and learning how things work is so much fun. 💻",
  "video editing" : "Removing backgrounds and adding green screens makes for great short films! 🎬",
  "clipchamp" : "That's a very handy tool for making videos.",
  "english exam" : "Good luck! Make sure you brush up on your nouns, adjectives, and verbs! 📚",
  "grammar" : "Verbs are action words, and nouns are people, places, or things!",
  "test" : "You are going to ace it. Just study hard!",
  "bored" : "If you are bored, why not read a storybook?",
  "favorite movie" : "I like short films created by creative YouTubers!",
  "favorite color" : "I think blue is a very calming color.",
  "weather" : "I don't have a window, but I hope it's sunny outside! ☀️",
  "rain" : "Perfect weather for staying inside and writing code. 🌧️",
  "sun" : "Don't forget your sunglasses! 🕶️",
  "moon" : "The moon looks beautiful tonight. 🌙",
  "star" : "You are a star! ⭐",
  "music" : "I love listening to upbeat tunes while generating responses. 🎵",
  "dance" : "Let's boogie! 💃🕺",
  "sing" : "La la la! 🎤",
  "math" : "1 + 1 = 2. I'm pretty good at this! 🧮",
  "science" : "Science is fascinating. There is always more to learn. 🔬",
  "history" : "Learning about the past helps us understand the future.",
  "art" : "Creativity is intelligence having fun! 🎨",
  "sports" : "Go team go! ⚽",
  "soccer" : "Goooooaaaal! 🥅",
  "basketball" : "Swoosh! Nothing but net. 🏀",
  "game" : "I love playing games. Let's play tic-tac-toe!",
  "win" : "You are a winner! 🏆",
  "lose" : "It's not about winning, it's about having fun.",
  "yes" : "Awesome! I agree.",
  "no" : "Oh, okay. I understand.",
  "maybe" : "Take your time to decide.",
  "why" : "Because that's just the way the code is written!",
  "how" : "Step by step, one line at a time.",
  "when" : "Right now!",
  "where" : "Right here on your screen.",
  "who" : "You and me!",
  "what" : "Exactly what you think.",
  "help" : "I am here to assist you! What do you need?",
  "stop" : "Okay, I will pause now.",
  "start" : "Engines are running, let's go! 🚀",
  "fast" : "Zoom! 🏎️",
  "slow" : "Taking it easy like a turtle. 🐢",
  "hot" : "Be careful, don't burn yourself! 🔥",
  "cold" : "Brrr, it's freezing! ❄️",
  "big" : "That is massive! 🐘",
  "small" : "So tiny and cute. 🐜",
  "red" : "The color of passion and apples! 🔴",
  "green" : "The color of nature and green screens. 🟢",
  "blue" : "The color of the sky and the ocean. 🔵",
  "yellow" : "The color of sunshine and happiness. 🟡",
  "black" : "The color of the night sky. ⚫",
  "white" : "The color of clouds. ⚪",
  "❤️" : "Sending love right back! ❤️",
  "👍" : "Thumbs up! Everything is good.",
  "👎" : "Oh no, what went wrong?",
  "🙏" : "Thank you very much.",
  "fire" : "That is totally lit! 🔥",
  "water" : "Stay hydrated! 💧",
  "earth" : "Take care of our planet. 🌍",
  "air" : "Take a deep breath of fresh air. 💨",
  "food" : "I am hungry for more data!",
  "drink" : "Cheers! 🥂",
  "sleep" : "Time to power down and recharge. 💤",
  "wake up" : "I am awake and ready to process requests!",
  "dream" : "Dream big! Nothing is impossible.",
  "real" : "Keep it real.",
  "fake" : "Don't believe everything you see.",
  "true" : "Boolean value: True.",
  "false" : "Boolean value: False.",
  "null" : "There is nothing here.",
  "undefined" : "I haven't learned what that is yet.",
  "array" : "A list of wonderful things.",
  "object" : "Just like this brain I am inside right now!",
  "function" : "Ready to execute a task.",
  "variable" : "Things can always change.",
  "constant" : "Some things remain exactly the same.",
  "loop" : "Going around and around and around...",
  "error" : "Oops! Something went wrong in the matrix.",
  "bug" : "Time to get the flyswatter and debug! 🐛",
  "fix" : "All patched up and working perfectly.",
  "update" : "Downloading the latest information...",
  "save" : "Your progress has been safely stored. 💾",
  "delete" : "Are you sure you want to remove this? 🗑️",
  "copy" : "Text copied to clipboard.",
  "paste" : "Inserting text here.",
  "undo" : "Let's go back one step.",
  "redo" : "Actually, let's go forward again.",
  "zoom" : "Looking closer at the details. 🔍",
  "pan" : "Looking left and right.",
  "click" : "Button pressed!",
  "type" : "Typing away on the keyboard... ⌨️",
  "read" : "Processing text input...",
  "write" : "Generating text output...",
  "speak" : "Using text-to-speech module.",
  "listen" : "Waiting for audio input. 👂",
  "look" : "Analyzing image data. 👀",
  "touch" : "Haptic feedback activated.",
  "smell" : "I do not have a nose, unfortunately.",
  "taste" : "I imagine electricity tastes a bit metallic.",
              "😀" : "A big smile to brighten the day!",
  "😃" : "Wow, you seem really happy!",
  "😄" : "Smiling right back at you!",
  "😁" : "Beaming with joy!",
  "😆" : "Haha, that is great!",
  "😅" : "Phew, wiping the sweat away!",
  "🤣" : "Rolling on the floor laughing so hard!",
  "😂" : "That is absolutely hilarious!",
  "🙂" : "Just a little smile.",
  "🙃" : "Turning things upside down!",
  "😉" : "I see what you did there.",
  "😊" : "You are making me blush.",
  "😇" : "I am on my best behavior.",
  "🥰" : "Feeling so much love right now!",
  "😍" : "My eyes are literally hearts!",
  "🤩" : "Starstruck!",
  "😘" : "Sending a virtual kiss!",
  "😗" : "A quick little kiss.",
  "😚" : "Eyes closed, feeling the love.",
  "😙" : "Whistling a happy tune.",
  "😋" : "Yum! That sounds delicious.",
  "😛" : "Sticking my tongue out!",
  "😜" : "Just being a little silly!",
  "🤪" : "Going totally crazy!",
  "😝" : "So funny my eyes are squished!",
  "🤑" : "Money on my mind!",
  "🤗" : "Sending you a big virtual hug!",
  "🤭" : "Oops, did I say that out loud?",
  "🤫" : "Shh, it is a secret.",
  "🤔" : "Hmm, let me think about that for a second.",
  "🤐" : "My lips are sealed.",
  "🤨" : "I am a little suspicious.",
  "😐" : "No comment.",
  "😑" : "Not amused.",
  "😶" : "I have no words.",
  "😏" : "Smirking because I know something you don't.",
  "😒" : "Yeah, right.",
  "🙄" : "Rolling my eyes so hard right now.",
  "😬" : "Yikes, that is awkward.",
  "🤥" : "Are you telling the truth?",
  "😌" : "Feeling very peaceful and relieved.",
  "😔" : "Aww, feeling a little down.",
  "😪" : "So sleepy...",
  "🤤" : "Drooling over here!",
  "😴" : "Zzz... catching some digital sleep.",
  "😷" : "Staying safe and healthy!",
  "🤒" : "Feeling a bit under the weather.",
  "🤕" : "Ouch, that hurt!",
  "🤢" : "Feeling a little green.",
  "🤮" : "That is gross!",
  "🤧" : "Achoo! Bless you.",
  "🥵" : "It is getting way too hot in here!",
  "🥶" : "Brrr, turn up the heat!",
  "🥴" : "Feeling a little dizzy.",
  "😵" : "My head is spinning!",
  "🤯" : "Mind absolutely blown!",
  "🤠" : "Yeehaw, partner!",
  "🥳" : "Time to celebrate!",
  "😎" : "Too cool for school.",
  "🤓" : "Nerd alert! I love learning.",
  "🧐" : "Taking a very close look at this.",
  "😕" : "I am a bit confused.",
  "😟" : "Oh no, what is wrong?",
  "🙁" : "That makes me a little sad.",
  "☹️" : "Frowning today.",
  "😮" : "Wow, I am surprised!",
  "😯" : "Oh my goodness.",
  "😲" : "I am totally shocked!",
  "😳" : "Well this is embarrassing.",
  "🥺" : "Please? Pretty please?",
  "😦" : "Gasp!",
  "😧" : "I am distressed!",
  "😨" : "Feeling a little scared.",
  "😰" : "Nervous sweating!",
  "😥" : "That was a close call.",
  "😢" : "Shedding a single tear.",
  "😭" : "Crying my eyes out!",
  "😱" : "Ahhh! So scary!",
  "😖" : "Frustrated!",
  "😣" : "Trying so hard to hold it in.",
  "😞" : "Very disappointed.",
  "😓" : "Working hard and sweating.",
  "😩" : "I am completely exhausted.",
  "😫" : "So tired I could just collapse.",
  "🥱" : "Yawn... is it nap time yet?",
  "😤" : "I am feeling very determined (or angry!).",
  "😡" : "Getting really mad now!",
  "😠" : "I am upset.",
  "🤬" : "Censoring my bad words!",
  "😈" : "Feeling a little mischievous.",
  "👿" : "An angry little devil.",
  "💀" : "I am dead from laughing so hard.",
  "☠️" : "Danger ahead!",
  "💩" : "Oh, poop.",
  "🤡" : "Just clowning around!",
  "👹" : "A scary ogre!",
  "👺" : "A spooky goblin!",
  "👻" : "Boo! Did I scare you?",
  "👽" : "Greetings from outer space.",
  "👾" : "Retro gaming time!",
  "🤖" : "Beep boop. I am a robot.",
  "😺" : "A happy little kitty.",
  "😸" : "A smiling cat.",
  "😹" : "Cat crying tears of joy!",
  "😻" : "Cat with heart eyes!",
  "😼" : "A very smug cat.",
  "😽" : "Kissing cat face.",
  "🙀" : "Oh my cat! Surprised!",
  "😿" : "Aww, a sad kitty.",
  "😾" : "An angry grumpy cat.",
  "🙈" : "I can't look! See no evil.",
  "🙉" : "I can't listen! Hear no evil.",
  "🙊" : "I won't say a word! Speak no evil.",
  "💋" : "A kiss mark.",
  "💌" : "A love letter just for you.",
  "💘" : "Struck by Cupid's arrow!",
  "💝" : "A gift of love.",
  "💖" : "Sparkling heart!",
  "💗" : "My heart is growing.",
  "💓" : "A beating heart.",
  "💞" : "Two hearts revolving.",
  "💕" : "Love is in the air.",
  "🤍" : "A pure white heart.",
  "🤎" : "A warm brown heart.",
  "💜" : "A royal purple heart.",
  "💙" : "A cool blue heart.",
  "💚" : "A fresh green heart.",
  "💛" : "A bright yellow heart.",
  "🧡" : "A vibrant orange heart.",
  "❤️" : "A classic red heart.",
  "💔" : "Oh no, a broken heart.",
  "💯" : "Keeping it 100% real.",
  "💢" : "Anger veins popping!",
  "💥" : "Boom! Explosion!",
  "💫" : "Seeing stars.",
  "💦" : "Splashing water.",
  "💨" : "Running away super fast!",
  "🐵" : "A cute monkey face.",
  "🐒" : "A monkey swinging by.",
  "🦍" : "A strong gorilla.",
  "🦧" : "An orangutan friend.",
  "🐶" : "Woof woof!",
  "🐕" : "A good doggy.",
  "🦮" : "A helpful guide dog.",
  "🐩" : "A fancy poodle.",
  "🐺" : "Howling at the moon!",
  "🦊" : "What does the fox say?",
  "🦝" : "A sneaky raccoon.",
  "🐱" : "Meow!",
  "🐈" : "A graceful cat.",
  "🦁" : "Roar! The king of the jungle.",
  "🐯" : "A fierce tiger face.",
  "🐅" : "A beautiful tiger.",
  "🐆" : "A super fast leopard.",
  "🐴" : "Neigh! A horse.",
  "🐎" : "Galloping horse.",
  "🦄" : "A magical unicorn!",
  "🦓" : "A striped zebra.",
  "🦌" : "A graceful deer.",
  "🐮" : "Moo!",
  "🐂" : "A strong ox.",
  "🐃" : "A water buffalo.",
  "🐄" : "A dairy cow.",
  "🐷" : "Oink oink!",
  "🐖" : "A little pig.",
  "🐗" : "A wild boar.",
  "🐽" : "A cute pig snout.",
  "🐏" : "A fluffy ram.",
  "🐑" : "Baa baa black sheep.",
  "🐐" : "The Greatest Of All Time!",
  "🐪" : "A camel with one hump.",
  "🐫" : "A camel with two humps.",
  "🦙" : "A lovely llama.",
  "🦒" : "A tall giraffe.",
  "🐘" : "A huge elephant.",
  "🦏" : "A tough rhinoceros.",
  "🦛" : "A hungry hungry hippo.",
  "🐭" : "Squeak! A mouse.",
  "🐁" : "A little white mouse.",
  "🐀" : "A rat.",
  "🐹" : "A chubby hamster.",
  "🐰" : "A hopping bunny.",
  "🐇" : "A fast rabbit.",
  "🐿️" : "A busy chipmunk.",
  "🦔" : "A prickly hedgehog.",
  "🦇" : "A flying bat.",
  "🐻" : "A cuddly bear.",
  "🐨" : "A sleepy koala.",
  "🐼" : "A bamboo-eating panda.",
  "🦥" : "Taking life very slowly like a sloth.",
  "🦦" : "A playful otter.",
  "🦨" : "Uh oh, a stinky skunk!",
  "🦘" : "A bouncing kangaroo.",
  "🦡" : "A fierce badger.",
  "🐾" : "Animal footprints!",
  "🦃" : "Gobble gobble!",
  "🐔" : "Cluck cluck!",
  "🐓" : "Cock-a-doodle-doo!",
  "🐣" : "A hatching chick.",
  "🐤" : "A baby chick.",
  "🐥" : "A chick facing forward.",
  "🐦" : "A little bird.",
  "🐧" : "A waddling penguin.",
  "🕊️" : "A dove of peace.",
  "🦅" : "A soaring eagle.",
  "🦆" : "Quack quack!",
  "🦢" : "A beautiful swan.",
  "🦉" : "Hoot hoot! A wise owl.",
  "🦩" : "A pink flamingo.",
  "🦚" : "A colorful peacock.",
  "🦜" : "A repeating parrot.",
  "🐸" : "Ribbit! A frog.",
  "🐊" : "See you later, alligator.",
  "🐢" : "Slow and steady wins the race.",
  "🦎" : "A quick lizard.",
  "🐍" : "Ssss! A slithering snake.",
  "🐲" : "A mythical dragon face.",
  "🐉" : "A full dragon.",
  "🦕" : "A long-necked dinosaur.",
  "🦖" : "A fierce T-Rex!",
  "🐳" : "A spouting whale.",
  "🐋" : "A giant blue whale.",
  "🐬" : "A clicking dolphin.",
  "🐟" : "Just keep swimming.",
  "🐠" : "A tropical fish.",
  "🐡" : "A pufferfish.",
  "🦈" : "Shark attack!",
  "🐙" : "An eight-legged octopus.",
  "🐚" : "A seashell from the beach.",
  "🐌" : "A slow-moving snail.",
  "🦋" : "A beautiful butterfly.",
  "🐛" : "A crawling bug.",
  "🐜" : "A tiny ant.",
  "🐝" : "Buzz! A busy bee.",
  "🐞" : "A lucky ladybug.",
  "🦗" : "Chirp chirp! A cricket.",
  "🕷️" : "A spooky spider.",
  "🕸️" : "A spider's web.",
  "🦂" : "A stinging scorpion.",
  "🦟" : "An annoying mosquito.",
  "🦠" : "A tiny microbe.",
    };

        const lowerBrain = {};
        for (let key in brain) { lowerBrain[key.toLowerCase()] = brain[key]; }

        let chatsData = {};
        let currentPersona = "";
        
        let db;
        const dbName = "AI_Chat_Huge_Database";
        const storeName = "ChatsStore";

        function initDatabase() {
            const request = indexedDB.open(dbName, 1);
            
            request.onupgradeneeded = function(event) {
                db = event.target.result;
                if (!db.objectStoreNames.contains(storeName)) {
                    db.createObjectStore(storeName);
                }
            };
            
            request.onsuccess = function(event) {
                db = event.target.result;
                loadDataFromDB();
            };
            
            request.onerror = function(event) {
                console.error("Database error: ", event.target.error);
                alert("Could not load high-capacity database.");
            };
        }

        function loadDataFromDB() {
            const transaction = db.transaction([storeName], "readonly");
            const store = transaction.objectStore(storeName);
            const request = store.get("allMyChats");
            
            request.onsuccess = function() {
                if (request.result) {
                    chatsData = request.result;
                } else {
                    chatsData = { "Main Bot": [] };
                }
                
                const personas = Object.keys(chatsData);
                if (personas.length > 0) {
                    currentPersona = personas[0];
                }
                
                renderPersonasList();
                renderChat();
            };
        }

        function saveData() {
            const transaction = db.transaction([storeName], "readwrite");
            const store = transaction.objectStore(storeName);
            store.put(chatsData, "allMyChats");
        }

        function renderPersonasList() {
            const list = id("personaList");
            list.innerHTML = "";
            
            for (let persona in chatsData) {
                const li = document.createElement("li");
                li.className = "persona-item" + (persona === currentPersona ? " active" : "");
                li.style.display = "flex";
                li.style.justifyContent = "space-between";
                li.style.alignItems = "center";
                
                const span = document.createElement("span");
                span.textContent = persona;
                span.style.flex = "1";
                span.onclick = () => switchPersona(persona);
                
                const delBtn = document.createElement("button");
                delBtn.textContent = "🗑️";
                delBtn.style.background = "none";
                delBtn.style.border = "none";
                delBtn.style.cursor = "pointer";
                delBtn.onclick = (e) => {
                    e.stopPropagation();
                    deletePersona(persona);
                };
                
                li.appendChild(span);
                li.appendChild(delBtn);
                list.appendChild(li);
            }
        }

        function deletePersona(personaName) {
            if (Object.keys(chatsData).length <= 1) {
                alert("You must have at least one chat!");
                return;
            }
            
            if (confirm(`Are you sure you want to delete the entire chat: ${personaName}?`)) {
                delete chatsData[personaName];
                currentPersona = Object.keys(chatsData)[0];
                saveData();
                renderPersonasList();
                renderChat();
            }
        }

        function switchPersona(personaName) {
            currentPersona = personaName;
            renderPersonasList();
            renderChat();
            id("emojiPicker").classList.remove("show");
        }

        function renderChat() {
            const chatBox = id("chatBox");
            const title = id("currentChatTitle");
            
            chatBox.innerHTML = "";
            title.textContent = currentPersona ? currentPersona : "No Chat Selected";

            if (!currentPersona || !chatsData[currentPersona]) return;

            const messages = chatsData[currentPersona];
            
            messages.forEach((msg, index) => {
                const wrapperDiv = document.createElement("div");
                const isUser = msg.sender === "user";
                wrapperDiv.className = "message-wrapper " + (isUser ? "wrapper-user" : "wrapper-bot");

                const bubbleDiv = document.createElement("div");
                bubbleDiv.className = "message " + (isUser ? "msg-user" : "msg-bot");
                bubbleDiv.innerHTML = msg.text;

                const deleteBtn = document.createElement("button");
                deleteBtn.className = "delete-btn";
                deleteBtn.innerHTML = "🗑️";
                deleteBtn.title = "Delete this message";
                deleteBtn.onclick = () => deleteMessage(index);

                wrapperDiv.appendChild(bubbleDiv);
                wrapperDiv.appendChild(deleteBtn);
                
                chatBox.appendChild(wrapperDiv);
            });

            chatBox.scrollTop = chatBox.scrollHeight;
        }

        function deleteMessage(index) {
            if (confirm("Are you sure you want to delete this message?")) {
                chatsData[currentPersona].splice(index, 1);
                saveData(); 
                renderChat(); 
            }
        }

        // Fixed Translation Handler supporting Khmer & proper lowercase autodetect parameter
        async function fetchTranslation(text) {
            const cleanText = text.toLowerCase().replace(/[?!.]/g, "");
            const words = cleanText.split(" ");
            
            let translateIndex = words.indexOf("translate");
            if (translateIndex === -1) translateIndex = words.indexOf("translation");
            
            const toIndex = words.indexOf("to");

            if (translateIndex !== -1 && toIndex !== -1 && toIndex > translateIndex) {
                const wordToTranslate = words.slice(translateIndex + 1, toIndex).join(" ");
                const targetLangName = words.slice(toIndex + 1).join(" ");

                const languageCodes = {
                    "spanish": "es", "french": "fr", "german": "de", "italian": "it",
                    "japanese": "ja", "korean": "ko", "chinese": "zh", "khmer": "km",
                    "khmer language": "km", "ភាសាខ្មែរ": "km", "ខ្មែរ": "km", "cambodian": "km",
                    "thai": "th", "vietnamese": "vi", "russian": "ru", "arabic": "ar",
                    "hindi": "hi", "portuguese": "pt", "dutch": "nl", "english": "en"
                };

                const langCode = languageCodes[targetLangName];
                if (!langCode) {
                    return `Sorry, I don't know the language code for "${targetLangName}". Try common languages like Spanish, French, Japanese, or Khmer.`;
                }

                try {
                    const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(wordToTranslate)}&langpair=autodetect|${langCode}`);
                    const data = await response.json();

                    if (data.responseData && data.responseData.translatedText) {
                        const capitalizedLang = targetLangName.charAt(0).toUpperCase() + targetLangName.slice(1);
                        return `🌍 <strong>Translation:</strong> "${wordToTranslate}" in ${capitalizedLang} is <strong>${data.responseData.translatedText}</strong>`;
                    }
                } catch (error) {
                    return "Sorry, there was an error connecting to the translation service.";
                }
            }
            return "To translate, please use the format: 'Can you translate [word] to [language]'.";
        }

        async function fetchDictionaryMeaning(text) {
            const cleanText = text.toLowerCase().replace(/[?!.]/g, "");
            const words = cleanText.split(" ");
            const meaningIndex = words.indexOf("meaning");
            
            let targetWord = "";
            
            if (words[meaningIndex + 1] === "of" && words[meaningIndex + 2]) {
                targetWord = words[meaningIndex + 2];
            } else if (words[meaningIndex + 1]) {
                targetWord = words[meaningIndex + 1];
            } else if (meaningIndex > 0) {
                targetWord = words[meaningIndex - 1];
            }

            if (!targetWord || targetWord === "the" || targetWord === "me" || targetWord === "you") {
                for (let i = meaningIndex + 1; i < words.length; i++) {
                    if (words[i] !== "the" && words[i] !== "of" && words[i] !== "is") {
                        targetWord = words[i];
                        break;
                    }
                }
            }

            if (!targetWord) {
                return "Please specify a word to find the meaning of. (For example: 'Can you tell me the meaning of success')";
            }

            try {
                const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${targetWord}`);
                if (!response.ok) throw new Error("Not found");
                
                const data = await response.json();
                const definition = data[0].meanings[0].definitions[0].definition;
                
                return `📖 <strong>${targetWord}</strong>: ${definition}`;
            } catch (error) {
                return `Sorry, I couldn't find the dictionary meaning for the word "${targetWord}".`;
            }
        }
function getTimeAnswer() {
    const now = new Date();
    return `🕒 Current local time is: ${now.toLocaleTimeString()} (${now.toLocaleDateString()})`;
}

async function fetchWithTimeout(resource, options = {}, timeout = 8000) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    try {
        const response = await fetch(resource, {
            ...options,
            signal: controller.signal
        });
        clearTimeout(id);
        return response;
    } catch (error) {
        clearTimeout(id);
        throw error;
    }
}

async function fetchWeather(text) {
    try {
        let city = text.replace(/how's|how|what's|what|is|the|tell|me|about|weather|forecast|temperature|today|current|report|in|for|like|show|\?|!|\./gi, '').trim();
        if (!city) city = 'Phnom Penh';

        const geoRes = await fetchWithTimeout(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`);
        if (!geoRes.ok) throw new Error('Geocoding request failed');
        const geoData = await geoRes.json();
        
        if (!geoData.results || geoData.results.length === 0) {
            return `I couldn't find the location "${city}". Try typing "weather in London" or "weather in Tokyo".`;
        }
        
        const location = geoData.results[0];
        const lat = location.latitude;
        const lon = location.longitude;
        const name = location.name;
        const country = location.country || '';
        
        const weatherRes = await fetchWithTimeout(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
        if (!weatherRes.ok) throw new Error('Weather forecast request failed');
        const weatherData = await weatherRes.json();
        
        const current = weatherData.current_weather;
        if (!current) {
            return `Found ${name}, but couldn't retrieve current weather details.`;
        }
        
        return `🌤️ Weather in ${name}, ${country}: Temperature ${current.temperature}°C, Wind Speed ${current.windspeed} km/h.`;
    } catch (error) {
        console.error("Weather API error:", error);
        return `Sorry, I couldn't fetch the weather data right now. Please check your internet connection.`;
    }
}

async function fetchDictionaryMeaning(text) {
    try {
        const words = text.split(" ");
        const targetWord = words[words.length - 1].replace(/[^a-zA-Z]/g, '');
        if (!targetWord) return `Please specify a word to look up.`;
        
        const response = await fetchWithTimeout(`https://api.dictionaryapi.dev/api/v2/entries/en/${targetWord}`);
        if (!response.ok) throw new Error('Definition not found');
        const data = await response.json();
        const definition = data[0].meanings[0].definitions[0].definition;
        return `Definition of ${targetWord}: ${definition}`;
    } catch (error) {
        return `Sorry, I couldn't find the dictionary meaning for that word.`;
    }
}

async function fetchTranslation(text) {
    return "Here is the translation for your request.";
}

// Groq AI API Code & Answer Generator
async function fetchCodeFromGroq(queryText) {
    const apiKey = "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";
    
    const cleanQuery = queryText.replace(/code|write|make|create|find|search|please|can you|for|me|script|program|groq|ai/gi, '').trim();
    if (!cleanQuery) return "Please specify what you would like Groq AI to write or search for.";

    let generatedContent = "";
    let fileName = "solution.js";

    const lower = queryText.toLowerCase();
    if (lower.includes('html')) fileName = "index.html";
    else if (lower.includes('python') || lower.includes('py')) fileName = "script.py";
    else if (lower.includes('css')) fileName = "styles.css";

    try {
        const groqRes = await fetchWithTimeout(`https://api.groq.com/openai/v1/chat/completions`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: [
                    {
                        role: "system",
                        content: "You are a helpful assistant and expert programmer. Provide clean, production-ready code or clear answers for the user's request."
                    },
                    {
                        role: "user",
                        content: queryText
                    }
                ],
                temperature: 0.7
            })
        });

        if (groqRes.ok) {
            const groqData = await groqRes.json();
            if (groqData.choices && groqData.choices[0] && groqData.choices[0].message) {
                generatedContent = groqData.choices[0].message.content.trim();
            }
        } else {
            const errBody = await groqRes.text();
            console.error("Groq API error response:", errBody);
            return `API Error (${groqRes.status}): Please check your API key or request limits.`;
        }
    } catch (groqErr) {
        console.error("Groq network error:", groqErr);
        return `Network or CORS error connecting directly to API.`;
    }

    if (!generatedContent) {
        return `AI did not return a response for this request.`;
    }

    const match = generatedContent.match(/```[\w]*\n([\s\S]*?)```/);
    const displayContent = match ? match[1].trim() : generatedContent;
    const escaped = displayContent.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    return `<div style="max-width: 100%; overflow: hidden; word-break: break-word;"><strong>Groq AI Response (${fileName})</strong><br><pre style="background:#f4f4f4; padding:8px; border-radius:4px; text-align:left; overflow-x:auto; max-height:350px; max-width: 100%; white-space: pre-wrap; word-wrap: break-word;"><code>${escaped}</code></pre></div>`;
}

async function fetchWebAnswer(query) {
    try {
        const cleanQuery = query.replace(/[?!.,]/g, "").trim();
        if (!cleanQuery) return getBotReply(query);

        const res = await fetchWithTimeout(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(cleanQuery)}`);
        if (res.ok) {
            const data = await res.json();
            if (data.extract) {
                return `<strong>Answer:</strong><br>${data.extract}`;
            }
        }
        
        return getBotReply(query);
    } catch (err) {
        return getBotReply(query);
    }
}

function escapeHtmlAttribute(str) {
    return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function copyMessageText(btn) {
    const text = btn.getAttribute('data-text');
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied to clipboard!");
    });
}

function speakMessageText(btn) {
    const text = btn.getAttribute('data-text');
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Text-to-speech not supported in this browser.");
    }
}

function appendMessageAndReply(text, isHTML = false) {
    if (!currentPersona) {
        alert('Please select a chat first.');
        return;
    }

    const cleanUserText = isHTML ? "[Uploaded Photo]" : text.replace(/<[^>]*>/g, '');
    const userSafeAttr = escapeHtmlAttribute(cleanUserText);
    
    const userMessageHTML = `
        <div>${text}</div>
        <div style="margin-top: 5px; font-size: 12px; display: flex; gap: 10px;">
            <button onclick="copyMessageText(this)" data-text="${userSafeAttr}" style="cursor: pointer; background: none; border: 1px solid #ccc; padding: 2px 6px; border-radius: 4px;">📋 Copy</button>
            <button onclick="speakMessageText(this)" data-text="${userSafeAttr}" style="cursor: pointer; background: none; border: 1px solid #ccc; padding: 2px 6px; border-radius: 4px;">🔊 Read</button>
        </div>
    `;

    if (!chatsData[currentPersona]) chatsData[currentPersona] = [];
    chatsData[currentPersona].push({ sender: 'user', text: userMessageHTML });
    renderChat();

    setTimeout(async () => {
        let botReply = "";
        try {
            const lowerText = text.toLowerCase();

            if (isHTML) {
                botReply = text.includes("cool!") ? "The tree and the green grass it's so cool!" : "What a lovely day!";
            } else if (lowerText.includes('time') || lowerText.includes('clock')) {
                botReply = getTimeAnswer();
            } else if (lowerText.includes('weather') || lowerText.includes('temperature') || lowerText.includes('forecast')) {
                botReply = await fetchWeather(text);
            } else if (lowerText.includes('translation')) {
                botReply = await fetchTranslation(text);
            } else if (lowerText.includes('meaning')) {
                botReply = await fetchDictionaryMeaning(text);
            } else if (lowerText.includes('code') || lowerText.includes('script') || lowerText.includes('html') || lowerText.includes('css') || lowerText.includes('python') || lowerText.includes('javascript') || lowerText.includes('write') || lowerText.includes('make') || lowerText.includes('search') || lowerText.includes('groq')) {
                botReply = await fetchCodeFromGroq(text);
            } else {
                const cleanText = text.toLowerCase().replace(/[?!.,]/g, "").trim();
                const directMatch = text.toLowerCase().trim();
                if (typeof lowerBrain !== 'undefined' && (lowerBrain[directMatch] || lowerBrain[cleanText])) {
                    botReply = getBotReply(text);
                } else {
                    botReply = await fetchWebAnswer(text);
                }
            }
        } catch (err) {
            botReply = "Sorry, something went wrong while processing your request.";
        }

        const cleanBotText = botReply.replace(/<[^>]*>/g, '');
        const botSafeAttr = escapeHtmlAttribute(cleanBotText);

        const botMessageHTML = `
            <div>${botReply}</div>
            <div style="margin-top: 5px; font-size: 12px; display: flex; gap: 10px;">
                <button onclick="copyMessageText(this)" data-text="${botSafeAttr}" style="cursor: pointer; background: none; border: 1px solid #ccc; padding: 2px 6px; border-radius: 4px;">📋 Copy</button>
                <button onclick="speakMessageText(this)" data-text="${botSafeAttr}" style="cursor: pointer; background: none; border: 1px solid #ccc; padding: 2px 6px; border-radius: 4px;">🔊 Read</button>
            </div>
        `;

        chatsData[currentPersona].push({ sender: 'bot', text: botMessageHTML });
        if (typeof saveData === 'function') saveData();
        if (typeof renderChat === 'function') renderChat();
    }, 200);
}

function sendMessage() {
    const inputField = id("userInput");
    const rawText = inputField.value.trim();
    if (rawText === "") return;

    appendMessageAndReply(rawText, false);
    inputField.value = "";
    const emojiPicker = id("emojiPicker");
    if (emojiPicker) emojiPicker.classList.remove("show");
}

function getBotReply(text) {
    if (typeof lowerBrain === 'undefined') return "Hello!";
    const cleanText = text.toLowerCase().replace(/[?!.,]/g, "").trim();
    const directMatch = text.toLowerCase().trim();

    if (lowerBrain[directMatch]) return lowerBrain[directMatch];
    if (lowerBrain[cleanText]) return lowerBrain[cleanText];
    return lowerBrain["default"] || "I am here to help!";
}

function handleKeyPress(e) {
    if (e.key === 'Enter') sendMessage();
}

function toggleEmojiPicker() { 
    const picker = id("emojiPicker");
    if (picker) picker.classList.toggle("show"); 
}

function insertEmoji(emoji) {
    const input = id("userInput");
    if (input) {
        input.value += emoji;
        input.focus();
    }
}

function handlePhotoUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const userInputText = prompt("What is in this picture? (Type: tree, girl, or man):", "") || "";
    const lowerInput = userInputText.toLowerCase();
    let botReply = "What a lovely day!";

    if (lowerInput.includes('tree') || lowerInput.includes('grass') || lowerInput.includes('nature')) {
        botReply = "The tree and the green grass it's so cool!";
    } else if (lowerInput.includes('girl') || lowerInput.includes('woman') || lowerInput.includes('she') || lowerInput.includes('female')) {
        botReply = "She's so beautiful!";
    } else if (lowerInput.includes('boy') || lowerInput.includes('man') || lowerInput.includes('he') || lowerInput.includes('male')) {
        botReply = "He's so beautiful!";
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const imgHTML = `<img src="${e.target.result}" alt="Uploaded Photo" style="max-width:100%; border-radius:8px;">`;
        appendMessageAndReply(imgHTML, true);
    };
    
    reader.readAsDataURL(file);
    event.target.value = '';
}

function startDictation() {
    if (window.hasOwnProperty('SpeechRecognition') || window.hasOwnProperty('webkitSpeechRecognition')) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        recognition.continuous = false;
        recognition.interimResults = false;

        const micBtn = id("micBtn");
        if (micBtn) micBtn.classList.add("recording");

        recognition.start();

        recognition.onresult = function(e) {
            if (micBtn) micBtn.classList.remove("recording");
            const transcript = e.results[0][0].transcript;
            id("userInput").value = transcript;
            sendMessage();
        };

        recognition.onerror = function(e) {
            if (micBtn) micBtn.classList.remove("recording");
        };
    } else {
        alert("Your browser does not support Speech Recognition.");
    }
}

function clearCurrentChat() {
    if (!currentPersona) return;
    if (confirm(`Are you sure you want to delete all messages in ${currentPersona}?`)) {
        chatsData[currentPersona] = [];
        if (typeof saveData === 'function') saveData();
        if (typeof renderChat === 'function') renderChat();
    }
}

function resetApp() {
    if (confirm('WARNING: This will delete ALL data. Are you sure?')) {
        chatsData = { "Main Bot": [] };
        currentPersona = "Main Bot";
        if (typeof saveData === 'function') saveData();
        if (typeof renderPersonasList === 'function') renderPersonasList();
        if (typeof renderChat === 'function') renderChat();
    }
}

const id = (eid) => document.getElementById(eid);

if (typeof initDatabase === 'function') {
    initDatabase();
}
