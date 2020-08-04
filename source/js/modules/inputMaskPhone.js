import Inputmask from '../vendor/jquery.inputmask.min';

const inputMaskPhone = () => {
  let telInput = document.querySelectorAll('input[type="tel"]');

  let im = new Inputmask("+7(999)999-99-99", {
    showMaskOnHover: false,
    showMaskOnFocus: true,
  });

  im.mask(telInput);

};

export {inputMaskPhone};
