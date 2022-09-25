//MENU ROLAGEM
export default function MobileNavBar(mobileMenu, nav, options){
    this.mobileMenu = mobileMenu; 
    this.nav = nav

    this.options = options;

    const active = "active";

    this.init = function() {
        this.options.style.visibility = "hidden";
        mobileMenu.addEventListener("click", () => {
            this.verifyClass();
        });
    };

    this.verifyClass = function() {
        const button = mobileMenu.getElementsByTagName("button");
        const buttonCssActive = "background-color: var(--main-color);  border-radius: 50%;";
        const buttonCssDisabled = "background-color: none;  border-radius: 0;";

        const path = mobileMenu.getElementsByTagName("path");
        const pathCssActive = "fill: white;";
        const pathCssDisabled = "fill: var(--main-color);";

        const optionCssActive = "visible";
        const optionCssDisable = "hidden"; 
        
        if(this.options.classList.contains("active")) {
            this.options.classList.remove("active");

            this.changeCss(button, path, buttonCssDisabled, pathCssDisabled, optionCssDisable);
            this.nav.style.backgroundColor = "#fbfbfbbf";
            return
        }

        this.options.classList.add(active);

        this.changeCss(button, path, buttonCssActive, pathCssActive, optionCssActive);
        this.nav.style.backgroundColor = "#ffffff";
    };

    this.changeCss = function(button, path, buttonCss, pathCss, optionsCss) {
        button[0].style.cssText = buttonCss;
        path[0].style.cssText = pathCss;

        this.options.style.visibility = optionsCss;
    }
}