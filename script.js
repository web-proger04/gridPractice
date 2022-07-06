const burger = document.querySelector('.header__burger'); 
const menu = document.querySelector('.header__menu-header'); 
const body = document.querySelector('body'); 

burger.addEventListener('click', () => {
   menu.classList.toggle('active');
   burger.classList.toggle('active');
   body.classList.toggle('lock');
});