let btnEl = document.getElementById("btn");
let sidebarEl = document.querySelector(".sidebar");
let searchBtnEl = document.querySelector(".bx-search");
let listItemEl = document.querySelectorAll(".list-item");

btnEl.addEventListener("click", () => {
    sidebarEl.classList.toggle("active");
});

searchBtnEl.addEventListener("click", () => {
    sidebarEl.classList.toggle("active");
});

listItemEl.forEach(item => {
    item.addEventListener("click", () => {
        listItemEl.forEach(listItem => {
            listItem.classList.remove("active");
        });

        item.classList.add("active");
    });
});

