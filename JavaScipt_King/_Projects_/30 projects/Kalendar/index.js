
const jmenoMesiceEl = document.getElementById("jmeno-mesice")
const jmenoDneEl = document.getElementById("jmeno-dne")
const cisloDneEl = document.getElementById("cislo-dne")
const rokEl = document.getElementById("rok")

const date = new Date();
const month = date.getMonth
const weekday = date.getDay

jmenoMesiceEl.innerText = date.toLocaleString("cz", {
    month: "long"
});

jmenoDneEl.innerText = date.toLocaleString("cz", {
    weekday: "long"
});

cisloDneEl.innerText = date.getDate();

rokEl.innerText = date.getFullYear();


}