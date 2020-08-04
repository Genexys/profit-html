import {overlayOpenActions} from "./overlayOpenActions";


const overlayOpenForm = () => {
  const form = document.getElementById(`form-overlay`);
  const listBtn = document.querySelectorAll(`.open-layout-form`);

  overlayOpenActions(listBtn, form);

};

export {overlayOpenForm};
