// We're adding eventListener to the container, not the individual items.
const portfolioContainer = document.querySelector(".portfolio-items");

portfolioContainer.addEventListener("click", e => {
  e.preventDefault(); // prevent link redirection when clicked on <a>'s

  // While bubbling up from the target, find a node that matches selector
  // i.e. when you click on the text node of link, it selects <a> element that contains the text "More info"
  const modalToggle = e.target.closest(".portfolio-link");
  if (!modalToggle) return; // if we don't find any, quit

  // a.portfolio-link -parent-> figcaption -next sibling-> div.portfolio-header
  const modal = modalToggle.parentNode.nextElementSibling;
  const closeButton = modal.querySelector(".modal-close"); // document.querySelector might have multiple elements with .modal-close

  const modalOpen = () => {
    modal.style.animation = "modalIn 500ms forwards";
    modal.classList.add("is-open");
    document.body.style.overflowY = "hidden";
  };

  const modalClose = () => {
    modal.classList.remove("is-open");
    // so that when we click the link again, the fade-in animation won't close the modal right away.
    modal.removeEventListener("animationend", modalClose);
    // document.body.style.overflowY = "scroll";
  };

  const modalFadeOut = () => {
    modal.style.animation = "modalOut 500ms forwards";
    // modal.classList.remove("is-open"); // this will remove modal before animation ends

    // we need to apply it display: none to be able to click the portfolio item again.
    modal.addEventListener("animationend", modalClose);

    document.body.style.overflowY = "scroll"; // put body scroll back a little bit faster
  };

  closeButton.addEventListener("click", () => {
    modalFadeOut();
  });

  // listen to esc key and close modal
  document.addEventListener("keydown", e => {
    // console.log(e.keyCode); // ESC is 27
    if (e.keyCode === 27) {
      modalFadeOut();
    }
  });

  modalOpen();
});
