import Slider from"./Slider";

export default class BestSlide extends Slider {
    constructor(controls, itens, scroll, maxItem) {
        super(controls, itens, maxItem)

        this.itens = itens;
        this.scroll = scroll;
        this.moveScroll = 0;
    }

    event(control) {
        control.addEventListener("click", () => {
            const isLeft = control.classList.contains("left");

            if(isLeft) { this.moveScroll -= this.scroll.offsetWidth; } 
                else { this.moveScroll += this.scroll.offsetWidth; }

            if(isLeft && this.moveScroll < -870) { this.moveScroll = 3416; }
            if(!isLeft && this.moveScroll > 3416) { this.moveScroll = 0; }
        
            this.movementScroll();
        });
    }

    movementScroll() {
        this.scroll.scrollTo({
            left: this.moveScroll,
            behavior: "smooth",
        });
    }
}