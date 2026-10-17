const inputEl = document.querySelector("input");
const bodyEl = document.querySelector("body");
const h1El = document.querySelector("h1");

inputEl.checked =JSON.parse (localStorage.getItem("mode"));

updateBody()

function updateBody() {
    if (inputEl.checked) {
        bodyEl.style.background = "black";
        h1El.style.color = "white";
    } else {
        bodyEl.style.background = "white";
        h1El.style.color = "black";
    }
}


inputEl.addEventListener("input", () => {
    updateBody()
    updateLocalStorage()
})


function updateLocalStorage(){
    localStorage.setItem("mode",
    JSON.stringify(inputEl.checked)
    )
}
