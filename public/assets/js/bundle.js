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
/* harmony export */   "default": () => (/* binding */ load)
/* harmony export */ });
function load(conteudo, load) {
  //MUDANDO OS DISPLAY QUANDO CARREGADO
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
function MobileNavBar(mobileMenu, nav, options) {
  this.mobileMenu = mobileMenu;
  this.nav = nav;
  this.options = options;
  var active = "active";
  this.options.style.visibility = "hidden";

  this.init = function () {
    var _this = this;

    mobileMenu.addEventListener("click", function () {
      _this.verifyClass();
    });
  };

  this.verifyClass = function () {
    var button = mobileMenu.getElementsByTagName("button");
    var buttonCssActive = "background-color: var(--main-color);  border-radius: 50%;";
    var buttonCssDisabled = "background-color: none;  border-radius: 0;";
    var path = mobileMenu.getElementsByTagName("path");
    var pathCssActive = "fill: white;";
    var pathCssDisabled = "fill: var(--main-color);";
    var optionCssActive = "visible";
    var optionCssDisable = "hidden";

    if (this.options.classList.contains("active")) {
      this.options.classList.remove("active");
      this.changeCss(button, path, buttonCssDisabled, pathCssDisabled, optionCssDisable);
      this.nav.style.backgroundColor = "#fbfbfbbf";
      return;
    }

    this.options.classList.add(active);
    this.changeCss(button, path, buttonCssActive, pathCssActive, optionCssActive);
    this.nav.style.backgroundColor = "#ffffff";
  };

  this.changeCss = function (button, path, buttonCss, pathCss, optionsCss) {
    button[0].style.cssText = buttonCss;
    path[0].style.cssText = pathCss;
    this.options.style.visibility = optionsCss;
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ChangeColor = /*#__PURE__*/function () {
  function ChangeColor(nav, mobileMenu, mobileNav, options) {
    _classCallCheck(this, ChangeColor);

    this.nav = nav; //MOBILE

    this.mobileMenu = mobileMenu;
    this.mobileNav = mobileNav;
    this.options = options;
    this.searchButton = document.getElementById("buttonSearchOpen");
    this.init();
  } //CHAMA AS FUN????ES


  _createClass(ChangeColor, [{
    key: "init",
    value: function init() {
      this.validationWidth();
      this.event();
    }
  }, {
    key: "search",
    value:
    /* PESQUISAR */
    function search() {
      var activeSearch = options.querySelector("#search");
      var activeSearchVisible = options.querySelector(".input-search");
      activeSearch.classList.toggle("active-search");
      activeSearchVisible.classList.toggle("active-search-invisible");
    }
    /* FIM DO PESQUISAR */

  }, {
    key: "event",
    value: function event() {
      var _this = this;

      window.addEventListener("scroll", function (e) {
        _this.change();
      });
      window.addEventListener("resize", function (e) {
        _this.change();

        _this.validationWidth();
      });
      this.searchButton.addEventListener("click", function (e) {
        _this.search();
      });
    }
  }, {
    key: "validationWidth",
    value: function validationWidth() {
      if (window.innerWidth <= 999) {
        this.mobileNav.init();
        return;
      }

      ;
      this.options.style.visibility = "visible";
    }
  }, {
    key: "change",
    value: //MUDA A COR DA NAV
    function change() {
      var result = this.verifiYPosition();

      if (!result != 0) {
        this.nav.style.backgroundColor = "#ffffff";
        return;
      }

      this.nav.style.backgroundColor = "#fbfbfbbf";
    }
  }, {
    key: "verifiYPosition",
    value: //VERIFICA SE DESCEU A TELA
    function verifiYPosition() {
      var canChange = this.canChange();

      if (!canChange) {
        return 0;
      }

      var top = window.scrollY;
      return top;
    }
  }, {
    key: "canChange",
    value: //VERIFICA SE O MOBILE MENU EST?? ATIVADO
    function canChange() {
      var options = document.getElementById("options");

      if (options.classList.contains("active")) {
        this.nav.style.backgroundColor = "#fbfbfbbf";
        return false;
      }

      return true;
    }
  }]);

  return ChangeColor;
}();


;

/***/ }),

/***/ "./frontend/assets/js/slider/BestSlider.js":
/*!*************************************************!*\
  !*** ./frontend/assets/js/slider/BestSlider.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BestSlide)
/* harmony export */ });
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider */ "./frontend/assets/js/slider/Slider.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var BestSlide = /*#__PURE__*/function (_Slider) {
  _inherits(BestSlide, _Slider);

  var _super = _createSuper(BestSlide);

  function BestSlide(controls, itens, scroll, maxItem) {
    var _this;

    _classCallCheck(this, BestSlide);

    _this = _super.call(this, controls, itens, maxItem);
    _this.itens = itens;
    _this.scroll = scroll;
    _this.moveScroll = 0;
    _this.currentItem = 0;
    return _this;
  }

  _createClass(BestSlide, [{
    key: "controlle",
    value: function controlle() {
      var _this2 = this;

      this.controls.forEach(function (control) {
        _this2.verifyWidth(control);
      });
    }
  }, {
    key: "verifyWidth",
    value: function verifyWidth(control) {
      var _this3 = this;

      control.addEventListener("click", function () {
        var windowWidth = window.innerWidth;

        if (windowWidth <= 470) {
          _this3.eventCell(control);
        } else {
          _this3.event(control);
        }

        ;
      });
    }
  }, {
    key: "event",
    value: function event(control) {
      var firstItem = this.itens[0].getBoundingClientRect().left;
      var lastItem = this.itens[this.itens.length - 1].getBoundingClientRect().left;
      var isLeft = control.classList.contains("left");

      if (isLeft) {
        this.moveScroll -= this.scroll.offsetWidth;
      } else {
        this.moveScroll += this.scroll.offsetWidth;
      }

      if (!isLeft && this.moveScroll > lastItem) {
        this.moveScroll = firstItem;
      }

      if (isLeft && this.scroll.scrollLeft == 0) {
        this.moveScroll = lastItem;
      }

      this.movementScroll();
    }
  }, {
    key: "eventCell",
    value: function eventCell(control) {
      var isLeft = control.classList.contains("left");

      if (isLeft) {
        this.currentItem -= 1;
      } else {
        this.currentItem += 1;
      }

      this.verifyCurrentItem();
      this.addOrRemove();
    }
  }, {
    key: "addOrRemove",
    value: function addOrRemove() {
      this.itens.forEach(function (item) {
        return item.classList.remove("current-item");
      });
      var xItem = this.itens[this.currentItem].getBoundingClientRect().left + this.scroll.scrollLeft;
      console.log(this.itens[this.currentItem]);
      this.scroll.scrollTo({
        left: xItem,
        behavior: "smooth"
      });
      this.itens[this.currentItem].classList.add("current-item");
    }
  }, {
    key: "movementScroll",
    value: function movementScroll() {
      this.scroll.scrollTo({
        left: this.moveScroll,
        behavior: "smooth"
      });
    }
  }]);

  return BestSlide;
}(_Slider__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./frontend/assets/js/slider/MainSlider.js":
/*!*************************************************!*\
  !*** ./frontend/assets/js/slider/MainSlider.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainSlider)
/* harmony export */ });
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider */ "./frontend/assets/js/slider/Slider.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var MainSlider = /*#__PURE__*/function (_Slider) {
  _inherits(MainSlider, _Slider);

  var _super = _createSuper(MainSlider);

  function MainSlider(controls, itens, maxItem) {
    _classCallCheck(this, MainSlider);

    return _super.call(this, controls, itens, maxItem);
  }

  _createClass(MainSlider, [{
    key: "event",
    value: function event(control) {
      var _this = this;

      control.addEventListener("click", function () {
        var isLeft = control.classList.contains("left");

        if (isLeft) {
          _this.currentItem -= 1;
        } else {
          _this.currentItem += 1;
        }

        _this.verifyCurrentItem();

        _this.addOrRemove();
      });
    }
  }, {
    key: "movement",
    value: function movement() {
      this.currentItem += 1;
      this.verifyCurrentItem();
      this.addOrRemove();
    }
  }, {
    key: "addOrRemove",
    value: function addOrRemove() {
      var _this$itens$this$curr;

      this.itens.forEach(function (item) {
        return item.classList.remove("current-item");
      });
      (_this$itens$this$curr = this.itens[this.currentItem]) === null || _this$itens$this$curr === void 0 ? void 0 : _this$itens$this$curr.classList.add("current-item");
    }
  }]);

  return MainSlider;
}(_Slider__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./frontend/assets/js/slider/Slider.js":
/*!*********************************************!*\
  !*** ./frontend/assets/js/slider/Slider.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Slider)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Slider = /*#__PURE__*/function () {
  function Slider(controls, itens, maxItem) {
    _classCallCheck(this, Slider);

    this.controls = controls;
    this.itens = itens;
    this.maxItem = maxItem;
    this.currentItem = 0;
    this.init();
  }

  _createClass(Slider, [{
    key: "init",
    value: function init() {
      this.controlle();
    }
  }, {
    key: "controlle",
    value: function controlle() {
      var _this = this;

      this.controls.forEach(function (control) {
        _this.event(control);
      });
    }
  }, {
    key: "event",
    value: function event(control) {
      var _this2 = this;

      control.addEventListener("click", function () {
        var isLeft = control.classList.contains("left");

        if (isLeft) {
          _this2.currentItem -= 1;
        } else {
          _this2.currentItem += 1;
        }

        _this2.verifyCurrentItem();

        _this2.addOrRemove();
      });
    }
  }, {
    key: "verifyCurrentItem",
    value: function verifyCurrentItem() {
      if (this.currentItem > this.maxItem - 1) {
        this.currentItem = 0;
      }

      if (this.currentItem < 0) {
        this.currentItem = this.maxItem - 1;
      }
    }
  }]);

  return Slider;
}();



/***/ }),

