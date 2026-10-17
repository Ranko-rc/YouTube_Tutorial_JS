const container = document.querySelector('.container');
const img = container?.querySelector('img');

if (!container || !img) {
    throw new Error('Kontejner zoomu nebo obrázek nebyl nalezen.');
}

container.addEventListener('mousemove', (event) => {
    const bounds = container.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = 'scale(2)';
});

container.addEventListener('mouseleave', () => {
    img.style.transformOrigin = 'center center';
    img.style.transform = 'scale(1)';
});
