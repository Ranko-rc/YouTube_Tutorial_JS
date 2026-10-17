const imageContainerEl = document.querySelector('.image-container');
const prevEl = document.getElementById('prev');
const nextEl = document.getElementById('next');

if (!imageContainerEl || !prevEl || !nextEl) {
  console.error('Chybí .image-container nebo #prev nebo #next v HTML.');
} else {
  let x = 0;
  let timer;

  function updateGallery() {
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    clearTimeout(timer);
    timer = setTimeout(() => {
      x -= 45;
      updateGallery();
    }, 3000);
  }

  prevEl.addEventListener('click', () => {
    x += 45;
    clearTimeout(timer);
    updateGallery();
  });

  nextEl.addEventListener('click', () => {
    x -= 45;
    clearTimeout(timer);
    updateGallery();
  });

  updateGallery();
}