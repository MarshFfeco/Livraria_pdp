/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/assets/js/load.js":
/*!************************************!*\
  !*** ./frontend/assets/js/load.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Carregando)
/* harmony export */ });
function Carregando(content, loading) {
  var conteudo = content;
  var load = loading; //MUDANDO OS DISPLAY QUANDO CARREGADO

  conteudo.style.display = 'block';
  load.style.display = "none";
}

/***/ }),

/***/ "./frontend/assets/js/mobileNav.js":
/*!*****************************************!*\
  !*** ./frontend/assets/js/mobileNav.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MobileNavBar)
/* harmony export */ });
//MENU ROLAGEM
function MobileNavBar(mobileMenu) {
  this.mobileMenu = mobileMenu;
  var active = "active";

  this.init = function () {
    var _this = this;

    mobileMenu.addEventListener("click", function (e) {
      var options = document.getElementById("options");

      _this.verifyClass(options);
    });
  };

  this.verifyClass = function (options) {
    var button = mobileMenu.getElementsByTagName("button");
    var buttonCssActive = "background-color: var(--main-color);  border-radius: 50%;";
    var buttonCssDisabled = "background-color: white;  border-radius: 0;";
    var path = mobileMenu.getElementsByTagName("path");
    var pathCssActive = "fill: white;";
    var pathCssDisabled = "fill: var(--main-color);";
    var optionCssActive = "visible";
    var optionCssDisable = "hidden";

    if (options.classList.contains("active")) {
      options.classList.remove("active");
      this.changeCss(button, path, buttonCssDisabled, pathCssDisabled, optionCssDisable);
      return;
    }

    options.classList.add(active);
    this.changeCss(button, path, buttonCssActive, pathCssActive, optionCssActive);
  };

  this.changeCss = function (button, path, buttonCss, pathCss, optionsCss) {
    button[0].style.cssText = buttonCss;
    path[0].style.cssText = pathCss;
    options.style.visibility = optionsCss;
  };
}

/***/ }),

/***/ "./frontend/assets/js/nav.js":
/*!***********************************!*\
  !*** ./frontend/assets/js/nav.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChangeColor)
/* harmony export */ });
function ChangeColor(nav) {
  this.nav = nav;
  var limit = 999; //CHAMA AS FUNÇÕES

  this.init = function () {
    var _this = this;

    window.addEventListener("scroll", function (e) {
      _this.change();
    });
    window.addEventListener("resize", function (e) {
      _this.change();
    });
  }; //MUDA A COR DA NAV


  this.change = function () {
    var result = this.verifiYPosition();

    if (!result != 0) {
      nav.style.backgroundColor = "#ffffff";
      return;
    }

    nav.style.backgroundColor = "#fbfbfbbf";
  }; //VERIFICA SE DESCEU A TELA


  this.verifiYPosition = function () {
    var canChange = this.canChange();

    if (!canChange) {
      return 0;
    }

    var top = window.scrollY;
    return top;
  }; //VERIFICA O TAMANHO DA TELA


  this.canChange = function () {
    if (window.innerWidth > limit) return true;
    return false;
  };
}
;

/***/ }),

/***/ "./frontend/assets/img/green.png":
/*!***************************************!*\
  !*** ./frontend/assets/img/green.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/green.png");

/***/ }),

/***/ "./frontend/assets/img/image_erro.png":
/*!********************************************!*\
  !*** ./frontend/assets/img/image_erro.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/image_erro.png");

/***/ }),

/***/ "./frontend/assets/img/logo.png":
/*!**************************************!*\
  !*** ./frontend/assets/img/logo.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/logo.png");

/***/ }),

/***/ "./frontend/assets/css/erro.css":
/*!**************************************!*\
  !*** ./frontend/assets/css/erro.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/assets/css/load.css":
/*!**************************************!*\
  !*** ./frontend/assets/css/load.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/assets/css/loginorsignup.css":
/*!***********************************************!*\
  !*** ./frontend/assets/css/loginorsignup.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/assets/css/navigation.css":
/*!********************************************!*\
  !*** ./frontend/assets/css/navigation.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/assets/css/principal.css":
/*!*******************************************!*\
  !*** ./frontend/assets/css/principal.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************!*\
  !*** ./frontend/assets/js/main.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_principal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/principal.css */ "./frontend/assets/css/principal.css");
/* harmony import */ var _css_load_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/load.css */ "./frontend/assets/css/load.css");
/* harmony import */ var _css_erro_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/erro.css */ "./frontend/assets/css/erro.css");
/* harmony import */ var _css_loginorsignup_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/loginorsignup.css */ "./frontend/assets/css/loginorsignup.css");
/* harmony import */ var _css_navigation_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/navigation.css */ "./frontend/assets/css/navigation.css");
/* harmony import */ var _img_image_erro_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/image_erro.png */ "./frontend/assets/img/image_erro.png");
/* harmony import */ var _img_green_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/green.png */ "./frontend/assets/img/green.png");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/logo.png */ "./frontend/assets/img/logo.png");
/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./load */ "./frontend/assets/js/load.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav */ "./frontend/assets/js/nav.js");
/* harmony import */ var _mobileNav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mobileNav */ "./frontend/assets/js/mobileNav.js");











var conteudo = document.getElementById('content-prin');
var loading = document.getElementById("load");
var load = new _load__WEBPACK_IMPORTED_MODULE_8__["default"](conteudo, loading);
load;
var nav = document.getElementById("navegacao");
var mudaCor = new _nav__WEBPACK_IMPORTED_MODULE_9__["default"](nav);
mudaCor.init();
var mobileMenu = document.getElementById("mobile_menu");
var mobileNav = new _mobileNav__WEBPACK_IMPORTED_MODULE_10__["default"](mobileMenu);
mobileNav.init();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map