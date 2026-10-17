const menuToggle = document.querySelector('.menu-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');
const menuIcon = menuToggle.querySelector('i');

const toggleMenu = () => {
	dropdownMenu.classList.toggle('open');
	const isOpen = dropdownMenu.classList.contains('open');

	menuIcon.classList.toggle('bx-menu', !isOpen);
	menuIcon.classList.toggle('bx-x', isOpen);
};

menuToggle.addEventListener('click', toggleMenu);
menuToggle.addEventListener('keydown', (event) => {
	if (event.key === 'Enter' || event.key === ' ') {
		event.preventDefault();
		toggleMenu();
	}
});
