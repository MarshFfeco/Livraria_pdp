export default function ChangeColor(nav) {
    this.nav = nav;

    //CHAMA AS FUNÇÕES
    this.init = function(){
        window.addEventListener("scroll", e => {
            this.change();
        });
        window.addEventListener("resize", e => {
            this.change();
        })
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
