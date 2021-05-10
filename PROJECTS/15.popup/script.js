class Store {
    static getItem() {
        return JSON.parse(sessionStorage.getItem('checked'));
    }
    static addItem(status) {
        sessionStorage.setItem('checked', status)
    }
}
class HandleEvents {
    constructor(items,checkbox,index) {
        this.items = items
        this.checkbox = checkbox
        this.index = index
    }
    setEvents() {
        this.items.forEach(item => {
            item.onclick =(e)=> {
                var selector = e.target.getAttribute("data-key");//dataset.key
                switch (selector) {
                    case "checkbox": this.checkboxStatus(true); break;
                    default: this.popup(selector);
                }
            }
        })
    }
    popup(id) {
        document.querySelectorAll("a")
            .forEach(item => item.style.display = 'none')
        document.getElementById(id).style.display = "block";
        //BLOCK = id;
    }
    move(status) {
        status ? this.index++ : this.index--
        if (this.index > items.length - 1) {
            this.index = 0
        }
        if (this.index < 0) {
            this.index = items.length - 1;
        }
        var active = document.querySelector(".active");
        if (active) {
            active.classList.remove("active");
        }
        items[this.index].classList.add("active");

    }
    checkboxStatus(isStoreChecked) {
        if(isStoreChecked) {
            this.checkbox.checked = !this.checkbox.checked
            Store.addItem(this.checkbox.checked)
        } else {
            this.checkbox.checked = Store.getItem()
        }
    }
    
}
let items = document.querySelectorAll("li")
let checkbox = document.querySelector('#checkbox');
let handleEvents = new HandleEvents(items,checkbox,1)
handleEvents.setEvents()
handleEvents.move()
handleEvents.checkboxStatus(false)

class KeyManager {
    constructor(block) {
        this.block = block
    }
    chooseStream = (e) => {
        let code = e.keyCode
        switch (this.block) {
            case "SETTINGS": this.settings_key_manager(code); break;
            case "PARENTAL_CODE": this.parental_key_manager(code); break;
        }
    }
    settings_key_manager(code) {
        switch (code) {
            case keys.BOTTOM: handleEvents.move(1); break;
            case keys.TOP: handleEvents.move(0); break;
            case keys.RIGHT: ; break;
            case keys.LEFT: ; break;
            case keys.OK: document.querySelector('.active').click(); break;
            case keys.EXIT: closePopup(); break;
            case keys.BACK:
                this.block = 'PARENTAL_CODE'
                this.alertChanges('PARENTAL_CODE')
                break;
        }
    }
    parental_key_manager(key) {
        switch (key) {
            case keys.BOTTOM: ; break;
            case keys.BACK:
            case keys.BACK_TIZEN:
                this.block = "SETTINGS";
                this.alertChanges('SETTINGS')
                break;
        }
    }
    alertChanges(message) { alert(`switched to ${message}`) }
}
let keyManager = new KeyManager('SETTINGS')
document.addEventListener('keydown', keyManager.chooseStream)



