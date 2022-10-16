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

            this.verifyCurrentItem()

            this.addOrRemove();
        });
    }

    movement() {
        this.currentItem += 1;

        this.verifyCurrentItem();

        this.addOrRemove();
    }

    addOrRemove() {
        this.itens.forEach(item => item.classList.remove("current-item"));
        this.itens[this.currentItem].classList.add("current-item");
    }
}