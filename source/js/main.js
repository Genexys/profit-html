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
openSearch();

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
bannerImageAnimate();

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
heightServicesList();

const reviewSlider = () => {
  var mySwiper = new Swiper('.review-slider__container', {
    // loop: true,

    navigation: {
      nextEl: '.review-slider__button--next',
      prevEl: '.review-slider__button--prev',
    },
  });
};
reviewSlider();

const validateForm = function (form, config, closeModal = false) {
  if (form) {
    form.addEventListener(`submit`, function (e) {
      e.preventDefault();
      handleFormSubmit(form);
    });

    const inputs = form.querySelectorAll(`input, textarea, select`);

    for (let i = 0; i < inputs.length; ++i) {

      inputs.item(i).addEventListener(`change`, function (ev) {
        let errors = validate(form, config) || {};
        showErrorsForInput(this, errors[this.name]);
      });

      inputs.item(i).addEventListener(`focus`, function () {
        this.parentNode.classList.remove(`input-wrapper--error`);
        this.parentNode.classList.remove(`input-wrapper--success`);
      });
    }

    function handleFormSubmit(form, input) {
      let errors = validate(form, config);
      showErrors(form, errors || {});
      if (!errors) {
        showSuccess();
      }
    }

    function showErrors(form, errors) {
      form.querySelectorAll(`input[name], select[name]`).forEach(function (input) {
        showErrorsForInput(input, errors && errors[input.name]);
      });
    }

    function showErrorsForInput(input, errors) {

      let formGroup = closestParent(input.parentElement, `input-wrapper`);

      resetFormGroup(formGroup);

      if (errors) {
        formGroup.classList.add(`input-wrapper--error`);
      } else {
        formGroup.classList.add(`input-wrapper--success`);
      }
    }

    function closestParent(child, className) {
      if (!child || child === document) {
        return null;
      }
      if (child.classList.contains(className)) {
        return child;
      } else {
        return closestParent(child.parentNode, className);
      }
    }

    function resetFormGroup(formGroup) {
      formGroup.classList.remove(`input-wrapper--error`);
      formGroup.classList.remove(`input-wrapper--success`);
    }

    function showSuccess() {
      const data = new FormData(form);

      fetch(form.getAttribute(`action`), {
        method: form.getAttribute(`method`),
        body: data,
      })
        .then(response => {
          return response.text();
        })
        .then(text => {
          form.reset();

          if (closeModal) {
            MicroModal.close(`modal-1`);
          }

          MicroModal.show(`tnx-modal`);

          setTimeout(() => {
            MicroModal.close(`tnx-modal`);
          }, 2000);

        }).catch(error => {
        console.error(error);
      });

    }
  }
};

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
validateConsultForm();


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
validateRegularForm();

const validateContactForm = () => {
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

  const form = document.querySelector(`.contact-form`);

  validateForm(form, constraints);
};
validateContactForm();

const inputMaskPhone = () => {
  let telInput = document.querySelectorAll(`input[type="tel"]`);

  let im = new Inputmask(`+7(999)999-99-99`, {
    showMaskOnHover: false,
    showMaskOnFocus: true,
  });

  im.mask(telInput);

};
inputMaskPhone();

const getModal = () => {
  MicroModal.init({
    onClose: (modal) => {
      modal.querySelector(`form`).reset();
    },
  });
};

getModal();


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
overlayOpenMenu();

