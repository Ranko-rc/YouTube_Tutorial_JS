const btnEl = document.getElementById("btn");
const navEl = document.getElementById("nav");

btnEl.addEventListener("click", () => {
    btnEl.classList.toggle("active");
    navEl.classList.toggle("active");
});