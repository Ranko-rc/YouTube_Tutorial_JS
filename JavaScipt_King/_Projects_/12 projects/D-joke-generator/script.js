const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');


const apiKey = "mSV6dox0js2taU1ETiSzm4a87WX0xPwMkxF0J9pi";

const option = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/jokes"



async function getJoke() {
    try {
    jokeEl.innerText = "Updating...";

    btnEl.disabled = true;
    btnEl.innerText = "Loading";

    const response = await fetch(apiURL, option);
    const data = await response.json();
    // console.log(data[0].joke);
    btnEl.disabled = false;

    jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = "Failed to fetch joke";
        btnEl.disabled = false;
        btnEl.innerText = "Failed ! Try again. Tell me a joke";
    }   
    btnEl.innerText = "GET New Joke !";

}

btnEl.addEventListener('click', (getJoke))
