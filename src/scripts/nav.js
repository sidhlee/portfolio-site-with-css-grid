const toggler = document.querySelector(".nav-toggler");
const ul = document.querySelector("nav > ul");
const bd = document.querySelector(".backdrop");

toggler.addEventListener("click", e => {
  openNav();
});

bd.addEventListener("click", e => {
  openNav();
});

function openNav() {
  bd.classList.toggle("is-open");
  ul.classList.toggle("is-open");
  toggler.classList.toggle("is-open");
}
