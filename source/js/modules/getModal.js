import MicroModal from 'micromodal';

const getModal = () => {
  MicroModal.init({
    onClose: (modal) => {
      modal.querySelector(`form`).reset();
    },
  });
};

export {getModal};
