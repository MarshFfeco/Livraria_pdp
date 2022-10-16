import "../css/principal.css"
import "../css/footer.css"
import "../css/load.css"
import "../css/scrollbar.css"
import "../css/erro.css"
import "../css/loginorsignup.css"
import "../css/navigation.css"
import "../css/home.css"
import "../css/book.css"
import "../css/adm.css"
import "../css/message.css"
import "../css/table.css"
import "../css/carrinho.css"

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

/* SUMIR COM FLASH-MESSAGE  */
const message = document.querySelectorAll(".position-message");
if(message.length > 0) {
    let button = document.getElementById("close");
    
    button.onclick = function() {fechar()};
}

function fechar() {
    message[0].style.display = "none";
}

/* FIM DO SUMIR COM FLASH-MESSAGE  */

/* CHAMADA A TELA DE LOAD */
document.body.addEventListener("load", exeAtivar(load()));

function exeAtivar(obj) {
    obj;
}
/* FIM DA CHAMADA A TELA DE LOAD */

/* CHAMA A VALIDAÇÃO DO FORMULÁRIO DE REGISTRO */
const formRegister = document.getElementById("form-register");

if(isUrl("http://localhost:3000/LoginOrSignUp")) {
    formRegister.addEventListener("submit", exeFormRegister());
}

function exeFormRegister() {
   const registerForm = new ValidatedFormRegister(formRegister);
   registerForm.event();
}
/* FIM DA CHAMA A VALIDAÇÃO DO FORMULÁRIO DE REGISTRO */

/* CHAMADA A VALIDAÇÃO DO FORMULÁRIO DE LOGIN */
const formLogin = document.getElementById("form-login");

if(isUrl("http://localhost:3000/LoginOrSignUp")) {
    formLogin.addEventListener("submit", exeFormLogin());
}

function exeFormLogin() {
    const loginForm = new ValidatedFormLogin(formLogin);
    loginForm.event();
}
/* FIM DA CHAMADA A VALIDAÇÃO DO FORMULÁRIO DE LOGIN */

/* MENU DE NAVEGAÇÃO */
const options = document.getElementById("options");
const nav = document.getElementById("navegacao");
const mobileMenu = document.getElementById("mobile_menu");
const mobileNav = new MobileNav(mobileMenu, nav, options)

const mudaCor = new MudaCor(nav, mobileMenu, mobileNav, options);
mudaCor.init();
/* FIM DO MENU DE NAVEGAÇÃO */

/* CARROSSEL */
/* MAIN SLIDER */
if(isUrl("http://localhost:3000/")) {
    const controls = document.querySelectorAll(".main-carousel-control");
    const itens = document.querySelectorAll(".main-slide");
    const maxItens = itens.length;

    const mainSlider = new MainSlider(controls, itens, maxItens);
    setInterval(function() {mainSlider.movement()}, 5000);
}
/* FIM MAIN SLIDER */

/* BEST SLIDER */
if(isUrl("http://localhost:3000/")) {
    const bestControls = document.querySelectorAll(".best-carousel-control");
    const bestScroll = document.getElementById("best-slider-limit");
    const bestItens = document.querySelectorAll(".best-slider");
    const bestMaxItens = bestItens.length;

    const bestSlider = new BestSlider(bestControls, bestItens, bestScroll, bestMaxItens);
}
/* FIM BEST SLIDER */

/* BEST AVALIABLE SLIDER */
if(isUrl("http://localhost:3000/")) {
    const bestAvaliableControls = document.querySelectorAll(".bestAvaliable-carousel-control");
    const bestAvaliableScroll = document.getElementById("bestAvaliable-slider-limit");
    const bestAvaliableItens = document.querySelectorAll(".bestAvaliable-slider");
    const bestAvaliableMaxItens = bestAvaliableItens.length;
    
    const bestAvaliableSlider = new BestSlider(bestAvaliableControls, bestAvaliableItens, bestAvaliableScroll, bestAvaliableMaxItens);
}
/* END BEST AVALIABLE SLIDER  */

/* FIM CARROSSEL */

/* VALIDAÇÃO DE URL */
function isUrl(url) {
    if(document.location.href == url) {
     return true;
    }

    return false;
}
/* FIM DA VALIDAÇÃO DE URL */