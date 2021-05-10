// ------------------------------ Module
// const Modal = (function () {
//     const query = document.querySelector.bind(document),
//         queryAll = document.querySelectorAll.bind(document),
//         body = query('body'),
//         modalBtns = queryAll('.modal-btn'),
//         closers = queryAll('.modal-closer'),
//         overlay = query('.overlay'),
//         submits = queryAll('.modal__submit'),
//         subClosers = queryAll('.submodal__closer');

//     let currentModal = null;
//     let currentSubModal = null;

//     overlay.addEventListener('click', hideModal);
//     modalBtns.forEach((btn) => {
//         btn.addEventListener('click', (e) => showModal(e.target.dataset.target));
//     });
//     closers.forEach((closer) => closer.addEventListener('click', hideModal));
//     submits.forEach((submit) => {
//         submit.addEventListener('click', (e) => {
//             hideModal();
//             showSubmodal(e.target.dataset.target);
//             timeoutOptions(hideSubmodal, currentSubmodal, 2000);
//         });
//     });
//     subClosers.forEach((closer) => closer.addEventListener('click', hideSubmodal));

//     function showModal(id) {
//         currentModal = document.getElementById(id);
//         currentModal.classList.add('modifire');
//         overlay.classList.add('modifire');
//         body.classList.add('modifire');
//     }
//     function hideModal() {
//         currentModal.classList.remove('modifire');
//         overlay.classList.remove('modifire');
//         body.classList.remove('modifire');
//     }
//     function showSubmodal(id) {
//         currentSubmodal = document.getElementById(id);
//         currentSubmodal.classList.add('modifire');
//     }
//     function hideSubmodal() {
//         currentSubmodal.classList.remove('modifire');
//     }
//     function timeoutOptions(callback, target, time) {
//         setTimeout(() => {
//             callback(target);
//         }, time);
//     }
//     return {
//         showModal,
//         currentModal,
//         overlay,
//     };
// })();

// ------------------------------------ Composition
const Modal = (function(){
    const query = document.querySelector.bind(document),
        queryAll = document.querySelectorAll.bind(document),
        log = console.log 

        const handleOverlay = () => ({
            createOverlay() {
                const overlay = document.createElement('div');
                overlay.className = 'overlay';
                overlay.addEventListener('click', () => {
                    this.deleteOverlay();
                    this.hideModal();
                    this.hideSubModal()
                });
                document.body.appendChild(overlay);
            },
            deleteOverlay() {
                const overlay = query('.overlay');
                if (overlay) document.body.removeChild(overlay);
            },
        });

        const handleModal = ({modal})=>({
            showModal () {
                modal.classList.add('modifire')
            },  
            hideModal() {
                modal.classList.remove('modifire')
            }
        })
        const handleSubmodal = ({submodal})=>({
            showSubmodal () {
                submodal.classList.add('modifire')
                clearTimeout(this.time)
                this.time = setTimeout(()=>{
                    this.hideSubModal()
                },3000)
            },  
            hideSubModal() {
                submodal.classList.remove('modifire')
            }
        })

        const handleEvents = ({btn})=>({
            setEvents() {
                btn.addEventListener('click',()=>{
                    this.createOverlay()
                    this.showModal()
                })
            }
        })

        const handleSubmitEvents = ({submit}) =>({
            setSubmitEvents () {
                submit.addEventListener('click',()=>{
                    this.deleteOverlay()
                    this.hideModal()
                    this.showSubmodal()
                })
            }
        })

        const handleCloserEvents =({closer})=>({
            setCloserEvents() {
                closer.addEventListener('click',()=>{
                    this.deleteOverlay()
                    this.hideModal()
                })
            }
        })

        const handleSubcloserEvents = ({subcloser})=>({
            setSubcloserEvents() {
                subcloser.addEventListener('click',()=>{
                    this.hideSubModal()
                    this.deleteOverlay()
                })
            }
        })

        function bluePrint_1 (state) {
            return {
                ...state,
                ...handleOverlay(state),
                ...handleModal(state),
                ...handleSubmodal(state),
                ...handleEvents(state),
                ...handleCloserEvents(state),
                ...handleSubcloserEvents(state),
                ...handleSubmitEvents(state)
            }
        }

        const state_1 = {
            modal: query('.portfolio .modal'),
            closer: query('.portfolio .modal__closer'),
            btn: query('.portfolio .modal-btn'),
            submodal: query('.portfolio .submodal'),
            subcloser: query('.portfolio .submodal__closer'),
            submit: query('.portfolio .modal__submit')
        }

        const instance_1 = bluePrint_1(state_1)
        instance_1.setEvents()
        instance_1.setCloserEvents()
        instance_1.setSubcloserEvents()
        instance_1.setSubmitEvents()
        // 
        const state_2 = {
            modal: query('.about .modal'),
            closer: query('.about .modal__closer'),
            btn: query('.about .modal-btn'),
            submodal: query('.about .submodal'),
            subcloser: query('.about .submodal__closer'),
            submit: query('.about .modal__submit')
        }

        const instance_2 = bluePrint_1(state_2)
        instance_2.setEvents()
        instance_2.setCloserEvents()
        instance_2.setSubcloserEvents()
        instance_2.setSubmitEvents()
})()


