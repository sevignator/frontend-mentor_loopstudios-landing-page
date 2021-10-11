const menuContainer = document.querySelector('.js-menu-container');
const openMenuButton = document.querySelector('.js-menu-open');
const closeMenuButton = document.querySelector('.js-menu-close');

openMenuButton.addEventListener('click', function openMenu() {
  menuContainer.classList.add('mobile-menu--open');
  document.body.classList.add('no-scroll');
});

closeMenuButton.addEventListener('click', function closeMenu() {
  menuContainer.classList.remove('mobile-menu--open');
  document.body.classList.remove('no-scroll');
});