/***/ "./frontend/assets/js/validatedForm/ValidateFormLogin.js":
/*!***************************************************************!*\
  !*** ./frontend/assets/js/validatedForm/ValidateFormLogin.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ValidateFormLogin)
/* harmony export */ });
/* harmony import */ var _ValidateForms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValidateForms */ "./frontend/assets/js/validatedForm/ValidateForms.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var ValidateFormLogin = /*#__PURE__*/function (_ValidateForm) {
  _inherits(ValidateFormLogin, _ValidateForm);

  var _super = _createSuper(ValidateFormLogin);

  function ValidateFormLogin(formulario) {
    var _this;

    _classCallCheck(this, ValidateFormLogin);

    _this = _super.call(this, formulario);
    _this.form = formulario;
    return _this;
  }

  return _createClass(ValidateFormLogin);
}(_ValidateForms__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./frontend/assets/js/validatedForm/ValidateFormRegister.js":
/*!******************************************************************!*\
  !*** ./frontend/assets/js/validatedForm/ValidateFormRegister.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ValidateFormRegister)
/* harmony export */ });
/* harmony import */ var _ValidateForms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValidateForms */ "./frontend/assets/js/validatedForm/ValidateForms.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var ValidateFormRegister = /*#__PURE__*/function (_ValidateForm) {
  _inherits(ValidateFormRegister, _ValidateForm);

  var _super = _createSuper(ValidateFormRegister);

  function ValidateFormRegister(formulario) {
    var _this;

    _classCallCheck(this, ValidateFormRegister);

    _this = _super.call(this, formulario);
    _this.form = formulario;
    return _this;
  }

  _createClass(ValidateFormRegister, [{
    key: "isPassword",
    value: function isPassword() {
      var valid = true;
      var pass = this.form.getElementsByTagName("input")[3];
      var rePass = this.form.getElementsByTagName("input")[4];

      if (pass.value.length < 9) {
        valid = valid && false;
        this.makeErro(pass, "Campo senha precisa ter mais que 9 caractere");
      } else if (pass.value.length > 20) {
        valid = valid && false;
        this.makeErro(pass, "Campo Senha precisa ter menos que 20 caractere");
      }

      if (valid) {
        this.changeInputColor(pass, "var(--main-color)");
      }

      if (pass.value != rePass.value) {
        this.makeErro(rePass, "Valor diferente");
        valid = valid && false;
      }

      if (valid) {
        this.changeInputColor(rePass, "var(--main-color)");
      }

      return valid;
    }
  }]);

  return ValidateFormRegister;
}(_ValidateForms__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./frontend/assets/js/validatedForm/ValidateForms.js":
/*!***********************************************************!*\
  !*** ./frontend/assets/js/validatedForm/ValidateForms.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ValidateForms)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ValidateForms = /*#__PURE__*/function () {
  function ValidateForms(formulario) {
    _classCallCheck(this, ValidateForms);

    this.form = formulario;
  }

  _createClass(ValidateForms, [{
    key: "event",
    value: function event() {
      var _this = this;

      this.form.addEventListener("submit", function (e) {
        _this.preventDefault(e);
      });
    }
  }, {
    key: "preventDefault",
    value: function preventDefault(e) {
      e.preventDefault();
      var isValid = this.checkInputValue();
      var isPassword = this.isPassword();
      if (isValid && isPassword) this.form.submit();
    }
  }, {
    key: "checkInputValue",
    value: function checkInputValue() {
      var valid = true;
      this.cleaned();

      var _iterator = _createForOfIteratorHelper(this.form.getElementsByTagName("input")),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var input = _step.value;
          if (input.type == "hidden" || input.name == "_csrf") continue;
          var label = input.previousElementSibling.innerHTML;

          switch (input.type) {
            case "text":
              if (!this.validText(input, label)) valid = false;
              break;

            case "email":
              if (!this.validEmail(input, label)) valid = false;
              break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return valid;
    }
  }, {
    key: "validText",
    value: function validText(input, label) {
      var value = input.value;
      var valid = true;

      if (value.length < 3) {
        this.makeErro(input, "Campo ".concat(label, " precisa ter mais que 3 caractere"));
        valid = false;
      } else if (value.length > 50) {
        this.makeErro(input, "Campo ".concat(label, " precisa ter menos que 20 caractere"));
        valid = false;
      }

      if (value.match(/[0-9]+/g)) {
        this.makeErro(input, "".concat(label, " Precisa conter apenas letras"));
        valid = false;
      }

      if (valid) this.changeInputColor(input, "var(--main-color)");
      return valid;
    }
  }, {
    key: "validEmail",
    value: function validEmail(input, label) {
      var value = input.value;
      var valid = true;
      var rfc_2822 = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;

      if (!value.match(rfc_2822)) {
        this.makeErro(input, "".concat(label, " Precisa conter email@email.com"));
        valid = false;
      }

      if (valid) this.changeInputColor(input, "var(--main-color)");
      return valid;
    }
  }, {
    key: "isPassword",
    value: function isPassword() {
      var valid = true;
      var pass = this.form.getElementsByTagName("input")[2];

      if (pass.value.length < 9) {
        valid = false;
        this.makeErro(pass, "Campo senha precisa ter mais que 9 caractere");
      } else if (pass.value.length > 20) {
        valid = false;
        this.makeErro(pass, "Campo Senha precisa ter menos que 20 caractere");
      }

      if (valid) {
        this.changeInputColor(pass, "var(--main-color)");
      }

      return valid;
    }
  }, {
    key: "cleaned",
    value: function cleaned() {
      var _iterator2 = _createForOfIteratorHelper(this.form.querySelectorAll(".msg-erro")),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var erroMsg = _step2.value;
          erroMsg.remove();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "makeErro",
    value: function makeErro(input, msg) {
      var formated = "<div class=\"msg-erro\">\n            <ul>\n                <li>".concat(msg, "</li>\n            </ul>\n        </div>");
      input.insertAdjacentHTML('afterend', formated);
      this.changeInputColor(input, "var(--erro-color)");
    }
  }, {
    key: "changeInputColor",
    value: function changeInputColor(input, color) {
      input.style.border = "2px solid ".concat(color);
    }
  }]);

  return ValidateForms;
}();



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

/***/ "./frontend/assets/img/report.png":
/*!****************************************!*\
  !*** ./frontend/assets/img/report.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/report.png");

/***/ }),

/***/ "./frontend/assets/css/adm.css":
/*!*************************************!*\
  !*** ./frontend/assets/css/adm.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/assets/css/book.css":
/*!**************************************!*\
  !*** ./frontend/assets/css/book.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/assets/css/carrinho.css":
/*!******************************************!*\
  !*** ./frontend/assets/css/carrinho.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/assets/css/contrato.css":
/*!******************************************!*\
  !*** ./frontend/assets/css/contrato.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/assets/css/erro.css":
/*!**************************************!*\
  !*** ./frontend/assets/css/erro.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/assets/css/footer.css":
/*!****************************************!*\
  !*** ./frontend/assets/css/footer.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/assets/css/home.css":
/*!**************************************!*\
  !*** ./frontend/assets/css/home.css ***!
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

/***/ "./frontend/assets/css/message.css":
/*!*****************************************!*\
  !*** ./frontend/assets/css/message.css ***!
  \*****************************************/
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

/***/ "./frontend/assets/css/post.css":
/*!**************************************!*\
  !*** ./frontend/assets/css/post.css ***!
  \**************************************/
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


/***/ }),

