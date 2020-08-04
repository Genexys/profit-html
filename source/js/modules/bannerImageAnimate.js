const bannerImageAnimate = () => {
  const doc1 = document.querySelector(`.doc-1`);

  if (doc1) {
    const doc2 = document.querySelector(`.doc-2`);
    const doc3 = document.querySelector(`.doc-3`);

    document.addEventListener(`DOMContentLoaded`, () => {
      doc1.classList.add(`active`);
      doc2.classList.add(`active`);
      doc3.classList.add(`active`);
    });
  }
};

export {bannerImageAnimate};
