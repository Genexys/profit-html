const overlayOpenActions = (btnEls, block) => {

  const btnClose = block.querySelector(`.block-overlay__close-button`);

  for (const btn of btnEls) {
    btn.addEventListener(`click`, function () {
      if (!block.classList.contains(`block-overlay--open`)) {
        btn.setAttribute(`aria-expanded`, `true`);
        block.classList.add(`block-overlay--open`);
      } else {
        btn.setAttribute(`aria-expanded`, `false`);
        block.classList.remove(`block-overlay--open`);
      }
    });
  }

  btnClose.addEventListener(`click`, function () {
    for (const btn of btnEls) {
      btn.setAttribute(`aria-expanded`, `false`);
    }
    block.classList.remove(`block-overlay--open`);
  });

  block.addEventListener(`click`, function (evt) {
    if (evt.target === block) {
      for (const btn of btnEls) {
        btn.setAttribute(`aria-expanded`, `false`);
      }
      block.classList.remove(`block-overlay--open`);
    }
  });
};

export {overlayOpenActions};