/***/ "./frontend/assets/css/scrollbar.css":
/*!*******************************************!*\
  !*** ./frontend/assets/css/scrollbar.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/assets/css/search.css":
/*!****************************************!*\
  !*** ./frontend/assets/css/search.css ***!
  \****************************************/
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
/* harmony import */ var _css_footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/footer.css */ "./frontend/assets/css/footer.css");
/* harmony import */ var _css_load_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/load.css */ "./frontend/assets/css/load.css");
/* harmony import */ var _css_scrollbar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/scrollbar.css */ "./frontend/assets/css/scrollbar.css");
/* harmony import */ var _css_erro_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/erro.css */ "./frontend/assets/css/erro.css");
/* harmony import */ var _css_loginorsignup_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/loginorsignup.css */ "./frontend/assets/css/loginorsignup.css");
/* harmony import */ var _css_navigation_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/navigation.css */ "./frontend/assets/css/navigation.css");
/* harmony import */ var _css_home_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/home.css */ "./frontend/assets/css/home.css");
/* harmony import */ var _css_book_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/book.css */ "./frontend/assets/css/book.css");
/* harmony import */ var _css_adm_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/adm.css */ "./frontend/assets/css/adm.css");
/* harmony import */ var _css_message_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../css/message.css */ "./frontend/assets/css/message.css");
/* harmony import */ var _css_carrinho_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../css/carrinho.css */ "./frontend/assets/css/carrinho.css");
/* harmony import */ var _css_post_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../css/post.css */ "./frontend/assets/css/post.css");
/* harmony import */ var _css_search_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../css/search.css */ "./frontend/assets/css/search.css");
/* harmony import */ var _css_contrato_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../css/contrato.css */ "./frontend/assets/css/contrato.css");
/* harmony import */ var _img_image_erro_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../img/image_erro.png */ "./frontend/assets/img/image_erro.png");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../img/logo.png */ "./frontend/assets/img/logo.png");
/* harmony import */ var _img_report_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../img/report.png */ "./frontend/assets/img/report.png");
/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./load */ "./frontend/assets/js/load.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./nav */ "./frontend/assets/js/nav.js");
/* harmony import */ var _mobileNav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mobileNav */ "./frontend/assets/js/mobileNav.js");
/* harmony import */ var _validatedForm_ValidateFormRegister__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./validatedForm/ValidateFormRegister */ "./frontend/assets/js/validatedForm/ValidateFormRegister.js");
/* harmony import */ var _validatedForm_ValidateFormLogin__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./validatedForm/ValidateFormLogin */ "./frontend/assets/js/validatedForm/ValidateFormLogin.js");
/* harmony import */ var _slider_MainSlider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./slider/MainSlider */ "./frontend/assets/js/slider/MainSlider.js");
/* harmony import */ var _slider_BestSlider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./slider/BestSlider */ "./frontend/assets/js/slider/BestSlider.js");

























