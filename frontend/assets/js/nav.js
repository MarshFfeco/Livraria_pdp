export default function ChangeColor(nav, mobileMenu, mobileNav, options) {
    this.nav = nav;

    //MOBILE
    this.mobileMenu = mobileMenu;
    this.mobileNav = mobileNav;
    this.options = options;

    //CHAMA AS FUNÇÕES
    this.init = function(){
        this.validationWidth();
        this.event();
    };

    this.event = function() {
        window.addEventListener("scroll", e => {
            this.change();
        });
        window.addEventListener("resize", e => {
            this.change();
            this.validationWidth();
        })
    };

    this.validationWidth = function() {
        if(window.innerWidth <= 999) {
            this.mobileNav.init();
            return;
        };

        this.options.style.visibility = "visible";
    };
    
    //MUDA A COR DA NAV
    this.change = function(){
        const result = this.verifiYPosition();

        if(!result != 0) {
            nav.style.backgroundColor = "#ffffff";
            return;
        } 

        nav.style.backgroundColor = "#fbfbfbbf";
    };

    //VERIFICA SE DESCEU A TELA
    this.verifiYPosition = function(){
        const canChange = this.canChange();

        if(!canChange) {
            return 0;
        }

        const top = window.scrollY;
        return top;
    };

    //VERIFICA SE O MOBILE MENU ESTÁ ATIVADO
    this.canChange = function() {
        const options = document.getElementById("options");

        if(options.classList.contains("active")) {
            nav.style.backgroundColor = "#fbfbfbbf";
            return false;
        } 

        return true;
    };
};

//const total = document.getElementById("total");
console.log(window.addEventListener("click", e => console.log(e)));
/*
setInterval(function () {
    element.innerHTML += "Hello"
}, 1000);
*/