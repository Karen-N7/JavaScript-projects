const PROGRESS_RANGE = (function () {
    const query = document.querySelector.bind(document),
        queryAll = document.querySelectorAll.bind(document),
        log = console.log;

    const handleLoad = ({ slider, output, defaultValue, section }) => ({
        load(value = 0) {
            if (this.loop) clearInterval(this.loop);
            function startLoop() {
                value++;
                if (value >= defaultValue) {
                    clearInterval(this.loop);
                }
                slider.value = value;
                this.scoreValue();
                if (section.classList.contains('about')) {
                    this.progress();
                }
            }
            this.loop = setInterval(startLoop.bind(this), 10);
        },
    });

    const setScoreValue = ({ slider, output }) => ({
        scoreValue: () => (output.innerText = slider.value + '%'),
    });

    const setEvent_1 = ({ slider }) => ({
        event_1() {
            slider.addEventListener('input', this.scoreValue);
        },
    });

    function blueprint_1(state) {
        return {
            ...state,
            ...setEvent_1(state),
            ...setScoreValue(state),
            ...handleLoad(state),
        };
    }

    const state_1 = {
        section: query('.portfolio'),
        slider: query('.portfolio .slider'),
        output: query('.portfolio .output'),
        defaultValue: 50,
        loop: null,
    };

    const instance_1 = blueprint_1(state_1);
    instance_1.event_1();
    instance_1.load();
    //

    const setProgress = ({ slider }) => ({
        progress() {
            slider.style.background = `linear-gradient(90deg, rgba(117,252,117,1) ${slider.value}%,
            rgba(214,214,214,1) ${slider.value}% )`;
        },
    });

    const setEvent_2 = ({ slider }) => ({
        event_2() {
            slider.addEventListener('input', this.progress);
        },
    });

    function blueprint_2(state) {
        let statePlus = blueprint_1(state);
        return {
            ...statePlus,
            ...setEvent_2(statePlus),
            ...setProgress(statePlus),
        };
    }

    const state_2 = {
        section: query('.about'),
        slider: query('.about .slider'),
        output: query('.about .output'),
        defaultValue: 70,
        loop: null,
    };

    const instance_2 = blueprint_2(state_2);
    instance_2.event_1();
    instance_2.event_2();
    instance_2.load();
})();
