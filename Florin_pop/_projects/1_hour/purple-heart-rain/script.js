function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';

    heart.innerText = '💜';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, (parseFloat(heart.style.animationDuration) * 2000));
}   

setInterval(createHeart, 600);