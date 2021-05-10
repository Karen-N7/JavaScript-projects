const Carousel = (function () {
    const query = document.querySelector.bind(document),
        queryAll = document.querySelectorAll.bind(document),
        log = console.log;

    const setDefaultPosition = ({ content }) => ({
        defaultPosition() {
            content.style.left = -this.linkWidth() + 'px';
        },
    });

    const createClones = ({ content }) => ({
        clones() {
            let firstClone = content.firstElementChild.cloneNode(true),
                secondClone = content.children[1].cloneNode(true),
                thirdClone = content.children[2].cloneNode(true),
                lastClone = content.lastElementChild.cloneNode(true),
                clones = [firstClone, secondClone, thirdClone];
            clones.forEach((clone) => {
                content.appendChild(clone);
            });
            content.insertBefore(lastClone, this.firstLink);
        },
    });

    const setDragOptions = ({ content }) => ({
        dragStart(e) {
            log('start');
            this.offsetLeft_1 = content.offsetLeft;
            this.clientX_1 = e.clientX;
            document.onmousemove = this.dragAction.bind(this);
            document.onmouseup = this.dragEnd.bind(this);
            content.style.cursor = 'grabbing';
        },
        dragAction(e) {
            log('action');
            this.clientX_2 = e.clientX;
            this.clientX_count = this.clientX_1 - this.clientX_2;
            this.clientX_1 = e.clientX;
            content.style.left = content.offsetLeft - this.clientX_count + 'px';
        },
        dragEnd() {
            log('end');
            this.offsetLeft_2 = content.offsetLeft;
            this.offsetLeft_count = this.offsetLeft_2 - this.offsetLeft_1;
            if (this.offsetLeft_count < -50) {
                this.orientation(1, 'drag');
            } else if (this.offsetLeft_count > 50) {
                this.orientation(-1, 'drag');
            } else {
                content.style.left = this.offsetLeft_1 + 'px';
            }
            document.onmousemove = null;
            document.onmouseup = null;
            content.style.cursor = 'grab';
        },
    });

    const checkOrientation = ({ content }) => ({
        orientation(status, action) {
            content.classList.add('modifire');
            if (this.allowShift) {
                if (!action) {
                    this.offsetLeft_1 = content.offsetLeft;
                }
                if (status === 1) {
                    content.style.left = this.offsetLeft_1 - this.linkWidth() + 'px';
                    this.index++;
                } else if (status === -1) {
                    this.index--;
                    content.style.left = this.offsetLeft_1 + this.linkWidth() + 'px';
                }
            }
            this.allowShift = false;
        },
    });

    const checkIndexLoop = ({ content, links }) => ({
        indexLoop() {
            content.classList.remove('modifire');
            if (this.index == -1) {
                content.style.left = -(this.linksLength * this.linkWidth()) + 'px';
                this.index = this.linksLength - 1;
            }

            if (this.index == this.linksLength) {
                content.style.left = -(1 * this.linkWidth()) + 'px';
                this.index = 0;
            }
            this.allowShift = true;
        },
    });

    const setAutoSlide = () => ({
        startAutoSlide() {
            this.stopSlide = setInterval(this.orientation.bind(this, 1), 3000);
        },
        stopAutoSlide() {
            clearInterval(this.stopSlide);
        },
    });

    const getLinkWidth = () => ({
        linkWidth() {
            return queryAll('a')[0].offsetWidth;
        },
    });

    const setEvents = ({  content, btnPrev, btnNext }) => ({
        events() {
            content.onmousedown = (e) => {
                e.preventDefault();
                this.dragStart(e);
            };
            btnPrev.addEventListener('click', () => this.orientation(-1));
            btnNext.addEventListener('click', () => this.orientation(1));
            content.addEventListener('transitionend', () => this.indexLoop());
        },
    });
    
    const setWindowEvents = ({content})=>({
        windowEvents() {
            window.addEventListener('resize', () => {
                content.style.left = -this.linkWidth() + 'px';
                this.index = 0;
            });
        }
    })
    const setAutoSlideEvents=({carousel, btnPrev, btnNext})=>({
        autoSlideEvents() {
            carousel.addEventListener('mouseenter', () => this.stopAutoSlide());
            carousel.addEventListener('mouseleave', () => this.startAutoSlide());
            btnPrev.addEventListener('mouseenter', () => this.stopAutoSlide());
            btnPrev.addEventListener('mouseleave', () => this.startAutoSlide());
            btnNext.addEventListener('mouseenter', () => this.stopAutoSlide());
            btnNext.addEventListener('mouseleave', () => this.startAutoSlide());
        }
    })

    function blueprint_1(state) {
        return {
            ...state,
            ...setDragOptions(state),
            ...checkOrientation(state),
            ...checkIndexLoop(state),
            ...setEvents(state),
            ...setAutoSlideEvents(state),
            ...setWindowEvents(state),
            ...createClones(state),
            ...setDefaultPosition(state),
            ...getLinkWidth(),
            ...setAutoSlide(),
        };
    }

    const state_1 = {
        clientX_1: null,
        clientX_2: null,
        clientX_count: null,
        offsetLeft_1: null,
        offsetLeft_2: null,
        offsetLeft_count: null,
        stopSlide: null,
        index: 0,
        allowShift: true,
        // linkWidth: queryAll('a')[0].offsetWidth,
        linksLength: queryAll('.portfolio .carousel__link').length,
        firstLink: queryAll('.portfolio .carousel__link')[0],

        carousel: query('.portfolio .carousel'),
        content: query('.portfolio .carousel__content'),
        links: queryAll('.portfolio .carousel__link'),
        imgs: queryAll('.portfolio .carousel__img'),
        btnPrev: query('.portfolio .carousel__btn-prev'),
        btnNext: query('.portfolio .carousel__btn-next'),
    };

    const instance_1 = blueprint_1(state_1);
    instance_1.defaultPosition();
    instance_1.clones();
    instance_1.events();
    instance_1.autoSlideEvents()
    instance_1.windowEvents()
    instance_1.startAutoSlide();

    const state_2 = {
        clientX_1: null,
        clientX_2: null,
        clientX_count: null,
        offsetLeft_1: null,
        offsetLeft_2: null,
        offsetLeft_count: null,
        stopSlide: null,
        index: 0,
        allowShift: true,
        // linkWidth: queryAll('a')[0].offsetWidth,
        linksLength: queryAll('.about .carousel__link').length,
        firstLink: queryAll('.about .carousel__link')[0],

        carousel: query('.about .carousel'),
        content: query('.about .carousel__content'),
        links: queryAll('.about .carousel__link'),
        imgs: queryAll('.about .carousel__img'),
        btnPrev: query('.about .carousel__btn-prev'),
        btnNext: query('.about .carousel__btn-next'),
    };

    const instance_2 = blueprint_1(state_2);
    instance_2.defaultPosition();
    instance_2.clones();
    instance_2.events();
    instance_2.autoSlideEvents()
    instance_2.windowEvents()
    instance_2.startAutoSlide();
})();
