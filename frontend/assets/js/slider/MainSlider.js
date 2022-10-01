import Slider from "./Slider"

export default class MainSlider extends Slider {
    constructor(controls, itens, maxItem) {
        super(controls, itens, maxItem);
    }

    event(control) {
        control.addEventListener("click", () => {
            const isLeft = control.classList.contains("left");

            if(isLeft) {
                this.currentItem -= 1;
            } else {
                this.currentItem += 1;
            }

            if(this.currentItem > this.maxItem - 1) {
                this.currentItem = 0;
            }

            if(this.currentItem < 0) {
                this.currentItem = this.maxItem - 1;
            }

            this.addOrRemove();
        });
    }

    addOrRemove() {
        this.itens.forEach(item => item.classList.remove("current-item"));
        this.itens[this.currentItem].classList.add("current-item");
    }
}