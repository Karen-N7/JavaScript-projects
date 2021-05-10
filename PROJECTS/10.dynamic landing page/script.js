// let time = document.querySelector('#time'),
//     greeting = document.querySelector('#greeting'),
//     name = document.querySelector('#name'),
//     focus = document.querySelector('#focus');

// let arrays = {
//     events: ['keypress','blur','focus'],
//     elements: [name,focus]
// }
// function showTime() {
//     let today = new Date(),
//         hour = today.getHours(),
//         min = today.getMinutes(),
//         sec = today.getSeconds(),
//         amPm = hour >= 12 ? 'PM' : 'AM';
//     hour = hour % 12 || 12;
//     time.innerHTML = `${addZero(hour)}:${addZero(min)}:${addZero(sec)} ${amPm}`;
//     setTimeout(showTime, 1000)
// }
// showTime();

// function addZero(n) {
//     return (parseInt(n, 10) < 10 ? '0' : '') + n
// }

// function setBgGreeting(r) {
//     let today = new Date()
//     let hour = today.getHours();
//     let bg,text;
//     if (hour < 12) {
//         bg = 'https://source.unsplash.com/1600x900/?morning'
//         text = 'Good Morning'
//     } else if (hour < 17) {
//         bg = 'https://source.unsplash.com/1600x900/?afternoon'
//         text = 'Good Afternoon'
//     } else {
//         bg = 'https://source.unsplash.com/1600x900/?evening'
//         text = 'Good Evening'
//         document.body.style.color = '#fff'
//     }
//     document.body.style.background = `url(${bg})`
//     greeting.innerHTML = text
// }
//  setBgGreeting();

// function setValues(e) {
//     if (e.type === 'keypress') {
//         if (e.which == 13 || e.keyCode == 13) {
//             setItem(e.target)
//             check(e.target)
//             this.blur()
//         }
//     } else if(e.type == 'blur'){
//         setItem(e.target)
//         check(e.target)
//     } else {
//         e.target.innerHTML = ''
//     }
// }

// function addListeners() {
//     arrays.events.forEach(event=>{
//         arrays.elements.forEach(element=>{
//             element.addEventListener(event,setValues)
//         })
//     })
// }
// addListeners()

// function getElements() {
//     arrays.elements.forEach(element=>{
//         let data = getItem(element.id)
//         element.textContent = data ? data : `[Enter ${element.id}]`
//     })
// }
// getElements()

// function check(element) {
//     if(element.innerHTML == '') {
//         element.innerHTML = `[Enter ${element.id}]`
//     }
// }
// function getItem(data) {
//     return localStorage.getItem(data)
// }
// function setItem(data) {
//     return localStorage.setItem(data.id, data.textContent)
// }

class Planner {
  constructor(time, greeting, name, focus,bg) {
    this.time = time;
    this.greeting = greeting;
    this.name = name;
    this.focus = focus;
    this.bg = bg
    this.events = ["keypress", "blur", "focus"]
    this.elements = [this.name, this.focus]
  }
  getElements() {
    this.elements.forEach(element => {
      let data = store.getItem(element.id);
      element.textContent = data ? data : `[Enter ${element.id}]`;
    });
  }
  showTime = () => {
    let today = new Date(),
      hour = today.getHours(),
      min = today.getMinutes(),
      sec = today.getSeconds(),
      amPm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    let test = [hour,min,sec].map(item=>this.addZero(item))
    time.innerHTML = test.join(':') + ':' + amPm
    setTimeout(this.showTime, 1000); //setTimeout(this.showTime.bind(this), 1000);without arrow function
  };

  addZero(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
  }

  setBgGreeting() {
    let today = new Date();
    let hour = today.getHours();
    let bg, text;
    if (hour < 12) {
      bg = "https://source.unsplash.com/1600x900/?morning";
      text = "Good Morning";
    } else if (hour < 17) {
      bg = "https://source.unsplash.com/1600x900/?afternoon";
      text = "Good Afternoon";
    } else {
      bg = "https://source.unsplash.com/1600x900/?evening";
      text = "Good Evening";
      // document.body.style.color = "#fff";
    }
    this.bg.style.background = `url(${bg})`;
    greeting.innerHTML = text;
  }

  setValues=(e)=> {
    console.log(this);
    if (e.type === "keypress") {
      if (e.which == 13 || e.keyCode == 13) {
        store.setItem(e.target);
        this.check(e.target);
        this.blur();
      }
    } else if (e.type == "blur") {
      store.setItem(e.target);
      this.check(e.target);
    } else {
      e.target.innerHTML = "";
    }
  }

  addListeners() {
    this.events.forEach(event => {
      this.elements.forEach(element => {
        element.addEventListener(event, this.setValues);
      });
    });
  }

  check(element) {
    if (element.innerHTML == "") {
      element.innerHTML = `[Enter ${element.id}]`;
    }
  }
}

class Store {
  getItem(data) {
    return localStorage.getItem(data);
  }
  setItem(data) {
    return localStorage.setItem(data.id, data.textContent);
  }
}

let time = document.querySelector("#time"),
  greeting = document.querySelector("#greeting"),
  name = document.querySelector("#name"),
  focus = document.querySelector("#focus"),
  bg = document.querySelector('.bg')

let planner = new Planner(time, greeting, name, focus,bg);
let store = new Store()

planner.showTime();
planner.setBgGreeting();
planner.addListeners();
planner.getElements();
