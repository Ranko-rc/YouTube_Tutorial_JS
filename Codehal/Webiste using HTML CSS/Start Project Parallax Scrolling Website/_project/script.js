const text = document.getElementById('text');
const leaf = document.getElementById('leaf');
const tree = document.getElementById('tree');
const plant = document.getElementById('plant');
const hill1 = document.getElementById('hill1');
const hill2 = document.getElementById('hill2');
const hill3 = document.getElementById('hill3');
const hill4 = document.getElementById('hill4');
const hill5 = document.getElementById('hill5');


window.addEventListener('scroll', () => {
    const value = window.scrollY;

    text.style.transform = `translate(-50%, calc(-50% + ${value * 0.3}px))`;
    leaf.style.top = value * -2.5 + 'px';
    leaf.style.left = value * 0.8 + 'px';
    tree.style.top = value * 1.2 + 'px';
    plant.style.top = value * 1.6 + 'px';
    hill5.style.left = value * 1.4 + 'px';
    hill4.style.left = value * -1.1 + 'px';
    hill3.style.top = value * 0.8 + 'px';
    hill2.style.top = value * 0.6 + 'px';
    hill1.style.top = value * 0.4 + 'px';
});
