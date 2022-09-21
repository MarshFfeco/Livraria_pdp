import "../css/erro.css"
import "../css/loginorsignup.css"
import "../css/navigation.css"

import * as img from "../img/image_erro.png";
import * as green from "../img/green.png";
import * as logo from "../img/logo.png";

import MudaCor from "./nav"
import MobileNav from "./mobileNav"

const nav = document.getElementById("navegacao")
const mudaCor = new MudaCor(nav);
mudaCor.init();

const mobileMenu = document.getElementById("mobile_menu");
const mobileNav = new MobileNav(mobileMenu)
mobileNav.init();


