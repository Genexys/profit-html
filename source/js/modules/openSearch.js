const openSearch = () => {
  const overlaySearch = document.getElementById(`layout-search`);
  const openSearchBtn = document.querySelector(`.header__search`);
  const closeSearchBtn = document.getElementById(`close-layout-search`);

  openSearchBtn.addEventListener(`click`, function () {
    overlaySearch.classList.add(`open`);
    openSearchBtn.setAttribute(`aria-expanded`, `true`);
  });

  closeSearchBtn.addEventListener(`click`, function () {
    overlaySearch.classList.remove(`open`);
    openSearchBtn.setAttribute(`aria-expanded`, `false`);
  });
};

export {openSearch};
