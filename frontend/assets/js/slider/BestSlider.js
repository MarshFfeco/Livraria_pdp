import Slider from"./Slider";

export default class BestSlide extends Slider {
    constructor(controls, itens, scroll, maxItem) {
        super(controls, itens, maxItem)

        this.itens = itens;
        this.scroll = scroll;
        this.moveScroll = 0;
        this.currentItem = 0;

    }

    controlle() {
        this.controls.forEach((control) => {
            this.verifyWidth(control);
        });
    };

    verifyWidth(control) {
        control.addEventListener("click", () => {
            var windowWidth = window.innerWidth;

            if(windowWidth <= 470) {
                this.eventCell(control);
            } else {
                this.event(control);
            };
        });
    }
    
    event(control) {
        let firstItem = this.itens[0].getBoundingClientRect().left;
        let lastItem = this.itens[this.itens.length - 1].getBoundingClientRect().left;

        const isLeft = control.classList.contains("left");

        if(isLeft) { 
            this.moveScroll -= this.scroll.offsetWidth; 
        } 
        else { 
            this.moveScroll += this.scroll.offsetWidth; 
        }  

        if(!isLeft && this.moveScroll > lastItem) { this.moveScroll = firstItem; }
        if(isLeft && this.scroll.scrollLeft == 0) { this.moveScroll = lastItem; }
    
        this.movementScroll();
    }

    eventCell(control) {
        const isLeft = control.classList.contains("left");
        if(isLeft) {
            this.currentItem -= 1;
        } else {
            this.currentItem += 1;
        }

        this.verifyCurrentItem()

        this.addOrRemove();
    }

    addOrRemove() {
        this.itens.forEach(item => item.classList.remove("current-item"));

        this.itens[this.currentItem].scrollIntoView({
            inlile: 'center',
            behavior: "smooth",
        });

        this.itens[this.currentItem].classList.add("current-item");
    }

    movementScroll() {
        this.scroll.scrollTo({
            left: this.moveScroll,
            behavior: "smooth",
        });
    }
}