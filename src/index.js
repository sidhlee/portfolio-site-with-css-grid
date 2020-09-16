import './styles/main.scss';

const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
const backdrop = document.querySelector('.backdrop');
const nav = document.querySelector('nav');

const closeNav = () => {
  nav.classList.remove('is-open');
  backdrop.classList.remove('is-open');
  menuBtnOpen.classList.remove('is-open');
};

const openNav = () => {
  nav.classList.add('is-open');
  backdrop.classList.add('is-open');
  menuBtnOpen.classList.add('is-open');
};

menuBtnOpen.addEventListener('click', openNav);
menuBtnClose.addEventListener('click', closeNav);
backdrop.addEventListener('click', closeNav);
nav.addEventListener('click', closeNav);

let prevPageYOffset = window.pageYOffset;
window.onscroll = () => {
  let currentPageYOffset = window.pageYOffset;

  const scrolledDown = currentPageYOffset > prevPageYOffset;
  if (scrolledDown) {
    menuBtnOpen.classList.remove('show');
  } else {
    menuBtnOpen.classList.add('show');
  }
  prevPageYOffset = currentPageYOffset;
};
