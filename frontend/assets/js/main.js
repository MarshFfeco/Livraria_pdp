import "../css/principal.css"
import "../css/footer.css"
import "../css/load.css"
import "../css/scrollbar.css"
import "../css/erro.css"
import "../css/loginorsignup.css"
import "../css/navigation.css"

import * as img from "../img/image_erro.png";
import * as green from "../img/green.png";
import * as logo from "../img/logo.png";

import load from "./load"
import MudaCor from "./nav"
import MobileNav from "./mobileNav"
import ValidatedFormRegister from "./validatedForm/ValidateFormRegister"
import ValidatedFormLogin from "./validatedForm/ValidateFormLogin"

const nav = document.getElementById("navegacao")
const mudaCor = new MudaCor(nav);
mudaCor.init();

const mobileMenu = document.getElementById("mobile_menu");
const mobileNav = new MobileNav(mobileMenu, nav)
mobileNav.init();

//CHAMA A TELA DE LOAD
document.body.addEventListener("load", exeCarregando());

function exeCarregando() {
    load();
}

//CHAMA A VALIDAÇÃO DO FORMULÁRIO DE REGISTRO
function exeFormRegister() {
    const formRegister = document.getElementById("form-register");
    const registerForm = new ValidatedFormRegister(formRegister);
    registerForm;
}

//CHAMA A VALIDAÇÃO DO FORMULÁRIO DE LOGIN
function exeFormLogin() {
    const formLogin = document.getElementById("form-login");
const loginForm = new ValidatedFormLogin(formLogin);
loginForm;
}


