const Select = (function () {
    const query = document.querySelector.bind(document),
        queryAll = document.querySelectorAll.bind(document),
        log = console.log;

    const handleTextValue = ({ text, input, textDefaultValue }) => ({
        setTextValue(e) {
            if (e.target == input) {
                text.innerHTML = input.value ? "" : textDefaultValue;
            } else {
                text.innerHTML = e.target.innerHTML;
                input.value = "";
            }
        },
    });

    const handleEvents = ({ input, options }) => ({
        setEvents() {
            input.addEventListener("input", this.setTextValue);
            options.forEach((option) => {
                option.addEventListener("click", this.setTextValue);
            });
        },
    });

    const handleDefaultOptions = ({ input, text, selected, readOnly }) => ({
        setDefaultOptions() {
            // text.innerText = selected;
            readOnly && input.setAttribute("readOnly", true);
        },
    });

    function factory_1(state) {
        return {
            ...state,
            ...handleTextValue(state),
            ...handleDefaultOptions(state),
            ...handleEvents(state),
        };
    }

    const state = {
        input: query(".select input"),
        text: query(".select .text"),
        options: queryAll(".select .option"),
        selectOptions: query(".select .select-options"),
        textDefaultValue: query('.select .text').innerHTML,
        // readOnly: true,
    };

    const instance_1 = factory_1(state);
    instance_1.setDefaultOptions();
    instance_1.setEvents();
})();

export default Select;
