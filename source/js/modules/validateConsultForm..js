import {validateForm} from "./getValidateForm";

const validateConsultForm = () => {

  const constraints = {
    phone: {
      presence: true,
      format: {
        pattern: /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/
      }
    },
  };

  const form = document.querySelector(`.main-consult-form`);

  validateForm(form, constraints);

};

export {validateConsultForm};
