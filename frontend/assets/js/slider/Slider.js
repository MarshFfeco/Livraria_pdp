export default class Slider {
    constructor(controls, itens, maxItem) {
        this.controls = controls;
        this.itens = itens;
        this.maxItem = maxItem;
        this.currentItem = 0;

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
}