import {overlayOpenActions} from "./overlayOpenActions";

const requestServiceForm = () => {
  const formOverlay = document.querySelector(`.request-form`);
  if (formOverlay) {

    const form = formOverlay.querySelector(`form`);
    const hiddenInput = form.querySelector(`input[name="name-service"]`);
    const textBlock = formOverlay.querySelector(`.form-overlay__text`);
    const buttons = document.querySelectorAll(`.request-service-button`);

    overlayOpenActions(buttons, formOverlay);

    for (const button of buttons) {
      button.addEventListener(`click`, () => {
        hiddenInput.value = button.dataset.nameService;
        textBlock.textContent = button.dataset.nameService;
      });
    }
  }
};

export {requestServiceForm};
