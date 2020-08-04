import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
smoothscroll.polyfill();

const scrollToServicesList = () => {
  const btn = document.querySelector(`.main-banner__service-btn`);
  const list = document.querySelector(`.main-list-services`);

  btn.addEventListener(`click`, () => window.scroll({top: list.getBoundingClientRect().top - 100, left: 0, behavior: `smooth`}));

}

export {scrollToServicesList}
