var Scroll = (function () {
    var handlePropertys = function (state) {
        return {
            getVerticals: function () {
                return document.querySelectorAll(state.query + " .vertical");
            },
            getVerticalActive: function () {
                return document.querySelector(state.query + " .verticalActive");
            },
            getHorizontals: function () {
                return document.querySelectorAll(state.query + " .verticalActive .horizontal");
            },
            getHorizontalActive: function () {
                return document.querySelector(state.query + " .horizontalActive");
            },
            getScrollbarThumb: function () {
                return document.querySelector(state.query + " .scrollbar-thumb");
            },
            getArrows: function () {
                return document.querySelectorAll(state.query + " .arrow");
            },
        };
    };

    var handlePositions = function (state) {
        return {
            setVerticalPosition: function (active) {
                var top = "translateY(0px)";
                if (state.verticalIndex > 0) {
                    top = "translateY(-" + (active.parentElement.offsetTop - state.positionRegulator) + "px)";
                }
                state.scroller.style.transform = top;
            },
            setHorizontalPosition: function (verticalActive, horizontalActive) {
                var left = "translateX(0px)";
                if (state.horizontalIndex > state.scrollTrigger) {
                    left =
                        "translateX(-" +
                        (horizontalActive.offsetLeft -
                            this.section.offsetWidth +
                            horizontalActive.offsetWidth * 2) +
                        "px)";
                }
                if (verticalActive) {
                    verticalActive.style.transform = left;
                }
            },
            setScrollbarThumbPosition: function () {
                state.getScrollbarThumb().style.top = state.verticalIndex * 48 + "%";
            },
            setMouseScroll: function (e) {
                if (state.stopMouseScroll == true) return;
                state.stopMouseScroll = true;
                setTimeout(function () {
                    state.stopMouseScroll = false;
                }, 300);
                if (e.deltaY > 0) {
                    state.setVerticalActive(+1);
                } else {
                    state.setVerticalActive(-1);
                }
            },
        };
    };

    var handleReset = function (state) {
        return {
            reset: function () {
                state.verticalIndex = 0;
                state.horizontalIndex = 0;
                state.setVerticalActive(0);
                state.setHorizontalActive(0);
                state.setVerticalPosition(state.getVerticalActive());
                state.setHorizontalPosition(state.getVerticalActive(), state.getHorizontalActive());
            },
        };
    };

    var handleActive = function (state) {
        return {
            filterIndex: function (index, elements) {
                if (index < 0) {
                    index = 0;
                } else if (index > elements.length - 1) {
                    index = elements.length - 1;
                }
                return index;
            },
            removeActive: function (active, className) {
                if (active) {
                    active.classList.remove(className);
                }
            },
            addActive: function (elements, index, className) {
                if (elements[index]) {
                    elements[index].classList.add(className);
                }
            },
            setVerticalActive: function (status) {
                state.horizontalIndex = 0;
                state.setHorizontalPosition(state.getVerticalActive(), state.getHorizontalActive());

                state.verticalIndex = state.verticalIndex + status;
                state.verticalIndex = state.filterIndex(state.verticalIndex, state.getVerticals());
                state.removeActive(state.getVerticalActive(), "verticalActive");
                state.addActive(state.getVerticals(), state.verticalIndex, "verticalActive");
                state.setVerticalPosition(state.getVerticalActive());
                if (state.query === ".tab") {
                    state.setScrollbarThumbPosition();
                }
                state.setHorizontalActive(0);
                state.setHorizontalsEvent();
                state.setScrollbarThumbPosition();
            },
            setHorizontalActive: function (status, hover) {
                if (state.stopScroll == true) return;
                if (typeof hover == "string") {
                    this.horizontalIndex = 0;
                }
                state.stopScroll = true;
                setTimeout(function () {
                    state.stopScroll = false;
                }, 100);

                state.horizontalIndex = state.horizontalIndex + status;
                state.horizontalIndex = state.filterIndex(state.horizontalIndex, state.getHorizontals());
                state.removeActive(state.getHorizontalActive(), "horizontalActive");
                state.addActive(state.getHorizontals(), state.horizontalIndex, "horizontalActive");
                state.setHorizontalPosition(state.getVerticalActive(), state.getHorizontalActive());
            },
        };
    };

    var handleArrows = function (state) {
        return {
            showArrows: function (arrows, length) {
                for (var i = 0; i < length; i++) {
                    arrows[i].classList.add("show");
                }
                clearTimeout(state.showArrowsTimeout);
                state.showArrowsTimeout = setTimeout(state.hideArrows.bind(state, arrows, length), 3000);
            },
            hideArrows: function (arrows, length) {
                if (arrows) {
                    for (var i = 0; i < length; i++) {
                        arrows[i].classList.remove("show");
                    }
                }
            },
        };
    };

    var handleEvents = function (state) {
        return {
            setHorizontalsEvent: function () {
                var horizontals = state.getHorizontals();
                var length = horizontals.length;
                for (var i = 0; i < length; i++) {
                    horizontals[i].addEventListener("click", function (e) {
                        console.log(e.currentTarget, " clicked");
                    });
                    horizontals[i].addEventListener(
                        "mouseenter",
                        state.setHorizontalActive.bind(state, i, "hover")
                    );
                }
            },
            setArrowsEvents: function () {
                var arrows = state.getArrows();
                var length = arrows.length;
                for (var i = 0; i < length; i++) {
                    if (arrows[i].classList.contains("arrow-prev")) {
                        arrows[i].addEventListener("click", state.setHorizontalActive.bind(state, -1));
                    } else {
                        arrows[i].addEventListener("click", state.setHorizontalActive.bind(state, +1));
                    }
                    arrows[i].addEventListener("click", state.showArrows.bind(state, arrows, length));
                    arrows[i].addEventListener("mousemove", state.showArrows.bind(state, arrows, length));
                }
            },
            setMouseScrollEvent: function () {
                state.section.addEventListener("wheel", state.setMouseScroll);
            },
        };
    };

    function factory_1(state) {
        return Object.assign(
            state,
            handleActive(state),
            handlePropertys(state),
            handlePositions(state),
            handleArrows(state),
            handleEvents(state),
            handleReset(state)
        );
    }
    var state_1 = {
        query: ".cast-1",
        section: document.querySelector(".cast-1"),
        scroller: document.querySelector(".cast-1 .scroller"),
        verticalIndex: 0,
        horizontalIndex: 0,
        showArrowsTimeout: null,
        stopScroll: false,
        stopMouseScroll: false,
        scrollTrigger: 3,
        positionRegulator: 250,
    };

    var instance_1 = factory_1(state_1);
    instance_1.setHorizontalsEvent();
    instance_1.setMouseScrollEvent();
    instance_1.setArrowsEvents();
    //

    var state_2 = {
        query: ".cast-2",
        section: document.querySelector(".cast-2"),
        scroller: document.querySelector(".cast-2 .scroller"),
        verticalIndex: 0,
        horizontalIndex: 0,
        showArrowsTimeout: null,
        stopScroll: false,
        stopMouseScroll: false,
        scrollTrigger: 3,
        positionRegulator: 250,
    };

    var instance_2 = factory_1(state_2);
    instance_2.setHorizontalsEvent();
    instance_2.setMouseScrollEvent();
    instance_2.setArrowsEvents();

    return {
        instance_1,
        instance_2,
    };
})();

