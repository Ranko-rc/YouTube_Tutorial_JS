const btnEl = document.getElementById('btn');
const animeContainerEl = document.getElementById('anime-container');
const animePicEl = document.getElementById('anime-pic');
const animeNameEl = document.querySelector('.anime-name');

async function apiCatBoys() {
    try {
        btnEl.disabled = true;
        btnEl.innerText = 'Loading...';
        animeNameEl.textContent = 'Updating...';
        animePicEl.src = "src/spinner.svg";
        const response = await fetch('https://api.catboys.com/img');
        btnEl.disabled = false;
        btnEl.innerText = 'Generate';
        const data = await response.json();
        animeContainerEl.style.display = 'block';
        animePicEl.src = data.url;
        animeNameEl.textContent = data.artist;
   
    } catch (error) {
        console.error('Error fetching anime pic:', error);
        btnEl.disabled = false;
        btnEl.innerText = 'Generate';   
        animeNameEl.textContent = 'Error';
        animePicEl.src = "src/spinner-err.svg";
    }
}


btnEl.addEventListener('click', () => {
    apiCatBoys();
});