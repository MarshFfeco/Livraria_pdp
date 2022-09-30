export default class BestSlide {
    constructor(controls, itens, scroll, maxItem) {
        this.controls = controls;
        this.itens = itens;
        this.scroll = scroll;
        this.moveScroll = 0;
        this.maxItem = maxItem;

        this.init();
    }

    init() {
        this.controlle();
    };

    controlle() {
        this.controls.forEach((control) => {
            this.event(control);
        });
    };

    event(control) {
        control.addEventListener("click", () => {
            const isLeft = control.classList.contains("left");

            if(isLeft) { this.moveScroll -= this.scroll.offsetWidth; } 
                else { this.moveScroll += this.scroll.offsetWidth; }

            if(isLeft && this.moveScroll < 0){ this.moveScroll = 3416;  }
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