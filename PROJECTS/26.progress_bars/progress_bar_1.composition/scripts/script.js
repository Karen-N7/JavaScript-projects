const PROGRESS_BAR = (function () {
    const query = document.querySelector.bind(document),
        queryAll = document.querySelectorAll.bind(document),
        log = console.log;
        
        const handleLoading = ({ progress, score }) => ({
            load(width = 0) {
                if(this.loop) clearInterval(this.loop)
                function startLoop2() {
                width++
                if (width >= 100) {
                    clearInterval(this.loop);
                } 
                progress.style.width = width + '%';
                score.innerText = width + '%';
            }
            
            this.loop = setInterval(startLoop2.bind(this), 10);


           
        },
    });

    const setEvents = ({ btn }) => ({
        event_1() {
            btn.addEventListener('click',()=> this.load());
        },
    });

    function factory_1(state) {
        return {
            ...state,
            ...setEvents(state),
            ...handleLoading(state),
        };
    }

    const state_1 = {
        progressBar: query('.portfolio .progress-bar'),
        progress: query('.portfolio .progress'),
        score: query('.portfolio .score'),
        btn: query('.portfolio .portfolio__btn'),
        loop: null
    };
    const instance_1 = factory_1(state_1);
    instance_1.event_1();
    // 
    const state_2 = {
        progressBar: query('.about .progress-bar'),
        progress: query('.about .progress'),
        score: query('.about .score'),
        btn: query('.about .portfolio__btn'),
        loop: null
    };
    const instance_2 = factory_1(state_2);
    instance_2.event_1();
})();



