export default function Rederizar(img) {
    this.init = function() {
        this.event();
    }
    this.event = function() {
        window.addEventListener("scroll", () => {
            this.canSee();
        });
    }

    this.canSee = function() {  
        let canVerifyImg = true;

        for(let i = 0; i < img.length; i++) {
           if(canVerifyImg) {
                if((img[i].getBoundingClientRect().top < window.innerHeight) /*&& !(img[i].getBoundingClientRect().bottom < 0)*/) {
                    img[i].classList.replace("noRender", "render");
                    //console.log(i + " render verificado");
                    continue;
                } else {
                    canVerifyImg = false;
                    //console.log("sem verificação")
                }
            }

            if(!canVerifyImg) {
                img[i].classList.replace("render", "noRender");
                //console.log(i + " render sem verificar");
            }
        }
    }
}