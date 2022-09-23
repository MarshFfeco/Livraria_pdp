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

import Carregando from "./load"
import MudaCor from "./nav"
import MobileNav from "./mobileNav"
import form from "./validateForm"

const conteudo = document.getElementById('content-prin');
const loading = document.getElementById("load");
const load = new Carregando(conteudo, loading);
load;

const nav = document.getElementById("navegacao")
const mudaCor = new MudaCor(nav);
mudaCor.init();

const mobileMenu = document.getElementById("mobile_menu");
const mobileNav = new MobileNav(mobileMenu)
mobileNav.init();

const formu = new form();
formu.init();



