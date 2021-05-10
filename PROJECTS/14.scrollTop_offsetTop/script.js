// var box = document.querySelector('.box');
// var ul = document.createElement('ul');
// box.appendChild(ul);

// var array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// var counter = 0;
// for (each of array) {
//     var li = document.createElement('li');
//     li.innerHTML = each
//     ul.appendChild(li);
// }
// var list = document.querySelectorAll('li');

// document.addEventListener('keydown', (e) => {
//     var key = e.keyCode;
//     switch (key) {
//         case 40:
//             counter++;
//             break;
//         case 38:
//             counter--;
//             break;
//         default:
//             alert("ERROR");
//             break;
//     }
//     move();
// });

// list[counter].className = 'active'

// function move() {
//     if (counter < 0) {
//         counter = array.length - 1
//     }

//     if (counter > array.length - 1) {
//         counter = 0
//     }

//     let active = document.querySelector('.active')
//     if (active) {
//         active.classList.remove("active");
//     }
//     list[counter].classList.add('active');
//     box.scrollTop = list[counter].offsetTop - 50
// }
//////////////////////////////////////////////////////////////////////
let content = "";
for (let i = 0; i < 10; i++) {
  content += `<li>${i}</li>`;
}
let box = document.querySelector(".box");
box.innerHTML = content;

document.addEventListener("keydown", e => {
  switch (e.which) {
    case 38:
      process(0);
      break;
    case 40:
      process(1);
      break;
  }
});

let list = document.querySelectorAll("li");
let counter = 1;
function process(status) {
  status ? counter++ : counter--;
  if (counter > list.length - 1) {
    counter = 0;
  } else if (counter < 0) {
    counter = list.length - 1;
  }
  list.forEach(item => (item.className = ""));
  list[counter].classList.add("active");

  box.scrollTop = list[counter].offsetTop - 50;
}
process();

let events = ["mousedown", "mouseup"];
document.querySelectorAll(".way").forEach(item => {
  events.forEach(event => {
    item.addEventListener(event, () => {
      event == "mousedown"
        ? start(item.classList.contains("down") ? true : false)
        : stop();
    });
  });
});

let loop;
function start(upDown) {
  process(upDown);
  loop = setTimeout(() => start(upDown), 300);
}

function stop() {
  clearTimeout(loop);
}
//////////////////////////////////////////////////////////////// with setInterval
// let up = document.querySelector(".up");
// up.addEventListener("mousedown", () => init(1));
// up.addEventListener("mouseup", () => init(0));

// let down = document.querySelector(".down")
// down.addEventListener("mousedown", () => init(1,true));
// down.addEventListener("mouseup", () => init(0));

// let start;
// function init(move,upDown) {
//     if (move) {
//     process(upDown)
//     start = setInterval(()=>process(upDown), 300);
//   } else {
//     clearInterval(start);
//   }
// }
//////////////////////////////////////////////////////////////////// with setTimeout
// let up = document.querySelector(".up");
// up.addEventListener("mousedown", () => init(1));
// up.addEventListener("mouseup", () => init(0));

// let down = document.querySelector(".down")
// down.addEventListener("mousedown", () => init(1,true));
// down.addEventListener("mouseup", () => init(0));

// let start;
// function init(move,upDown) {
//     if (move) {
//     process(upDown)
//     start = setTimeout(()=>init(1,upDown),300)
//   } else {
//     clearTimeout(start)
//   }
// }

