export default function ChangeColor(nav) {
    this.nav = nav;
    
    const limit = 999;

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

    //VERIFICA O TAMANHO DA TELA
    this.canChange = function() {
        if(window.innerWidth > limit) return true

        return false;
    };
};
