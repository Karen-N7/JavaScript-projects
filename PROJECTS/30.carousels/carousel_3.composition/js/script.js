const Carousel = (function () {
    const query = document.querySelector.bind(document),
        queryAll = document.querySelectorAll.bind(document),
        log = console.log;

    const handleSlide = ({ carousel, links }) => ({
        slide(prevNext) {
            prevNext === 'next' ? this.index++ : this.index--;
            if (
                Math.ceil(carousel.scrollLeft) + 1 >= carousel.scrollWidth - carousel.offsetWidth &&
                prevNext === 'next'
            ) {
                log('test');
                carousel.scrollLeft = 0;
                this.index = 0;
            } else if (carousel.scrollLeft <= 320 && prevNext === 'prev') {
                carousel.scrollLeft = carousel.scrollWidth - carousel.offsetWidth;
                this.index = links.length - 1;
            }
            if(links[this.index])
            carousel.scrollLeft = links[this.index].offsetLeft;
        },
    });
    const handleScroll = ({ carousel }) => ({
        setScroll(e) {
            e.preventDefault();
            e.deltaY > 0
                ? (carousel.scrollLeft = carousel.scrollLeft + 500)
                : (carousel.scrollLeft = carousel.scrollLeft - 500);
        },
    });
    const handleAutoSlide = () => ({
        startAutoSlide() {
            this.stopSlide = setInterval(this.slide.bind(this, 'next'), 3000);
        },
        stopAutoSlide() {
            clearInterval(this.stopSlide);
        },
    });

    const handleFirstPartyEvents = ({ btnPrev, btnNext }) => ({
        setfirstPartyEvents() {
            btnPrev.addEventListener('click', () => this.slide('prev'));
            btnNext.addEventListener('click', () => this.slide('next'));
        },
    });

    const handleSecondPartyEvents = ({ carousel, links }) => ({
        setSecondPartyEvents() {
            carousel.addEventListener('scroll', () => {
                links.forEach((link, index) => {
                    if (
                        carousel.scrollLeft >= link.offsetLeft &&
                        carousel.scrollLeft <= link.offsetLeft + link.offsetWidth
                    ) {
                        this.index = index;
                    }
                });
            });
        },
    });

    const handleThirdPartyEvents = ({ carousel }) => ({
        setThirdPartyEvents() {
            carousel.onclick = (e) => {
                e.stopPropagation();
                carousel.onwheel = (e) => {
                    this.setScroll(e);
                };
                document.onclick = () => {
                    carousel.onwheel = null;
                    document.onclick = null;
                };
            };
        },
    });

    const handleForthPartyEvents = ({ carousel, btnPrev, btnNext }) => ({
        setForthPartyEvents() {
            carousel.addEventListener('mouseenter', () => this.stopAutoSlide());
            carousel.addEventListener('mouseleave', () => this.startAutoSlide());
            btnPrev.addEventListener('mouseenter', () => this.stopAutoSlide());
            btnPrev.addEventListener('mouseleave', () => this.startAutoSlide());
            btnNext.addEventListener('mouseenter', () => this.stopAutoSlide());
            btnNext.addEventListener('mouseleave', () => this.startAutoSlide());
        },
    });

    function blueprint_1(state) {
        return {
            ...state,
            ...handleSlide(state),
            ...handleScroll(state),
            ...handleFirstPartyEvents(state),
            ...handleSecondPartyEvents(state),
            ...handleThirdPartyEvents(state),
            ...handleForthPartyEvents(state),
            ...handleAutoSlide(state),
        };
    }

    const state_1 = {
        carousel: query('.portfolio .carousel'),
        content: query('.portfolio .carousel__content'),
        links: queryAll('.portfolio .carousel__link'),
        btnPrev: query('.portfolio .carousel__btn-prev'),
        btnNext: query('.portfolio .carousel__btn-next'),
        stopSlide: null,
        section: 'portfolio',
        index: 0,
    };
    const instance_1 = blueprint_1(state_1);
    instance_1.setfirstPartyEvents();
    instance_1.setSecondPartyEvents();
    instance_1.setThirdPartyEvents();
    instance_1.setForthPartyEvents();
    instance_1.startAutoSlide();

    //

    const state_2 = {
        carousel: query('.about .carousel'),
        content: query('.about .carousel__content'),
        links: queryAll('.about .carousel__link'),
        btnPrev: query('.about .carousel__btn-prev'),
        btnNext: query('.about .carousel__btn-next'),
        stopSlide: null,
        section: 'about',
        index: 0,
    };
    const instance_2 = blueprint_1(state_2);
    instance_2.setfirstPartyEvents();
    instance_2.setSecondPartyEvents();
    instance_2.setThirdPartyEvents();
    instance_2.setForthPartyEvents();
    instance_2.startAutoSlide();
})();