var managerOptions = (function () {
    var manager = "castKeyManager";

    function keyManager(e) {
        var key = e.which || e.keyCode;
        switch (manager) {
            case "castKeyManager":
                castKeyManager(key);
                break;
            case "cast_2KeyManager":
                cast_2KeyManager(key);
                break;
        }
    }

    function castKeyManager(key) {
        console.log(key);

        switch (key) {
            case 38:
                Scroll.instance_1.setVerticalActive(-1);
                break;
            case 40:
                Scroll.instance_1.setVerticalActive(+1);
                break;
            case 37:
                Scroll.instance_1.setHorizontalActive(-1);
                break;
            case 39:
                Scroll.instance_1.setHorizontalActive(+1);
                break;
            case 8:
                manager = "cast_2KeyManager";
                document.querySelector(".cast-1").style.zIndex = "0";
                document.querySelector(".cast-2").style.zIndex = "1";
                Scroll.instance_1.reset();
                break;
            case 13: // not implemented
                // console.log("enter");
                Scroll.instance_1.getHorizontalActive().click();
                break;
        }
    }

    function cast_2KeyManager(key) {
        console.log(key);
        switch (key) {
            case 38:
                Scroll.instance_2.setVerticalActive(-1);
                break;
            case 40:
                Scroll.instance_2.setVerticalActive(+1);
                break;
            case 37:
                Scroll.instance_2.setHorizontalActive(-1);
                break;
            case 39:
                Scroll.instance_2.setHorizontalActive(+1);
                break;
            case 8:
                manager = "castKeyManager";
                document.querySelector(".cast-1").style.zIndex = "1";
                document.querySelector(".cast-2").style.zIndex = "0";
                Scroll.instance_2.reset();
                break;
            case 13: // not implemented
                console.log("enter");
                Scroll.instance_1.getHorizontalActive().click();
                break;
        }
    }

    document.addEventListener("keydown", keyManager);
})();
