const btnEl = document.getElementById('btn');

btnEl.addEventListener('click', () => {
    document.body.style.backgroundColor = changeColor();


    console.log(document.body.style.backgroundColor);

    function changeColor() {
        return `rgb(
        ${Math.floor(Math.random() * 256)}, 
        ${Math.floor(Math.random() * 256)}, 
        ${Math.floor(Math.random() * 256)})`;
    }
});