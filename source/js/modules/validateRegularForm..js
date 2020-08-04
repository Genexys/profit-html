import {validateForm} from "./getValidateForm";

const validateRegularForm = () => {

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

  const forms = document.querySelectorAll(`.regular-form`);

  for (const form of forms) {
    validateForm(form, constraints);
  }

};

export {validateRegularForm};
