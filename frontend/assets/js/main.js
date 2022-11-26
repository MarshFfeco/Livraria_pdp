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
import "../css/carrinho.css"
import "../css/post.css"
import "../css/search.css"
import "../css/contrato.css"

import * as img from "../img/image_erro.png";
import * as logo from "../img/logo.png";
import * as report from "../img/report.png";

import load from "./load"
import MudaCor from "./nav"
import MobileNav from "./mobileNav"
import ValidatedFormRegister from "./validatedForm/ValidateFormRegister"
import ValidatedFormLogin from "./validatedForm/ValidateFormLogin"
import MainSlider from "./slider/MainSlider"
import BestSlider from "./slider/BestSlider"

/* SUMIR COM FLASH-MESSAGE  */
const message = document.querySelectorAll(".position-message");
const messageW = document.querySelectorAll(".warning-message");
if(message.length > 0) {
    let button = document.getElementById("close");
    button.onclick = function() {fechar()};
}

if(messageW.length > 0) {
    let button = document.getElementById("closeW");
    button.onclick = function() {fecharW()};
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
const conteudo = document.getElementById('content-prin');
const loadind = document.getElementById("load");

document.body.addEventListener("load", load(conteudo, loadind));
/* FIM DA CHAMADA A TELA DE LOAD */

/* CHAMA A VALIDAÇÃO DO FORMULÁRIO DE REGISTRO */
const formRegister = document.getElementById("form-register");

if(isUrl("/LoginOrSignUp")) {
    formRegister.addEventListener("submit", exeFormRegister());
}

function exeFormRegister() {
   const registerForm = new ValidatedFormRegister(formRegister);
   registerForm.event();
}
/* FIM DA CHAMA A VALIDAÇÃO DO FORMULÁRIO DE REGISTRO */

/* CHAMADA A VALIDAÇÃO DO FORMULÁRIO DE LOGIN */
const formLogin = document.getElementById("form-login");

if(isUrl("/LoginOrSignUp")) {
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

new MudaCor(nav, mobileMenu, mobileNav, options);

/* FIM DO MENU DE NAVEGAÇÃO */

/* CARROSSEL */
/* MAIN SLIDER */
{
    const controls = document.querySelectorAll(".main-carousel-control");
    const itens = document.querySelectorAll(".main-slide");
    const maxItens = itens.length;

    const mainSlider = new MainSlider(controls, itens, maxItens);

    var auto = setInterval(function() {mainSlider.movement()}, 5000);

    controls[0]?.addEventListener("click", e => { 
        clearInterval(auto);
        auto = setInterval(function() {mainSlider.movement()}, 5000);
     });
     controls[1]?.addEventListener("click", e => { 
        clearInterval(auto);
        auto = setInterval(function() {mainSlider.movement()}, 5000);
     });
}
/* FIM MAIN SLIDER */

/* SLIDERS */
{
    const acaoAventuraControls = document.querySelectorAll(".first-carousel-control");
    const acaoAventuraScroll = document.getElementById("first-slider");
    const acaoAventuraItens = document.querySelectorAll(".first-slider-div");
    const acaoAventuraMaxItens = acaoAventuraItens.length;

    new BestSlider(acaoAventuraControls, acaoAventuraItens, acaoAventuraScroll, acaoAventuraMaxItens);

    const terrorDramaControls = document.querySelectorAll(".second-carousel-control");
    const terrorDramaScroll = document.getElementById("second-slider");
    const terrorDramaItens = document.querySelectorAll(".second-slider-div");
    const terrorDramaMaxItens = terrorDramaItens.length;

    new BestSlider(terrorDramaControls, terrorDramaItens, terrorDramaScroll, terrorDramaMaxItens);
}
/* SLIDERS */

/* FIM CARROSSEL */

/* VALIDAÇÃO DE URL */
function isUrl(url) {
    if(document.location.href == url) {
     return true;
    }

    return false;
}
/* FIM DA VALIDAÇÃO DE URL */








