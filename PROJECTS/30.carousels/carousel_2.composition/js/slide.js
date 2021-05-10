const Slide = (function () {
    const query = document.querySelector.bind(document),
        queryAll = document.querySelectorAll.bind(document),
        log = console.log;

    const handleOverlay = () => ({
        createOverlay() {
            const overlay = document.createElement('div');
            overlay.className = 'overlay';
            overlay.addEventListener('click', () => {
                this.deleteOverlay();
                this.hideModal();
            });
            document.body.appendChild(overlay);
        },
        deleteOverlay() {
            const overlay = query('.overlay');
            if (overlay) document.body.removeChild(overlay);
        },
    });

    const handleSlide = ({ links, content }) => ({
        createSlide(prevNext) {
            prevNext == 'next' ? this.index++ : this.index--;
            if (this.index < 0) {
                this.index = links.length - 1;
            } else if (this.index > links.length - 1) {
                this.index = 0;
            }
            // content.animate([{ opacity: '0.5' }, { opacity: '1' }], { duration: 500, fill: 'forwards' })
            content.style.backgroundImage = `url("../../images/img-${this.index}.jpg")`;
        },
    });
    const handleModal = ({modal})=>({
        showModal(){
            modal.classList.add('modifire')
        },
        hideModal() {
            modal.classList.remove('modifire')
        }
    })

    const handleEvents = ({ btnPrev, btnNext }) => ({
        setEvents() {
            btnPrev.addEventListener('click', () => this.createSlide('prev'));
            btnNext.addEventListener('click', () => this.createSlide('next'));
        },
    });
    const handleModalEvents = ({ links, modal }) => ({
        setModalEvents() {
            links.forEach((link, index) => {
                link.addEventListener('click', () => {
                    this.index = index + 1;
                    this.createOverlay()
                    this.showModal()
                    this.createSlide();
                });
            });
        },
    });
    const handleCloserEvents = ({closer})=>({
        setCloserEvents() {
            closer.addEventListener('click',()=>{
                this.deleteOverlay()
                this.hideModal()
            })
        }
    })

    function factory_1(state) {
        return {
            ...state,
            ...handleOverlay(state),
            ...handleEvents(state),
            ...handleModalEvents(state),
            ...handleCloserEvents(state),
            ...handleSlide(state),
            ...handleModal(state),
        };
    }

    const state_1 = {
        modal: query('.portfolio .modal-slide'),
        content: query('.portfolio .modal-slide__content'),
        links: queryAll('.portfolio .portfolio__link'),
        btnPrev: query('.portfolio .modal-slide__btn-1'),
        btnNext: query('.portfolio .modal-slide__btn-2'),
        closer: query('.portfolio .modal-slide__closer'),
        index: 0,
        stopSlide: null,
    };
    const instance_1 = factory_1(state_1);
    instance_1.setEvents();
    instance_1.setModalEvents();
    instance_1.setCloserEvents()
})();