/* SUMIR COM FLASH-MESSAGE  */

var message = document.querySelectorAll(".position-message");
var messageW = document.querySelectorAll(".warning-message");

if (message.length > 0) {
  var button = document.getElementById("close");

  button.onclick = function () {
    fechar();
  };
}

if (messageW.length > 0) {
  var _button = document.getElementById("closeW");

  _button.onclick = function () {
    fecharW();
  };
}

function fechar() {
  message[0].style.display = "none";
}

function fecharW() {
  messageW[0].style.display = "none";
  location.href = '/accept';
}
/* FIM DO SUMIR COM FLASH-MESSAGE  */

/* CHAMADA A TELA DE LOAD */


var conteudo = document.getElementById('content-prin');
var loadind = document.getElementById("load");
document.body.addEventListener("load", (0,_load__WEBPACK_IMPORTED_MODULE_18__["default"])(conteudo, loadind));
/* FIM DA CHAMADA A TELA DE LOAD */

/* CHAMA A VALIDA????O DO FORMUL??RIO DE REGISTRO */

var formRegister = document.getElementById("form-register");

if (isUrl("/LoginOrSignUp")) {
  formRegister.addEventListener("submit", exeFormRegister());
}

function exeFormRegister() {
  var registerForm = new _validatedForm_ValidateFormRegister__WEBPACK_IMPORTED_MODULE_21__["default"](formRegister);
  registerForm.event();
}
/* FIM DA CHAMA A VALIDA????O DO FORMUL??RIO DE REGISTRO */

