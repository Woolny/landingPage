const menuElement = document.querySelector('#menu');

const hamburgerElement = document.querySelector('#hamburger');

hamburgerElement.addEventListener('click', () => {
    menuElement.classList.toggle('menu-open');
    hamburgerElement.classList.toggle('hamburger-open');
})
