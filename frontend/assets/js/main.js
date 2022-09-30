import "../css/principal.css"
import "../css/footer.css"
import "../css/load.css"
import "../css/scrollbar.css"
import "../css/erro.css"
import "../css/loginorsignup.css"
import "../css/navigation.css"
import "../css/home.css"

import * as img from "../img/image_erro.png";
import * as green from "../img/green.png";
import * as logo from "../img/logo.png";
import * as gulliver from "../img/books/v_guliver.jpg"


import load from "./load"
import MudaCor from "./nav"
import MobileNav from "./mobileNav"
import ValidatedFormRegister from "./validatedForm/ValidateFormRegister"
import ValidatedFormLogin from "./validatedForm/ValidateFormLogin"
import MainSlider from "./slider/MainSlider"
import BestSlider from "./slider/BestSlider"

//CHAMA A TELA DE LOAD
document.body.addEventListener("load", exeAtivar(load()));

function exeAtivar(obj) {
    obj;
}

//CHAMA A VALIDAÇÃO DO FORMULÁRIO DE REGISTRO
const formRegister = document.getElementById("form-register");

if(document.location.href == "http://localhost:3000/LoginOrSignUp") {
    formRegister.addEventListener("submit", exeFormRegister());
}

function exeFormRegister() {

   const registerForm = new ValidatedFormRegister(formRegister);
   registerForm.event();
}

//CHAMA A VALIDAÇÃO DO FORMULÁRIO DE LOGIN
const formLogin = document.getElementById("form-login");

if(document.location.href == "http://localhost:3000/LoginOrSignUp") {
    formLogin.addEventListener("submit", exeFormLogin());
}

function exeFormLogin() {
    const loginForm = new ValidatedFormLogin(formLogin);
    loginForm.event();
}

//CHAMADA DE CLASSE E OBJETOS
const options = document.getElementById("options");
const nav = document.getElementById("navegacao");
const mobileMenu = document.getElementById("mobile_menu");
const mobileNav = new MobileNav(mobileMenu, nav, options)

const mudaCor = new MudaCor(nav, mobileMenu, mobileNav, options);
mudaCor.init();

/* CARROSSEL */
/* MAIN SLIDER */
const controls = document.querySelectorAll(".main-carousel-control");
const itens = document.querySelectorAll(".main-slide");
const maxItens = itens.length;

const mainSlider = new MainSlider(controls, itens, maxItens);
/* FIM MAIN SLIDER */

/* BEST SLIDER */
const bestControls = document.querySelectorAll(".best-carousel-control");
const bestScroll = document.querySelector("#best-slider-limit");
const bestItens = document.querySelectorAll(".best-slider");
const bestMaxItens = bestItens.length;

const bestSlider = new BestSlider(bestControls, bestItens, bestScroll, bestMaxItens);
/* FIM BEST SLIDER */

/* FIM CARROSSEL */


