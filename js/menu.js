const menuBtn = $('.header__menu-btn');
const menu = $('.header__navigation');

const handleMenu = function() {
    menu.toggleClass('header__navigation--open');
}

menuBtn.on('click', handleMenu);


const navBtn = $('.navigation__link');
const menu2 = $('.header__navigation');
const handleMenu2 = function() {
    menu2.toggleClass('header__navigation--open');
}

navBtn.on('click', handleMenu);