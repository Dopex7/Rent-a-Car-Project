const menu = document.querySelector('.menu');

const button = document.querySelector('.ri-menu-2-line');
const removebtn = document.querySelector('.ri-close-large-line');

button.addEventListener('click', function () {
    menu.classList.add('show')
});

removebtn.addEventListener('click', function () {
    menu.classList.remove('show')
});