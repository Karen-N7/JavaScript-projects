const PROGRESS_BAR = (function () {
    const query = document.querySelector.bind(document),
        queryAll = document.querySelectorAll.bind(document),
        log = console.log;

    const overUnder50 = ({ progressCircle }) => ({
        over50() {
            progressCircle.classList.add('over50');
        },
        under50() {
            progressCircle.classList.remove('over50');
        },
    });

    
    const setProgress = ({ field, valueBar,countNumber }) => ({
        progress() {
            let count = (360 * field.value) / 100;
            field.value > 50 ? this.over50() : this.under50();
            valueBar.style.transform = `rotate(${count}deg)`;
            countNumber.innerText = field.value + '%'
        }
    });

    const setEvents = ({ field }) => ({
        event_1() {
            field.addEventListener('input', () => this.progress());
        }
    });

    function factory_1(state) {
        return {
            ...state,
            ...setEvents(state),
            ...setProgress(state),
            ...overUnder50(state)
        };
    }

    const state_1 = {
        field: query('.portfolio .item-1 .item__field'),
        progressCircle: query('.portfolio .item-1 .progress-circle'),
        countNumber: query('.portfolio .item-1 .count-content'),
        leftHalfClipper: query('.portfolio .item-1 .left-half-clipper'),
        first50Bar: query('.portfolio .item-1 .first50-bar'),
        valueBar: query('.portfolio .item-1 .value-bar'),
    };
    const instance_1 = factory_1(state_1);
    instance_1.event_1();
    instance_1.progress()
    //
    const state_2 = {
        field: query('.portfolio .item-2 .item__field'),
        progressCircle: query('.portfolio .item-2 .progress-circle'),
        countNumber: query('.portfolio .item-2 .count-content'),
        leftHalfClipper: query('.portfolio .item-2 .left-half-clipper'),
        first50Bar: query('.portfolio .item-2 .first50-bar'),
        valueBar: query('.portfolio .item-2 .value-bar'),
    };
    const instance_2 = factory_1(state_2);
    instance_2.event_1();
    instance_2.progress()
    
})();
