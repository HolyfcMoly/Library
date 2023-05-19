/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/lib/components/accordion.js":
/*!********************************************!*\
  !*** ./src/js/lib/components/accordion.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

$.prototype.accordion = function () {
  let headActive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'accordion-head--active';
  let contentActive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'accordion-content--active';
  let paddings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 40;
  for (let i = 0; i < this.length; i++) {
    $(this[i]).click(() => {
      const sibling = this[i].nextElementSibling;
      $(this[i]).toggleClass(headActive);
      $(sibling).toggleClass(contentActive);
      if (this[i].classList.contains(headActive)) {
        sibling.style.maxHeight = sibling.scrollHeight + paddings + 'px';
      } else {
        sibling.style.maxHeight = '0px';
      }
    });
  }
};
$('.accordion-head').accordion();

/***/ }),

/***/ "./src/js/lib/components/carousel.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/carousel.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

$.prototype.carousel = function () {
  for (let i = 0; i < this.length; i++) {
    const width = window.getComputedStyle(this[i].querySelector(".carousel-inner")).width;
    const slides = this[i].querySelectorAll(".carousel-items");
    const slidesField = this[i].querySelector(".carousel-slides");
    const dots = this[i].querySelectorAll(".carousel-indicators li");
    slidesField.style.width = 100 * slides.length + "%";
    slides.forEach(slide => {
      slide.style.width = width;
    });
    let offset = 0;
    let slideIndex = 0;
    const dotsClass = () => {
      dots.forEach(dot => dot.classList.remove("active"));
      dots[slideIndex].classList.add("active");
    };
    $(this[i].querySelector('[data-slide="next"]')).click(e => {
      e.preventDefault();
      if (offset === +width.replace(/\D/g, "") * (slides.length - 1)) {
        offset = 0;
        slideIndex = 0;
      } else {
        offset += +width.replace(/\D/g, "");
        slideIndex++;
      }
      slidesField.style.transform = `translateX(-${offset}px)`;
      dotsClass();
    });
    $(this[i].querySelector('[data-slide="prev"]')).click(e => {
      e.preventDefault();
      if (offset === 0) {
        offset = +width.replace(/\D/g, "") * (slides.length - 1);
        slideIndex = slides.length - 1;
      } else {
        offset -= +width.replace(/\D/g, "");
        slideIndex--;
      }
      slidesField.style.transform = `translateX(-${offset}px)`;
      dotsClass();
    });
    const sliderId = this[i].getAttribute("id");
    $(`#${sliderId} .carousel-indicators li`).click(e => {
      const slideTo = e.target.getAttribute("data-slide-to");
      slideIndex = slideTo;
      offset = +width.replace(/\D/g, "") * slideTo;
      slidesField.style.transform = `translateX(-${offset}px)`;
      dotsClass();
    });
    if (dots.length > 0) {
      dots[slideIndex].classList.add("active");
    }
  }
};
$(".carousel").carousel();

/***/ }),

/***/ "./src/js/lib/components/dropwdown.js":
/*!********************************************!*\
  !*** ./src/js/lib/components/dropwdown.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

$.prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    const id = this[i].getAttribute('id');
    $(this[i]).click(() => {
      $(`[data-toggle-id="${id}"]`).fadeToggle(300);
    });
  }
};
$('.dropdown-toggle').dropdown();

/***/ }),

/***/ "./src/js/lib/components/modal.js":
/*!****************************************!*\
  !*** ./src/js/lib/components/modal.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

$.prototype.modal = function (created) {
  function calcScroll() {
    let div = document.createElement("div");
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }
  for (let i = 0; i < this.length; i++) {
    const target = this[i].getAttribute("data-target");
    $(this[i]).click(e => {
      let scroll = calcScroll();
      e.preventDefault();
      $(target).fadeIn(500);
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${scroll}px`;
    });
    const closeElements = document.querySelectorAll(`${target} [data-close]`);
    closeElements.forEach(el => {
      $(el).click(() => {
        $(target).fadeOut(500);
        document.body.style.overflow = "";
        document.body.style.marginRight = "0px";
        if (created) {
          document.querySelector(target).remove();
        }
      });
    });
    $(target).click(e => {
      if (e.target.classList.contains("modal")) {
        $(target).fadeOut(500);
        document.body.style.overflow = "";
        document.body.style.marginRight = "0px";
        if (created) {
          document.querySelector(target).remove();
        }
      }
    });
  }
};
$('[data-toggle="modal"]').modal();
$.prototype.createModal = function () {
  let {
    text,
    btns
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  for (let i = 0; i < this.length; i++) {
    let modal = document.createElement("div");
    modal.classList.add("modal");
    modal.setAttribute("id", this[i].getAttribute("data-target").slice(1));
    // btns = {count: num, settings: [[text, classNames = [], close, callB]]}
    const buttons = [];
    for (let j = 0; j < btns.count; j++) {
      let btn = document.createElement("button");
      btn.classList.add("btn", ...btns.settings[j][1]);
      btn.textContent = btns.settings[j][0];
      if (btns.settings[j][2]) {
        btn.setAttribute("data-close", "true");
      }
      if (btns.settings[j][3] && typeof btns.settings[j][3] === "function") {
        btn.addEventListener("click", btns.settings[j][3]);
      }
      buttons.push(btn);
    }
    ;
    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <button class="close" data-close>
                    <span>&times;</span>
                </button>
                <div class="modal-header">
                    <div class="modal-title">${text.title}</div>
                </div>
                <div class="modal-body">
                    ${text.body} 
                </div>
                <div class="modal-footer">
                    
                </div>
            </div>
        </div>
        `;
    modal.querySelector(".modal-footer").append(...buttons);
    document.body.appendChild(modal);
    $(this[i]).modal(true);
    $(this[i].getAttribute("data-target")).fadeIn(500);
  }
};

/***/ }),

