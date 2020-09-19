const portfolioItems = document.querySelector('.portfolio-items');

portfolioItems.addEventListener('click', (e) => {
  e.preventDefault(); // prevent link from reloading the page;

  const portfolioLink = e.target.closest('.portfolio-link');
  if (!portfolioLink) return;

  const modal = portfolioLink.parentNode.nextElementSibling;
  const modalBackdrop = modal.nextElementSibling;
  const modalCloseButton = modal.querySelector('.modal-close');

  const openModal = () => {
    modal.classList.add('show');
    modalBackdrop.classList.add('show');
    modal.style.animation = 'fade-in 300ms forwards';

    document.body.style.overflowY = 'hidden'; // prevent outer page scroll
  };
  const closeModal = () => {
    modal.classList.remove('show');
    modalBackdrop.classList.remove('show');
    modal.removeEventListener('animationend', closeModal);
    document.body.style.overflowY = 'scroll';
  };

  const fadeOut = () => {
    // run animation
    modal.style.animation = 'fade-out 300ms forwards';
    // close modal on animationend
    modal.addEventListener('animationend', closeModal);
  };

  modalCloseButton.addEventListener('click', fadeOut);
  modalBackdrop.addEventListener('click', fadeOut);

  window.addEventListener('keydown', (e) => {
    // console.log(e.code);
    if (e.code === 'Escape') {
      fadeOut();
    }
  });

  openModal();
});
