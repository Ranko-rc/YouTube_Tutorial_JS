const openEl = document.getElementById('Open');
const closeEl = document.getElementById('Close');
const popupContainerEl = document.getElementById('container');

openEl.addEventListener('click', () => {
    popupContainerEl.classList.add('active');
});

closeEl.addEventListener('click', () => {
    popupContainerEl.classList.remove('active');
});
