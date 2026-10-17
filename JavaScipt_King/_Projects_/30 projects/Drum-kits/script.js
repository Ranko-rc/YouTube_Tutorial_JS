const kits = ["kun", "kocka", "vlk", "kohout"];

const containerEl = document.querySelector(".container");

kits.forEach(kit => {
    const btnEl = document.createElement("button");
    
    btnEl.classList.add ("btn");

    btnEl.innerText = kit;

    btnEl.style.textTransform = "capitalize";

    btnEl.style.backgroundImage = "url('src/img/" + kit + ".jpg')";

    containerEl.appendChild (btnEl);

    const audioEl = document.createElement("audio");

    audioEl.src = "src/mp3/" + kit  + ".mp3"; 

    containerEl.appendChild (audioEl);

    btnEl.addEventListener("click", ()=>{
        audioEl.play()
    });

    window.addEventListener("keydown", (event) => {

        if (event.key === kit.slice(2,3)){
            audioEl.play();
            btnEl.style.transform = "scale(.9)";
            setTimeout (() => {
                btnEl.style.transform = "scale(1)"
            }, 100);

        }
    })
});