/***/ "./src/js/lib/components/tab.js":
/*!**************************************!*\
  !*** ./src/js/lib/components/tab.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.tab = function () {
  for (let i = 0; i < this.length; i++) {
    (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).on("click", () => {
      (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).addClass("tab-item--active").siblings().removeClass("tab-item--active").closest(".tab").find(".tab-content").removeClass("tab-content--active").eq((0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).index()).addClass("tab-content--active");
    });
  }
};
(0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])("[data-tab-panel] .tab-item").tab();

/***/ }),

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const $ = function (selector) {
  return new $.prototype.init(selector);
};
$.prototype.init = function (selector) {
  if (!selector) {
    return this; // {}
  }

  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }
  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
};
$.prototype.init.prototype = $.prototype;
window.$ = $;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ($);

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/handlers */ "./src/js/lib/modules/handlers.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");
/* harmony import */ var _components_dropwdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dropwdown */ "./src/js/lib/components/dropwdown.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/modal */ "./src/js/lib/components/modal.js");
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tab */ "./src/js/lib/components/tab.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/accordion */ "./src/js/lib/components/accordion.js");
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/carousel */ "./src/js/lib/components/carousel.js");
/* harmony import */ var _services_request__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/request */ "./src/js/lib/services/request.js");












/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

$.prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }
  return this;
};
$.prototype.eq = function (i) {
  const swap = this[i];
  const objLength = Object.keys(this).length;
  for (let i = 0; i < objLength; i++) {
    delete this[i];
  }
  this[0] = swap;
  this.length = 1;
  return this;
};
$.prototype.index = function () {
  const parent = this[0].parentNode;
  const childs = [...parent.children];
  const findMyIndex = item => {
    return item == this[0];
  };
  return childs.findIndex(findMyIndex);
};
$.prototype.find = function (selector) {
  // общее кол-во элементов
  let numberOfItems = 0;
  // кол-во записанных элементов
  let counter = 0;
  // создаем поверхностную копию
  const copyObj = Object.assign({}, this);
  //цикл закончит работу тогда, когда в copyObj закончатся el
  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].querySelectorAll(selector);
    if (arr.length === 0) {
      continue;
    }
    for (let j = 0; j < arr.length; j++) {
      // перезаписываем в this новые свойства
      this[counter] = arr[j];
      counter++;
    }
    numberOfItems += arr.length;
  }
  this.length = numberOfItems;
  const objLength = Object.keys(this).length;
  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }
  return this; // возвращаем новый объект
};

$.prototype.closest = function (selector) {
  let counter = 0;
  for (let i = 0; i < this.length; i++) {
    if (!this[i].closest(selector)) {
      this[i].parentNode;
    } else {
      this[i] = this[i].closest(selector);
    }
    counter++;
  }
  const objLength = Object.keys(this).length;
  for (; counter < objLength; counter++) {
    delete this[counter];
  }
  return this;
};
$.prototype.siblings = function () {
  // общее кол-во элементов
  let numberOfItems = 0;
  // кол-во записанных элементов
  let counter = 0;
  // создаем поверхностную копию
  const copyObj = Object.assign({}, this);
  //цикл закончит работу тогда, когда в copyObj закончатся el
  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].parentNode.children;
    for (let j = 0; j < arr.length; j++) {
      if (copyObj[i] === arr[j]) {
        continue;
      }
      // перезаписываем в this новые свойства
      this[counter] = arr[j];
      counter++;
    }
    numberOfItems += arr.length - 1;
  }
  this.length = numberOfItems;
  const objLength = Object.keys(this).length;
  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }
  return this; // возвращаем новый объект
};

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.add(...arguments);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.remove(...arguments);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (classNames) {
  for (let i = 0; i < this.length; i++) {
    this[i].classList.toggle(classNames);
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }
    this[i].style.display = '';
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }
    this[i].style.display = 'none';
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggle = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }
    if (this[i].style.display === 'none') {
      this[i].style.display = '';
    } else {
      this[i].style.display = 'none';
    }
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

