const overlayOpenMenu = () => {
  const menu = document.getElementById(`menu-overlay`);
  const btnOverlay = document.querySelector(`.header__mobile-button--overlay`);
  const btnMain = document.querySelector(`.header__mobile-button--main`);
  const btnClose = menu.querySelector(`.block-overlay__close-button`);
  const menuHeader = document.querySelector(`.main-nav`);

  const menuOpenActions = () => {

    btnOverlay.addEventListener(`click`, function () {
      if (!menu.classList.contains(`block-overlay--open`)) {
        // btn.classList.add(`header__mobile-button--active`);
        btnOverlay.setAttribute(`aria-expanded`, `true`);
        menu.classList.add(`block-overlay--open`);
      } else {
        // btn.classList.remove(`header__mobile-button--active`);
        btnOverlay.setAttribute(`aria-expanded`, `false`);
        menu.classList.remove(`block-overlay--open`);
      }
    });

    btnClose.addEventListener(`click`, function () {
      if (!menu.classList.contains(`block-overlay--open`)) {
        // btn.classList.add(`header__mobile-button--active`);
        btnOverlay.setAttribute(`aria-expanded`, `true`);
        menu.classList.add(`block-overlay--open`);
      } else {
        // btn.classList.remove(`header__mobile-button--active`);
        btnOverlay.setAttribute(`aria-expanded`, `false`);
        menu.classList.remove(`block-overlay--open`);
      }
    });

    menu.addEventListener(`click`, function (evt) {
      if (evt.target === menu) {
        btnOverlay.setAttribute(`aria-expanded`, `false`);
        menu.classList.remove(`block-overlay--open`);
      }
    });

    btnMain.addEventListener(`click`, function () {
      if (!menuHeader.classList.contains(`main-nav--open`)) {
        btnMain.classList.add(`header__mobile-button--active`);
        btnMain.setAttribute(`aria-expanded`, `true`);
        menuHeader.classList.add(`main-nav--open`);
      } else {
        btnMain.classList.remove(`header__mobile-button--active`);
        btnMain.setAttribute(`aria-expanded`, `false`);
        menuHeader.classList.remove(`main-nav--open`);
      }
    });

  };

  menuOpenActions();

  // window.addEventListener(`resize`, menuOpenActions);
  // window.addEventListener(`orientationchange`, menuOpenActions);

};

export {overlayOpenMenu};
