export default class ChangeColor {
    constructor(nav, mobileMenu, mobileNav, options) {
        this.nav = nav;
        //MOBILE
        this.mobileMenu = mobileMenu;
        this.mobileNav = mobileNav;
        this.options = options;
        this.searchButton = document.getElementById("buttonSearchOpen");

        this.init();
    }

    //CHAMA AS FUNÇÕES
    init(){
        this.validationWidth();
        this.event();
    };

    /* PESQUISAR */
    search() {
        const activeSearch = options.querySelector("#search");
        const activeSearchVisible = options.querySelector(".input-search");

        activeSearch.classList.toggle("active-search");
        activeSearchVisible.classList.toggle("active-search-invisible");
    }
    /* FIM DO PESQUISAR */

    event() {
        window.addEventListener("scroll", e => {
            this.change();
        });
        window.addEventListener("resize", e => {
            this.change();
            this.validationWidth();
        })
        this.searchButton.addEventListener("click", e => {
            this.search();
        })
    };

    validationWidth() {
        if(window.innerWidth <= 999) {
            this.mobileNav.init();
            return;
        };

        this.options.style.visibility = "visible";
    };
    
    //MUDA A COR DA NAV
    change(){
        const result = this.verifiYPosition();

        if(!result != 0) {
            this.nav.style.backgroundColor = "#ffffff";
            return;
        } 

        this.nav.style.backgroundColor = "#fbfbfbbf";
    };

    //VERIFICA SE DESCEU A TELA
    verifiYPosition(){
        const canChange = this.canChange();

        if(!canChange) {
            return 0;
        }

        const top = window.scrollY;
        return top;
    };

    //VERIFICA SE O MOBILE MENU ESTÁ ATIVADO
    canChange() {
        const options = document.getElementById("options");

        if(options.classList.contains("active")) {
            this.nav.style.backgroundColor = "#fbfbfbbf";
            return false;
        } 

        return true;
    };
};

