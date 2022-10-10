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
function load() {
  var conteudo = document.getElementById('content-prin');
  var load = document.getElementById("load"); //MUDANDO OS DISPLAY QUANDO CARREGADO

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

  this.init = function () {
    var _this = this;

    this.options.style.visibility = "hidden";
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
function ChangeColor(nav, mobileMenu, mobileNav, options) {
  this.nav = nav; //MOBILE

  this.mobileMenu = mobileMenu;
  this.mobileNav = mobileNav;
  this.options = options; //CHAMA AS FUNÇÕES

  this.init = function () {
    this.validationWidth();
    this.event();
  };

  this.event = function () {
    var _this = this;

    window.addEventListener("scroll", function (e) {
      _this.change();
    });
    window.addEventListener("resize", function (e) {
      _this.change();

      _this.validationWidth();
    });
  };

  this.validationWidth = function () {
    if (window.innerWidth <= 999) {
      this.mobileNav.init();
      return;
    }

    ;
    this.options.style.visibility = "visible";
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
  }; //VERIFICA SE O MOBILE MENU ESTÁ ATIVADO


  this.canChange = function () {
    var options = document.getElementById("options");

    if (options.classList.contains("active")) {
      nav.style.backgroundColor = "#fbfbfbbf";
      return false;
    }

    return true;
  };
}
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
    _this.scroll = scroll;
    _this.moveScroll = 0;
    return _this;
  }

  _createClass(BestSlide, [{
    key: "event",
    value: function event(control) {
      var _this2 = this;

      control.addEventListener("click", function () {
        var isLeft = control.classList.contains("left");

        if (isLeft) {
          _this2.moveScroll -= _this2.scroll.offsetWidth;
        } else {
          _this2.moveScroll += _this2.scroll.offsetWidth;
        }

        if (isLeft && _this2.moveScroll < 0) {
          _this2.moveScroll = 3416;
        }

        if (!isLeft && _this2.moveScroll > 3416) {
          _this2.moveScroll = 0;
        }

        _this2.movementScroll();
      });
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

        if (_this.currentItem > _this.maxItem - 1) {
          _this.currentItem = 0;
        }

        if (_this.currentItem < 0) {
          _this.currentItem = _this.maxItem - 1;
        }

        _this.addOrRemove();
      });
    }
  }, {
    key: "addOrRemove",
    value: function addOrRemove() {
      this.itens.forEach(function (item) {
        return item.classList.remove("current-item");
      });
      this.itens[this.currentItem].classList.add("current-item");
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

        if (_this2.currentItem > _this2.maxItem - 1) {
          _this2.currentItem = 0;
        }

        if (_this2.currentItem < 0) {
          _this2.currentItem = _this2.maxItem - 1;
        }

        _this2.addOrRemove();
      });
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
      var pass = this.form.getElementsByTagName("input")[2];
      var rePass = this.form.getElementsByTagName("input")[3];

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

    this.form = formulario; //this.event();
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
          var label = input.previousElementSibling.innerHTML;

          if (!input.value) {
            this.makeErro(input, "Campo ".concat(label, " vazio!"));
            valid = false;
          }

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
      var pass = this.form.getElementsByTagName("input")[1];

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

/***/ "./frontend/assets/img/books/v_guliver.jpg":
/*!*************************************************!*\
  !*** ./frontend/assets/img/books/v_guliver.jpg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/v_guliver.jpg");

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
/* harmony import */ var _img_image_erro_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/image_erro.png */ "./frontend/assets/img/image_erro.png");
/* harmony import */ var _img_green_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/green.png */ "./frontend/assets/img/green.png");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/logo.png */ "./frontend/assets/img/logo.png");
/* harmony import */ var _img_books_v_guliver_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../img/books/v_guliver.jpg */ "./frontend/assets/img/books/v_guliver.jpg");
/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./load */ "./frontend/assets/js/load.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nav */ "./frontend/assets/js/nav.js");
/* harmony import */ var _mobileNav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mobileNav */ "./frontend/assets/js/mobileNav.js");
/* harmony import */ var _validatedForm_ValidateFormRegister__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./validatedForm/ValidateFormRegister */ "./frontend/assets/js/validatedForm/ValidateFormRegister.js");
/* harmony import */ var _validatedForm_ValidateFormLogin__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./validatedForm/ValidateFormLogin */ "./frontend/assets/js/validatedForm/ValidateFormLogin.js");
/* harmony import */ var _slider_MainSlider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./slider/MainSlider */ "./frontend/assets/js/slider/MainSlider.js");
/* harmony import */ var _slider_BestSlider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./slider/BestSlider */ "./frontend/assets/js/slider/BestSlider.js");






















