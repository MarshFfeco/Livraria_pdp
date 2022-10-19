import Slider from"./Slider";

export default class BestSlide extends Slider {
    constructor(controls, itens, scroll, maxItem) {
        super(controls, itens, maxItem)

        this.itens = itens;
        this.scroll = scroll;
        this.moveScroll = 0;
    }


    event(control) {
        var firstItem = this.itens[0].getBoundingClientRect().left + this.itens[0].offsetWidth;
        var lastItem = this.itens[this.itens.length - 1].getBoundingClientRect().left + this.itens[this.itens.length - 1].offsetWidth;
        
        control.addEventListener("click", () => {
            const isLeft = control.classList.contains("left");

            if(isLeft) { this.moveScroll -= this.scroll.offsetWidth; } 
            else { this.moveScroll += this.scroll.offsetWidth; }

            if(!isLeft && this.moveScroll > lastItem) { this.moveScroll = firstItem; }
            if(isLeft && this.moveScroll < firstItem) { this.moveScroll = lastItem; }
        
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