        const btnEl = document.getElementById('btn');
        const emojiNameEl = document.getElementById('emoji-name');

        const emoji = [];

       async function getRandomEmoji() {
            const apiUrl = 'https://emoji-api.com/emojis?access_key=1962cba19bcbdcdf039340675a3b30376853e254';
            const response = await fetch(apiUrl);
            const data = await response.json();
            
            console.log(data);
            

            for (let i = 0; i < data.length; i++) {
                emoji.push ({
                    name: data[i].unicodeName,
                    symbol: data[i].character
                });
               
            }
            return {
                ...emoji[Math.floor(Math.random() * emoji.length)],
                
            }
        }

        // getRandomEmoji()


        btnEl.addEventListener('click', () => {
            getRandomEmoji().then(randomEmoji => {  
                emojiNameEl.textContent = randomEmoji.name;
                btnEl.textContent = randomEmoji.symbol;
            });
        });
   