$.prototype.animateOverTime = function (dur, callBack, fin) {
  let timeStart;
  function _animateOverTime(time) {
    if (!timeStart) {
      timeStart = time;
    }
    let timeElapsed = time - timeStart;
    let complection = Math.min(timeElapsed / dur, 1);
    callBack(complection);
    if (timeElapsed < dur) {
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof fin === 'function') {
        fin();
      }
    }
  }
  return _animateOverTime;
};
$.prototype.fadeIn = function (dur, display, fin) {
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display || 'block'; // значение по умолчанию(старый формат)

    const _fadeIn = complection => {
      this[i].style.opacity = complection;
    };
    const ani = this.animateOverTime(dur, _fadeIn, fin);
    requestAnimationFrame(ani);
  }
  return this;
};
$.prototype.fadeOut = function (dur, fin) {
  for (let i = 0; i < this.length; i++) {
    const _fadeOut = complection => {
      this[i].style.opacity = 1 - complection;
      if (complection === 1) {
        this[i].style.display = 'none';
      }
    };
    const ani = this.animateOverTime(dur, _fadeOut, fin);
    requestAnimationFrame(ani);
  }
  return this;
};
$.prototype.fadeToggle = function (dur, display, fin) {
  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display === 'none') {
      this[i].style.display = display || 'block';
      const _fadeIn = complection => {
        this[i].style.opacity = complection;
      };
      const ani = this.animateOverTime(dur, _fadeIn, fin);
      requestAnimationFrame(ani);
    } else {
      const _fadeOut = complection => {
        this[i].style.opacity = 1 - complection;
        if (complection === 1) {
          this[i].style.display = 'none';
        }
      };
      const ani = this.animateOverTime(dur, _fadeOut, fin);
      requestAnimationFrame(ani);
    }
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/handlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/handlers.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (event, call) {
  if (!event || !call) {
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(event, call);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (event, call) {
  if (!event || !call) {
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(event, call);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (handler) {
  for (let i = 0; i < this.length; i++) {
    if (handler) {
      this[i].addEventListener('click', handler);
    } else {
      this[i].click();
    }
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/services/request.js":
/*!****************************************!*\
  !*** ./src/js/lib/services/request.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

$.prototype.get = async function (url) {
  let dataTypeAns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'json';
  let res = await fetch(url);
  if (!res.ok) {
    throw new Error(`could not fetch ${url}, status: ${res.status}`);
  }
  switch (dataTypeAns) {
    case 'json':
      return await res.json();
    case 'text':
      return await res.text();
    case 'blob':
      return await res.blob();
  }
};
$.prototype.post = async function (url, data) {
  let dataTypeAns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'text';
  let res = await fetch(url, {
    method: "POST",
    body: data
  });
  switch (dataTypeAns) {
    case 'json':
      return await res.json();
    case 'text':
      return await res.text();
    case 'blob':
      return await res.blob();
  }
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");


// $('#first').on('click', () => {
//     $('div').eq(1).fadeToggle(800);
// });

// $('[data-count="second"]').on('click', () => {
//     $('div').eq(2).fadeToggle(800);
// });

// $('button').eq(2).on('click', () => {
//     $('.w-500').fadeToggle(800);
// });

// $('#trigger').click(() => $('#trigger').createModal({
//     text: {
//         title: 'Modal title',
//         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, excepturi consequuntur enim blanditiis tempora mollitia minus magnam eligendi atque sit qui, odit deserunt rerum, asperiores voluptates eos cumque aliquid pariatur.',
//     },
//     btns: {
//         count: 3,
//         settings: [
//             [
//                 'Close',
//                 ['btn-danger', 'mr-10'],
//                 true
//             ],
//             [
//                 'Save Changes',
//                 ['btn-success'],
//                 false,
//                 () => {
//                     alert('Данные сохранены');
//                 }
//             ],
//             [
//                 'Another',
//                 ['btn-warning', 'ml-10'],
//                 false,
//                 () => {
//                     alert('Hello World');
//                 }
//             ]
//         ]
//     }
// }))

// $().get('https://jsonplaceholder.typicode.com/todos/1')
//     .then(res => console.log(res))

// // динамическая верстка
// // $('.wrapper').html(
// //     `
// //     <div class="dropdown">
// //         <button class="btn btn-primary dropdown-toggle" id="dropdownMenuBtn">Dropdown button</button>
// //         <div class="dropdown-menu" data-toggle-id="dropdownMenuBtn">
// //             <a href="" class="dropdown-item">Action</a>
// //             <a href="" class="dropdown-item">Action #2</a>
// //             <a href="" class="dropdown-item">Action #3</a>
// //         </div>
// //     </div>
// //     `
// // )
// // $('.dropdown-toggle').dropdown()

// // $('div').click(function(){
// //     console.log($(this).index())
// // })

// // console.log($('div').eq(2).find('.more'))
// // console.log($('.some').closest('.findMeq').addClass('sadsad'))
// // console.log($('.more').eq(0).siblings())
// $('.findMe').fadeIn(3000)
})();

/******/ })()
;
//# sourceMappingURL=script.js.map