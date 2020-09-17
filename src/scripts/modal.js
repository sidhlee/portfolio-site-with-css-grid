const portfolioItems = document.querySelector('.portfolio-items');

portfolioItems.addEventListener('click', (e) => {
  e.preventDefault(); // prevent link from reloading the page;

  const portfolioLink = e.target.closest('.portfolio-link');
  if (!portfolioLink) return;

  const modal = portfolioLink.parentNode.nextElementSibling;
  const modalCloseButton = modal.querySelector('.modal-close');

  const openModal = () => {
    modal.classList.add('show');

    document.body.style.overflowY = 'hidden'; // prevent outer page scroll
  };
  const closeModal = () => {
    modal.classList.remove('show');

    document.body.style.overflowY = 'scroll';
  };

  const fadeOut = () => {
    // run animation
    modal.style.animation = 'fade-out 300ms forwards';
    // close modal on animationend
    modal.addEventListener('animationend', closeModal);
  };

  modalCloseButton.addEventListener('click', fadeOut);
  openModal();
});
