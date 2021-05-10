// ----------------------------- Creational Structural Behavioural ------------------------

// The NameSpace /Module /Design pattern

const props_1 = {
    slider: document.querySelector('.slider-1'),
    badge: document.querySelector('.badge-1'),
    badgeSpan: document.querySelector('.badge-1 span'),
};
const Module = (function () {
    // privat props and methods
    // setEvents();

    let _password = 'jfkldjfs',
        _age = '37';

    (function setEvents() {
        document.addEventListener('click', () => {
            console.log('click');
            Module.secondMethod();
        });
    })();
    const _firstMethod = function () {
        console.log(this, ' first method');
    };
    const _secondMethod = function () {
        console.log(this, ' second method');
    };
    const _query = function (id) {
        return document.getElementById(id);
    };
    // public props and metods
    return {
        ...props_1,
        name: 'john',
        age: _age,
        secondMethod: _secondMethod,
        query: _query,
        thirdMethod() {
            console.log(this, ' third method');
        },
        init() {
            // _firstMethod();
            // secondMethod();
            // console.log(this.slider)
            console.log(this.slider);
        },
    };
})();

Module.init();

// console.log(Module.query('someId'))

// -----------------------------------------
const MYGLOBALOBJECT = (function () {
    let name = 'John',
        lastname = 'Carter';
    const firstMethod = () => {
        name = 'Tom';
        console.log(name);
    };
    const secondMethod = () => {
        console.log('second method')
    };
    return {
        firstMethod,
        secondMethod
    };
})();
MYGLOBALOBJECT.secondMethod();
