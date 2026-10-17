const darkModeToggleEl = document.getElementById('dark-mode-toggle');



// //1 ..... Script to toggle dark mode by directly changing the body's style properties
// darkModeToggleEl.addEventListener("change", function() {
//     toggleDarkMode();
// });

// function toggleDarkMode() {
//     if (darkModeToggleEl.checked) {
//         document.body.style.backgroundColor = "black";
//         document.body.style.color = "yellow";
//     } else {
//         document.body.style.backgroundColor = "aliceblue";
//         document.body.style.color = "black";
//     }
// }




// 2 ..... Script to toggle dark mode based on checkbox state //CSS need to define .dark-mode class in styles.css
darkModeToggleEl.addEventListener("change", (e) => {    
    if (darkModeToggleEl.checked) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
});