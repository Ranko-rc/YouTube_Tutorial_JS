const btnEl = document.getElementById('btn');
const containerEl = document.getElementById('container');

btnEl.addEventListener('click', () => {
    createToast();  
});

function createToast() {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = '<h1>This is a toast notification!</h1>';
    containerEl.appendChild(toast);

    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}