const fixHeader = () => {
  const header = document.querySelector(`.header`);

  let scrollPosition = 0;
  let scrollDirection;

  document.addEventListener(`scroll`, function () {
    scrollDirection = (document.body.getBoundingClientRect()).top > scrollPosition ? `up` : `down`;
    scrollPosition = (document.body.getBoundingClientRect()).top;

    if (window.pageYOffset > 120) {
      header.classList.add(`header--transform`);

      if (window.pageYOffset > 200) {
        header.classList.add(`header--fix`);

        if (scrollDirection === `up`) {
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
fixHeader();

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

const overlayOpenForm = () => {
  const form = document.getElementById(`form-overlay`);
  const listBtn = document.querySelectorAll(`.open-layout-form`);

  overlayOpenActions(listBtn, form);

};

overlayOpenForm();

const requestServiceForm = () => {
  const formOverlay = document.querySelector(`.request-form`);
  if (formOverlay) {

    const form = formOverlay.querySelector(`form`);
    const hiddenInput = form.querySelector(`input[name="name-service"]`);
    const textBlock = formOverlay.querySelector(`.form-overlay__text`);
    const buttons = document.querySelectorAll(`.request-service-button`);

    overlayOpenActions(buttons, formOverlay);

    for (const button of buttons) {
      button.addEventListener(`click`, () => {
        hiddenInput.value = button.dataset.nameService;
        textBlock.textContent = button.dataset.nameService;
      });
    }
  }
};

requestServiceForm();


const faqAccordion = () => {
  const quBlock = document.querySelector(`.accordion`);

  if (quBlock) {

    const blocksServices = quBlock.querySelectorAll(`.accordion__item`);

    for (const block of blocksServices) {

      block.classList.add(`accordion--js`);
      const t = function (n) {
        let i, r = !1, o = 100;
        function s() {
          if (new Date - i < o) {
            setTimeout(s, o);

          } else {
            r = !1;
            const e = n.target.parentElement.querySelector(`.accordion__answer-wrapper`);
            const t = e.scrollHeight + `px`;
            const button = n.target;
            e.classList.toggle(`open`);

            if (!e.classList.contains(`open`)) {
              e.setAttribute(`aria-hidden`, `false`);
              button.setAttribute(`aria-expanded`, `false`);
            } else {
              e.setAttribute(`aria-hidden`, `true`);
              button.setAttribute(`aria-expanded`, `true`);
            }

            e.style.height = 0 === e.offsetHeight ? 0 : t;
          }
        }

        window.addEventListener(`resize`, function () {
          i = new Date;
          !1 === r && (r = !0, setTimeout(s, o));
        }, !1);

        const e = n.target.parentElement.querySelector(`.accordion__answer-wrapper`);
        const t = e.scrollHeight + `px`;
        const button = n.target;
        e.classList.toggle(`open`);

        if (!e.classList.contains(`open`)) {
          e.setAttribute(`aria-hidden`, `false`);

          button.setAttribute(`aria-expanded`, `false`);
        } else {
          e.setAttribute(`aria-hidden`, `true`);
          button.setAttribute(`aria-expanded`, `true`);
        }

        e.style.height = 0 === e.offsetHeight ? t : 0;
      };
      const n = block.querySelectorAll(`.accordion__question`);

      n.forEach(function (e) {
        e.addEventListener(`click`, t);
      });
    }
  }
};
faqAccordion();

const scrollToServicesList = () => {
  const btn = document.querySelector(`.main-banner__service-btn`);

  if (btn) {
    const list = document.querySelector(`.main-list-services`);

    btn.addEventListener(`click`, () => window.scroll({top: list.getBoundingClientRect().top - 100, left: 0, behavior: `smooth`}));
  }
};

scrollToServicesList();

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(function ($) {
  var pluses = /\+/g;
  function encode(s) {
    return config.raw ? s : encodeURIComponent(s);
  }
  function decode(s) {
    return config.raw ? s : decodeURIComponent(s);
  }
  function stringifyCookieValue(value) {
    return encode(config.json ? JSON.stringify(value) : String(value));
  }
  function parseCookieValue(s) {
    if (s.indexOf('"') === 0) {
      s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    }
    try {
      s = decodeURIComponent(s.replace(pluses, ' '));
      return config.json ? JSON.parse(s) : s;
    } catch(e) {}
  }
  function read(s, converter) {
    var value = config.raw ? s : parseCookieValue(s);
    return $.isFunction(converter) ? converter(value) : value;
  }
  var config = $.cookie = function (key, value, options) {
    if (value !== undefined && !$.isFunction(value)) {
      options = $.extend({}, config.defaults, options);
      if (typeof options.expires === 'number') {
        var days = options.expires, t = options.expires = new Date();
        t.setTime(+t + days * 864e+5);
      }
      return (document.cookie = [
        encode(key), '=', stringifyCookieValue(value),
        options.expires ? '; expires=' + options.expires.toUTCString() : '',
        options.path    ? '; path=' + options.path : '',
        options.domain  ? '; domain=' + options.domain : '',
        options.secure  ? '; secure' : ''
      ].join(''));
    }
    var result = key ? undefined : {};
    var cookies = document.cookie ? document.cookie.split('; ') : [];
    for (var i = 0, l = cookies.length; i < l; i++) {
      var parts = cookies[i].split('=');
      var name = decode(parts.shift());
      var cookie = parts.join('=');
      if (key && key === name) {
        result = read(cookie, value);
        break;
      }
      if (!key && (cookie = read(cookie)) !== undefined) {
        result[name] = cookie;
      }
    }
    return result;
  };
  config.defaults = {};
  $.removeCookie = function (key, options) {
    if ($.cookie(key) === undefined) {
      return false;
    }
    $.cookie(key, '', $.extend({}, options, { expires: -1 }));
    return !$.cookie(key);
  };
}));
$(".close-cookie-warning").on("click", function() {
  $.cookie('HideCookieMessage', 'true', { expires: 120, path: '/'});
  $('div.cookies').hide();
});
(function ($) {
  if ($.cookie('HideCookieMessage')) { $('.cookies').hide(); } else {
    $('.cookies').show(); }
})(jQuery);

