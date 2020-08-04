import {validateForm} from "./getValidateForm";

const validateContactForm = () => {
  const constraints = {
    name: {
      presence: true,
    },
    phone: {
      presence: true,
      format: {
        pattern: /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/
      }
    },
  };

  const form = document.querySelector(`.contact-form`);

  validateForm(form, constraints);
}

export {validateContactForm}
