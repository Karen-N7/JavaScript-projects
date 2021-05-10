
var CheckboxOptions = (function () {
    var handlePropertys = function () {
        return {
            getLabels: function () {
                return document.querySelectorAll(this.query + " .label");
            },
            getChecked: function () {
                return document.querySelector(this.query + " " + this.tail + " [checked=true]");
            },
            getActive: function () {
                return document.querySelector(this.query + " " + this.tail + " .active");
            },
        };
    };
    var handleMarks = function () {
        
        return {
            switchCustomRadio:function(e){
                var active = this.getActive()
                if (active) {
                    active.classList.remove("active");
                }
                var customRadio =  e.currentTarget.parentElement.querySelector('.custom-radio');
                customRadio.classList.add("active");

            },
            switchRadio: function (e) {
                var checked = this.getChecked()
                if (checked) {
                    checked.removeAttribute("checked");
                }
                var radio = e.currentTarget.parentElement.querySelector('input');
                radio.setAttribute("checked", true);
                
                this.switchCustomRadio(e)
            },
            setCheckbox: function(e){
                var checkbox = e.currentTarget.parentElement.querySelector('input');
                var customCheckbox = e.currentTarget.parentElement.querySelector('.custom-checkbox');
                var isChecked = checkbox.getAttribute("checked");
                if (isChecked) {
                    checkbox.addAttribute("checked");
                    customCheckbox.classList.remove('active')
                } else {
                    checkbox.setAttribute("checked", true);
                    customCheckbox.classList.add('active')
                }

            }
        };
    };

    var handleEvents = function () {
        return {
            setEvent_1: function () {
                var labels = this.getLabels()
                for (var i = 0; i < labels.length; i++) {
                    labels[i].addEventListener("click", this.switchRadio.bind(this));
                }
            },
            setEvent_2: function () {
                var labels = this.getLabels()
                for (var i = 0; i < labels.length; i++) {
                    labels[i].addEventListener("click", this.setCheckbox.bind(this));
                }
            },
         
        };
    };

    function factory_1(state) {
        return {
            query: state.query,
            tail: state.tail,
            getLabels: handlePropertys().getLabels,
            getChecked: handlePropertys().getChecked,
            getActive: handlePropertys().getActive,
            switchRadio: handleMarks().switchRadio,
            switchCustomRadio: handleMarks().switchCustomRadio,
            setEvent_1: handleEvents().setEvent_1,
        };
    }

    function factory_2(state) {
        return {
            query: state.query,
            tail: state.tail,
            getLabels: handlePropertys().getLabels,
            getChecked: handlePropertys().getChecked,
            getActive: handlePropertys().getActive,
            setCheckbox: handleMarks().setCheckbox,
            setEvent_2: handleEvents().setEvent_2,
        };
    }

    var state_1 = {
        query: ".tab",
        tail: ".radios",
    };

    var instance_1 = factory_1(state_1);
    // 
    var state_2 = {
        query: ".filter",
        tail: ".checkboxes",
    };

    var instance_2 = factory_2(state_2);

    return {
        instance_1,
        instance_2
    };
})();


CheckboxOptions.instance_1.setEvent_1()
CheckboxOptions.instance_2.setEvent_2()