const imgsEl = document.getElementById('imgs');
const imgEl = imgs.getElementsByTagName('img');

let index = 0;

function run() {
    index = index + 1;
    if (index >= imgEl.length) {
        index = 0;
    }
    imgsEl.style.transform = `translateX(${-index * 500}px)`;
}

setInterval(run, 2000);