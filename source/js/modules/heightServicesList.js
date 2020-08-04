const heightServicesList = () => {
  const blocksServices = document.querySelectorAll(`.block-list-services`);

  if (blocksServices[0]) {

    for (const block of blocksServices) {

      block.classList.add(`list-service--js`);
      const t = function (n) {
        let i, r = !1, o = 100;
        function s() {
          if (new Date - i < o) {
            setTimeout(s, o);

          } else {
            r = !1;
            const e = n.target.parentElement.querySelector(`.list-service`);
            const t = e.scrollHeight + `px`;
            e.classList.toggle(`list-service--opened`);

            if (e.classList.contains(`list-service--opened`)) {
              n.target.textContent = `Cвернуть`;
            } else {
              n.target.textContent = `Смотреть все`;
            }

            if (e.classList.contains(`list-service--two-row`)) {
              e.style.height = 277 === e.offsetHeight ? `277px` : t;
            } else {
              e.style.height = 140 === e.offsetHeight ? `140px` : t;
            }
          }
        }

        window.addEventListener(`resize`, function () {
          i = new Date;
          !1 === r && (r = !0, setTimeout(s, o));
        }, !1);

        const e = n.target.parentElement.querySelector(`.list-service`);
        let t = e.scrollHeight + `px`;
        e.classList.toggle(`list-service--opened`);

        if (e.classList.contains(`list-service--opened`)) {
          n.target.textContent = `Cвернуть`
        } else {
          n.target.textContent = `Смотреть все`;
        }

        if (e.classList.contains(`list-service--two-row`)) {
          e.style.height = 277 === e.offsetHeight ? t : `277px`;
        } else {
          e.style.height = 140 === e.offsetHeight ? t : `140px`;
        }
      }
      const n = block.querySelectorAll(`.block-list-services__btn`);

      n.forEach(function (e) {
        e.addEventListener(`click`, t);
      });

      document.addEventListener(`keydown`, function (e) {
        e.keyCode === 13 && e.target.classList.contains("block-list-services__btn") && (e.preventDefault(), t(e))
      });
    }

  }
};

export {heightServicesList};
