//MENU ROLAGEM
export default function MobileNavBar(mobileMenu){
    this.mobileMenu = mobileMenu; 
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
        
        if(options.classList.contains("active")) {
            options.classList.remove("active");

            this.changeCss(button, path, buttonCssDisabled, pathCssDisabled);
            return
        }

        options.classList.add(active);

        this.changeCss(button, path, buttonCssActive, pathCssActive);

    };

    this.changeCss = function(button, path, buttonCss, pathCss) {
        button[0].style.cssText = buttonCss;
        path[0].style.cssText = pathCss;
    }
}