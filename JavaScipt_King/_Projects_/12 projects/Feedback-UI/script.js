const ratingsEl = document.querySelectorAll('.rating');
const btnEl =  document.getElementById('btn');
const containerEl = document.getElementById('container');


ratingsEl.forEach((ratingEl) => {
    ratingEl.addEventListener('click', (event) => {
        removeActive();
    //   console.log(event.target.innerText || event.currentTarget.parentNode.innerText);
      event.currentTarget.classList.add('active');
      event.target.parentNode.classList.add('active');
    });
});


let selectedRating = "";

btnEl.addEventListener('click', () => { 
    if  (selectedRating !== ""){        
    containerEl.innerHTML = 
        `<p>Thank You !</p>` +   
        `<br>` +
        `<br>` +
        `<strong>You selected: ${selectedRating}</strong>` +
        `<br>` +
        `<br>` +
        `<p>Vaše zpětná vazba nám pomuže zdokonalit zákaznický přístup..!.</p>`;
    }
});

function removeActive() {
    selectedRating =event.target.innerText || event.currentTarget.parentNode.innerText;
    ratingsEl.forEach((ratingEl) => {
    ratingEl.classList.remove('active');
    });
}