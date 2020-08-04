const fixHeader = () => {
  const header = document.querySelector(`.header`);

  let scrollPosition = 0;
  let scrollDirection;

  document.addEventListener(`scroll`, function () {
    scrollDirection = (document.body.getBoundingClientRect()).top > scrollPosition ? 'up' : 'down';
    scrollPosition = (document.body.getBoundingClientRect()).top;

    if (window.pageYOffset > 120) {
      header.classList.add(`header--transform`);

      if (window.pageYOffset > 200) {
        header.classList.add(`header--fix`);

        if (scrollDirection === 'up') {
          header.classList.add(`header--visible`);
        } else {
          header.classList.remove(`header--visible`);
        }

      } else {
        header.classList.remove(`header--fix`);
      }
    } else {
      header.classList.remove(`header--transform`);
    }

  });
};

export {fixHeader};
