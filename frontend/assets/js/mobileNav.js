//MENU ROLAGEM
export default function MobileNavBar(mobileMenu, nav){
    this.mobileMenu = mobileMenu; 
    this.nav = nav

    const active = "active";

    this.init = function() {
        mobileMenu.addEventListener("click", e => {
            const options = document.getElementById("options");
    
            this.verifyClass(options);
        });
    };

    this.verifyClass = function(options) {
        const button = mobileMenu.getElementsByTagName("button");
        const buttonCssActive = "background-color: var(--main-color);  border-radius: 50%;";
        const buttonCssDisabled = "background-color: white;  border-radius: 0;";

        const path = mobileMenu.getElementsByTagName("path");
        const pathCssActive = "fill: white;";
        const pathCssDisabled = "fill: var(--main-color);";

        const optionCssActive = "visible";
        const optionCssDisable = "hidden"; 
        
        if(options.classList.contains("active")) {
            options.classList.remove("active");

            this.changeCss(button, path, buttonCssDisabled, pathCssDisabled, optionCssDisable);
            nav.style.backgroundColor = "#fbfbfbbf";
            return
        }

        options.classList.add(active);

        this.changeCss(button, path, buttonCssActive, pathCssActive, optionCssActive);
        nav.style.backgroundColor = "#ffffff";

    };

    this.changeCss = function(button, path, buttonCss, pathCss, optionsCss) {
        button[0].style.cssText = buttonCss;
        path[0].style.cssText = pathCss;

        options.style.visibility = optionsCss;
    }
}