/* SUMIR COM FLASH-MESSAGE  */

var message = document.querySelectorAll(".position-message");

if (message.length > 0) {
  var button = document.getElementById("close");

  button.onclick = function () {
    fechar();
  };
}

function fechar() {
  message[0].style.display = "none";
}
/* FIM DO SUMIR COM FLASH-MESSAGE  */

/* CHAMADA A TELA DE LOAD */


document.body.addEventListener("load", exeAtivar((0,_load__WEBPACK_IMPORTED_MODULE_15__["default"])()));

function exeAtivar(obj) {
  obj;
}
/* FIM DA CHAMADA A TELA DE LOAD */

/* CHAMA A VALIDAÇÃO DO FORMULÁRIO DE REGISTRO */


var formRegister = document.getElementById("form-register");

if (isUrl("http://localhost:3000/LoginOrSignUp")) {
  formRegister.addEventListener("submit", exeFormRegister());
}

function exeFormRegister() {
  var registerForm = new _validatedForm_ValidateFormRegister__WEBPACK_IMPORTED_MODULE_18__["default"](formRegister);
  registerForm.event();
}
/* FIM DA CHAMA A VALIDAÇÃO DO FORMULÁRIO DE REGISTRO */

/* CHAMADA A VALIDAÇÃO DO FORMULÁRIO DE LOGIN */


var formLogin = document.getElementById("form-login");

if (isUrl("http://localhost:3000/LoginOrSignUp")) {
  formLogin.addEventListener("submit", exeFormLogin());
}

function exeFormLogin() {
  var loginForm = new _validatedForm_ValidateFormLogin__WEBPACK_IMPORTED_MODULE_19__["default"](formLogin);
  loginForm.event();
}
/* FIM DA CHAMADA A VALIDAÇÃO DO FORMULÁRIO DE LOGIN */

/* MENU DE NAVEGAÇÃO */


var options = document.getElementById("options");
var nav = document.getElementById("navegacao");
var mobileMenu = document.getElementById("mobile_menu");
var mobileNav = new _mobileNav__WEBPACK_IMPORTED_MODULE_17__["default"](mobileMenu, nav, options);
var mudaCor = new _nav__WEBPACK_IMPORTED_MODULE_16__["default"](nav, mobileMenu, mobileNav, options);
mudaCor.init();
/* FIM DO MENU DE NAVEGAÇÃO */

/* CARROSSEL */

/* MAIN SLIDER */

if (isUrl("http://localhost:3000/")) {
  var controls = document.querySelectorAll(".main-carousel-control");
  var itens = document.querySelectorAll(".main-slide");
  var maxItens = itens.length;
  var mainSlider = new _slider_MainSlider__WEBPACK_IMPORTED_MODULE_20__["default"](controls, itens, maxItens);
}
/* FIM MAIN SLIDER */

/* BEST SLIDER */


if (isUrl("http://localhost:3000/")) {
  var bestControls = document.querySelectorAll(".best-carousel-control");
  var bestScroll = document.getElementById("best-slider-limit");
  var bestItens = document.getElementById("best-slider");
  var bestMaxItens = bestItens.length;
  var bestSlider = new _slider_BestSlider__WEBPACK_IMPORTED_MODULE_21__["default"](bestControls, bestItens, bestScroll, bestMaxItens);
}
/* FIM BEST SLIDER */

/* BEST AVALIABLE SLIDER */


if (isUrl("http://localhost:3000/")) {
  var bestAvaliableControls = document.querySelectorAll(".bestAvaliable-carousel-control");
  var bestAvaliableScroll = document.getElementById("bestAvaliable-slider-limit");
  var bestAvaliableItens = document.getElementById("bestAvaliable-slider");
  var bestAvaliableMaxItens = bestAvaliableItens.length;
  var bestAvaliableSlider = new _slider_BestSlider__WEBPACK_IMPORTED_MODULE_21__["default"](bestAvaliableControls, bestAvaliableItens, bestAvaliableScroll, bestAvaliableMaxItens);
}
/* END BEST AVALIABLE SLIDER  */

/* FIM CARROSSEL */

/* VALIDAÇÃO DE URL */


function isUrl(url) {
  if (document.location.href == url) {
    return true;
  }

  return false;
}
/* FIM DA VALIDAÇÃO DE URL */
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map