/* CHAMADA A VALIDA????O DO FORMUL??RIO DE LOGIN */


var formLogin = document.getElementById("form-login");

if (isUrl("/LoginOrSignUp")) {
  formLogin.addEventListener("submit", exeFormLogin());
}

function exeFormLogin() {
  var loginForm = new _validatedForm_ValidateFormLogin__WEBPACK_IMPORTED_MODULE_22__["default"](formLogin);
  loginForm.event();
}
/* FIM DA CHAMADA A VALIDA????O DO FORMUL??RIO DE LOGIN */

/* MENU DE NAVEGA????O */


var options = document.getElementById("options");
var nav = document.getElementById("navegacao");
var mobileMenu = document.getElementById("mobile_menu");
var mobileNav = new _mobileNav__WEBPACK_IMPORTED_MODULE_20__["default"](mobileMenu, nav, options);
new _nav__WEBPACK_IMPORTED_MODULE_19__["default"](nav, mobileMenu, mobileNav, options);
/* FIM DO MENU DE NAVEGA????O */

/* CARROSSEL */

/* MAIN SLIDER */

{
  var _controls$, _controls$2;

  var controls = document.querySelectorAll(".main-carousel-control");
  var itens = document.querySelectorAll(".main-slide");
  var maxItens = itens.length;
  var mainSlider = new _slider_MainSlider__WEBPACK_IMPORTED_MODULE_23__["default"](controls, itens, maxItens);
  var auto = setInterval(function () {
    mainSlider.movement();
  }, 5000);
  (_controls$ = controls[0]) === null || _controls$ === void 0 ? void 0 : _controls$.addEventListener("click", function (e) {
    clearInterval(auto);
    auto = setInterval(function () {
      mainSlider.movement();
    }, 5000);
  });
  (_controls$2 = controls[1]) === null || _controls$2 === void 0 ? void 0 : _controls$2.addEventListener("click", function (e) {
    clearInterval(auto);
    auto = setInterval(function () {
      mainSlider.movement();
    }, 5000);
  });
}
/* FIM MAIN SLIDER */

/* SLIDERS */

{
  var acaoAventuraControls = document.querySelectorAll(".first-carousel-control");
  var acaoAventuraScroll = document.getElementById("first-slider");
  var acaoAventuraItens = document.querySelectorAll(".first-slider-div");
  var acaoAventuraMaxItens = acaoAventuraItens.length;
  new _slider_BestSlider__WEBPACK_IMPORTED_MODULE_24__["default"](acaoAventuraControls, acaoAventuraItens, acaoAventuraScroll, acaoAventuraMaxItens);
  var terrorDramaControls = document.querySelectorAll(".second-carousel-control");
  var terrorDramaScroll = document.getElementById("second-slider");
  var terrorDramaItens = document.querySelectorAll(".second-slider-div");
  var terrorDramaMaxItens = terrorDramaItens.length;
  new _slider_BestSlider__WEBPACK_IMPORTED_MODULE_24__["default"](terrorDramaControls, terrorDramaItens, terrorDramaScroll, terrorDramaMaxItens);
}
/* SLIDERS */

/* FIM CARROSSEL */

/* VALIDA????O DE URL */

function isUrl(url) {
  if (document.location.href == url) {
    return true;
  }

  return false;
}
/* FIM DA VALIDA????O DE URL */
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map