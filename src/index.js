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
