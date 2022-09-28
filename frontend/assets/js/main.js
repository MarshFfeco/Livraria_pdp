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


import Renderizar from "./optimization/render"
import load from "./load"
import MudaCor from "./nav"
import MobileNav from "./mobileNav"
import ValidatedFormRegister from "./validatedForm/ValidateFormRegister"
import ValidatedFormLogin from "./validatedForm/ValidateFormLogin"


/*
//OTIMIZADOR DE TELA
const far = document.querySelectorAll("#content-prin .render, #content-prin .noRender");
const renderize = new Renderizar(far);

window.addEventListener("DOMContentLoaded", e => {
    renderize.canSee();
    
    let canVerifyImg = true;
    for(let i = 0; i < far.length; i++) {
        if(canVerifyImg) {
             if((far[i].getBoundingClientRect().top < window.innerHeight) && !(far[i].getBoundingClientRect().bottom < 0)) {
                 far[i].classList.replace("noRender", "render");
                 continue;
             } else {
                 canVerifyImg = false;
             }
         }

         if(!canVerifyImg) {
             far[i].classList.replace("render", "noRender");
         }
     }
     canVerifyImg = true;
})
renderize.init();
*/

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
const controls = document.querySelectorAll(".main-carousel-control");


let currentItem = 0;

const itens = document.querySelectorAll(".slide");
const maxItens = itens.length;

console.log(maxItens);

controls.forEach((control) => {
    control.addEventListener("click", e => {
        const isLeft = control.classList.contains("left");

        if(isLeft) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }

        if(currentItem >= maxItens) {
            currentItem = 0;
        }
        if(currentItem < 0) {
            currentItem = maxItens - 1;
        }

        itens.forEach(item => item.classList.remove("current-item"));

        itens[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth",
        });

        itens[currentItem].classList.add("current-item");

    });
})



