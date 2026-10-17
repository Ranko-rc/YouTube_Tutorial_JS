const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-image");
const animeNameEl = document.querySelector(".anime-name");

btnEl.addEventListener("click", async function () {
  try {
    btnEl.disabled = true;
    btnEl.innerText = "Nahrávám...";
    animeNameEl.innerText = "Aktualizuji...";
    // animeImgEl.style.width = "50px";
    // animeImgEl.style.height = "50px";
    animeImgEl.src = "spinner.svg";

    const response = await fetch(`https://picsum.photos/400/300?random=${Date.now()}`);

    if (!response.ok) {
      throw new Error("Image request failed");
    }

    btnEl.disabled = false;
    btnEl.innerText = "Získej obrázek";
    animeContainerEl.style.display = "block";
    
    // animeImgEl.style.width = "300px";
    // animeImgEl.style.height = "300px";
    animeImgEl.src = response.url;                  
    animeNameEl.innerText = "Náhodný obrázek";
  } catch (error) {
    console.error(error);
    btnEl.disabled = false;
    btnEl.innerText = "Get Anime";
    animeNameEl.innerText = "An error happened, please try again";
  }
});
