const searchBarContainerEl = document.querySelector(".search-bar-container");
const lupaEl = document.querySelector(".lupa");

lupaEl.addEventListener("click", () => {
    searchBarContainerEl.classList.toggle("active");
});