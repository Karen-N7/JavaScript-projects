const Wrapper = (function () {
    const query = document.querySelector.bind(document);
    const queryAll = document.querySelectorAll.bind(document);

    const request = (method, url, body, cb, errCb) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                cb(xhr.responseText);
            }
        };

        xhr.onerror = function () {
            console.log("we cant connect to server");
        };
        xhr.open(method, url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(body);
    };

    function ValidationRequest({ form, inputs, alertResponse }) {
        this.form = form;
        this.inputs = inputs;
        this.alertResponse = alertResponse;
        this.errors = [];
        this.validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        this.timeout = null;
    }

    ValidationRequest.prototype = {
        producePrompt(className, message, color) {
            const alert = query(`.alert-${className}`);
            alert.innerText = message;
            alert.style.color = color;
        },
        validateInput(e) {
            let { name, value } = e.target ? e.target : e;

            if (value.length === 0) {
                this.producePrompt(name, name + " field is required ", "#dc3545");
                this.errors.push(name);
            } else if (name === "email" && !value.match(this.validRegex)) {
                this.producePrompt(name, "Invalid email address!", "#dc3545");
                this.errors.push(name);
            } else {
                this.producePrompt(name, "value " + value + " granted", "rgb(14, 142, 132)");
            }
        },
        showAlerts() {
            this.form.classList.add("show-alerts");
        },
        hideAlerts() {
            this.form.classList.remove("show-alerts");
        },
        getQuery() {
            const params = {};
            this.inputs.forEach((input) => (params[input.name] = input.value));
            return Object.keys(params).map((key) => key + "=" + params[key]).join("&");
            // If you know you're keys and values need to be encoded, you should use encodeURIComponent like this:
            // var query = Object.keys(params)
            // .map((key) => {
            //     return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
            // })
            // .join("&");
        },
        showResponseAlert(message) {
            this.alertResponse.style.transform = "translate(-50%,-30%)";
            this.alertResponse.innerHTML = message;
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.alertResponse.style.transform = "translate(-50%,100%)";
            }, 1500);
        },
        setEvents() {
            this.form.addEventListener("submit", (e) => {
                e.preventDefault();
                this.errors = [];
                this.inputs.forEach((input) => {
                    this.validateInput(input);
                    input.addEventListener("keyup", (e) => this.validateInput(e));
                });
                this.showAlerts();
                if (!this.errors.length) {
                    this.hideAlerts();
                    request("post", "./sendMail.php", this.getQuery(), (message) => {
                        this.showResponseAlert(message);
                    });
                }
            });
        },
    };
        const state_1 = {
            form: query(".contact .form"),
            inputs: queryAll(".contact .form input"),
            alertResponse: query(".alert-response"),
        };
    
        const validationRequest_1 = new ValidationRequest(state_1);
        validationRequest_1.setEvents();

})();
