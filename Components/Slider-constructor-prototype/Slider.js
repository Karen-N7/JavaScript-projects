const query = document.querySelector.bind(document);
const queryAll = document.querySelectorAll.bind(document);

function Slider({ items, output, outputImage, arrows, container }) {
    this.items = items;
    this.output = output;
    this.outputImage = outputImage;
    this.container = container;
    this.arrows = arrows;
    this.src = null;
    this.index = 0;
}

Slider.prototype = {
    showImage() {
        this.output.classList.add("show");
    },
    hideImage() {
        this.output.classList.remove("show");
    },
    getActiveItem() {
        return this.container.querySelector(".active");
    },
    setActiveItem(item) {
        if (item) item.classList.add("active");
    },
    removeActiveItem(item) {
        if (item) item.classList.remove("active");
    },
    setIndex(number) {
        this.index += number;
        if (this.index < 0) {
            this.index = this.items.length - 1;
        } else if (this.index > this.items.length - 1) {
            this.index = 0;
        }
    },
    getImageSrc() {
        this.src = this.getActiveItem().querySelector("img").src.replace("small", "large");
    },
    setImageSrc() {
        this.output.querySelector("img").src = this.src;
    },
    setEvents() {
        this.items.forEach((item, index) => {
            item.addEventListener("click", () => {
                this.index = index;
                this.removeActiveItem(this.getActiveItem());
                this.setActiveItem(item);
                this.getImageSrc();
                this.setImageSrc();
            });
        });

        this.arrows.forEach((arrow) => {
            arrow.addEventListener("click", (e) => {
                e.stopPropagation();
                if (arrow.classList.contains("arrow-left")) {
                    this.setIndex(-1);
                } else {
                    this.setIndex(1);
                }
                this.removeActiveItem(this.getActiveItem());
                this.setActiveItem(this.items[this.index]);
                this.getImageSrc();
                this.setImageSrc();
            });
        });
        this.output.addEventListener("click", () => this.hideImage());
        this.outputImage.addEventListener("load", () => this.showImage());
    },
};

if (query(".portfolio")) {
    const state_1 = {
        container: query(".portfolio .list-group"),
        items: queryAll(".portfolio .list-group-item"),
        output: query(".portfolio .output"),
        outputImage: query(".portfolio .output img"),
        arrows: queryAll(".portfolio .output .arrow"),
    };
    const slide_1 = new Slider(state_1);
    slide_1.setEvents();
}
