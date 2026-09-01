const apiKey = "dnXjAz9_QDc0UQCo_X0ftWkIq7M_W5nWAE8-RpiPsgs"; // Replace with your actual API

const formEl = document.querySelector("form");
const searchInputEl = document.getElementById("search-input");
const searchResultsEl = document.querySelector(".search-results");
const showMoreButtonEl = document.getElementById("show-more-button");


let inputData = "";
let page = 1;


async function searchImages() {
    if (!searchInputEl || !searchResultsEl || !showMoreButtonEl || !formEl) {
        return;
    }

    inputData = searchInputEl.value.trim();

    if (!inputData) {
        return;
    }

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    if (page === 1) {
        searchResultsEl.innerHTML = "";
    }
    const results = data.results || [];
    results.map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");

        const imageEl = document.createElement("img");
        imageEl.src = result.urls.small;
        imageEl.alt = result.alt_description;

        const imageLinkEl = document.createElement("a");
        imageLinkEl.href = result.links.html;
        imageLinkEl.target = "_blank";
        imageLinkEl.rel = "noopener noreferrer";

        const photoTitle = result.description || result.alt_description || result.user?.name || "Unsplash photo";
        imageLinkEl.textContent = photoTitle;

        imageWrapper.appendChild(imageEl);
        imageWrapper.appendChild(imageLinkEl);
        searchResultsEl.appendChild(imageWrapper);
    });

    page++;

    if (page > 1) {
        showMoreButtonEl.style.display = "block";
    }
}  




formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    showMoreButtonEl.style.display = "none";
    searchImages();
});

showMoreButtonEl.addEventListener("click", () => {
    searchImages();
});