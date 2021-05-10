///////////////////////////////////////spread operator
// var array = [
//     '1 in array', '2 in array', '3 in array',
//     '4 in array', '5 in array', '6 in array'
// ]
// var [bla1, , , bla4, ...restBla] = array
// console.log(bla1, bla4, ...restBla)
//------------------------------------------------
// var array1 = [1, 2, 3, 4, 5, 6]
// var array2 = ['A', 'B', 'C', 'D', 'E', 'F']
// var combine = [...array1, ...array2]
// console.log(combine)
//-----------------------------------------
// var object = {
//     one: '1 in object',
//     two: '2 in object',
//     three: '3 in object',
//     four: '4 in object',
//     five: '5 in object',
//     six: '6 in object',
// }
// var { one,three, ...rest } = object
// console.log(rest)
//---------------------------
// var object = {
//     name: 'John',
//     age: 32,
//     // favoriteFood: 'apple'
// }

// function process({ name, age, favoriteFood = 'watermelon' }) {
//     console.log(`${name} is ${age} and he like ${favoriteFood}`)
// }
// process(object)
//------------------------array exersize 
// function some(a, b) {
//     return [a + b, a * b]
// }
// var data = some(2, 3)
// var [first, second, division = 'no division'] = data
// console.log(first, second, division)
/////////////////////////////  largest and smallest number
// var array = [13, 34, 42, 2, 95, 21];
// var max = 0;//-Infinity
// for (var i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//         max = array[i]
//     }
// }
// console.log(max);

// var min = Infinity; //var min = max;
// for (var i = 0; i < array.length; i++) {
//     if (array[i] < min) {
//         min = array[i]
//     }
// }
// document.write(min);
///////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////while vs if
// let number = 10
// let count = 0

// if(count < 10) {
//     count++
//     console.log(count,'with if')
// }
// -------------------------------------
// let number = 10
// let count = 0

// while(count < 10) {
//     count++
//     console.log(count,'with while')
// }
/////////////////////////////////////////////////////

///////////////////////////////////////////////////////////finding duplicates
// var array = [23, 34, 3, 18, 18, 9]
// var noDuplicate = []
// for (var i = 0; i < array.length; i++) {
//     if (!noDuplicate.includes(array[i])) {
//         noDuplicate.push(array[i])
//     }
// }
// console.log(noDuplicate)
//---------------------------------------------------
// var array = [23, 34, 3, 18, 18, 9]
// var noDuplicate = []
// for (var i = 0; i < array.length; i++) {
//     if (noDuplicate.indexOf(array[i]) === -1) {
//         noDuplicate.push(array[i])
//     }
// }
// console.log(noDuplicate)
//---------------------------------------
// var array = [23, 34, 3, 18, 18, 9]
// var obj = {}
// for (var i of array) {
//     obj[i] = 'noRepeat' //true
// }
// var noDuplicate = Object.keys(obj)
// console.log(noDuplicate)
//--------------------------------------------
// var array = [23, 34, 3, 18, 18, 9]
// let noDuplicate = [...new Set(array)]
// console.log(noDuplicate)
// console.log(noDuplicate.length)
// ---------------------------------------
// var array = [23, 34, 3, 18, 18, 9]
// let noDuplicate = new Set(array)
// console.log(noDuplicate)
// console.log(noDuplicate.size)
////////////////////////////////////////////////

///////////////////////////////////////////////// number scroll
// var scroll = document.createElement('div');
// document.body.appendChild(scroll);
// scroll.innerHTML = 'scroll here'
// var int = 0;
// scroll.addEventListener('wheel', function process(e) {
//     if (e.deltaY > 0) {
//         int++
//     } else {
//         int--
//     }
//     this.innerHTML = int
// });
/////////////////////////////////////////////////////////

//////////////////////////////////////////////// courtains
// var box = document.createElement('div');
// document.body.appendChild(box);
// box.style.cssText = 'width: 300px;height: 300px;border: 1px solid #000;overflow: hidden;'
// var courtain = document.createElement('div');
// box.appendChild(courtain)
// courtain.style.cssText = 'width: 100%;background: #3498db'
// var int = 0;
// box.onwheel = function(e) {
//     if (e.deltaY > 0) {
//         int++
//     } else {
//         int--
//     }
//     courtain.style.height = int + '0px'
// };
// ////////////////////////////////////////////

// ///////////////////////////////////////////// progress bar
// var progress = document.createElement('div');
// document.body.appendChild(progress);
// progress.style.cssText = 'width: 500px;height: 60px;border: 1px solid #333;'
// progress.addEventListener('click', process);
// var progress_bar = document.createElement('div');
// progress.appendChild(progress_bar);
// progress_bar.style.cssText = 'height: 100%;width: 10px;background: #3498db;'

// function process(e) {
//     console.log(e.offsetX);
//     progress_bar.style.width = e.offsetX + 'px';
// }
// ///////////////////////////////////////////////

// /////////////////////////////////////////////deltaY
// var box = document.createElement('div');
// document.body.appendChild(box);
// box.style.cssText = 'width: 100px;height: 100px;background: red;'

// box.addEventListener('wheel', (e) => {
//     var y = e.deltaY;
//     var currentSize = e.target.style.width;
//     if (y > 0) {
//         newSize = parseInt(currentSize) + 10;
//     } else if (e.target.style.width != '30px') {
//         newSize = parseInt(currentSize) - 10;
//     } else {
//         e.target.innerHTML = 'min-width 30px granted'
//         setTimeout(() => {
//             e.target.innerHTML = ''
//         }, 1000);
//     }
//     e.target.style.width = newSize + 'px';
//     e.target.style.height = newSize + 'px';
// });
/////////////////////////////////////////////

//////////////////////////////////////////////deltaY and js animation 
// document.querySelector('body').style.display = 'flex';
// var container = document.body.appendChild(document.createElement('div'));
// container.style.cssText = `display: flex;flex: 0 0 30%;border: 3px solid grey;height: 100px;
// justify-content: space-between; align-items: center; font-size: 46px;color: green`
// var btnMinus = container.appendChild(document.createElement('button'));
// btnMinus.innerHTML = 'minus'
// var btnPlus = container.appendChild(document.createElement('button'));
// btnPlus.innerHTML = 'plus'
// var number = container.insertBefore(document.createElement('div'), container.childNodes[1]);
// number.innerHTML = 'empty'

// let counter = 0;

// function update(type) {
//     if (type == 1) {
//         counter++
//     } else if (type == -1) {
//         counter--
//     }
//     number.innerHTML = counter
//     number.animate([{ opacity: '0.2' }, { opacity: '1' }], { duration: 500, fill: 'forwards' });
// }
// btnPlus.addEventListener('click', () => {
//     update(1)
// });
// btnMinus.addEventListener('click', () => {
//     update(-1)
// });
// number.addEventListener('wheel', (e) => {
//     var y = e.deltaY;
//     if (y > 0) {
//         update(1)
//     } else {
//         update(-1)
//     }
// });
//////////////////////////////////////////////

////////////////////////////////////////////// clientX
// var input = document.body.appendChild(document.createElement('input'))
// input.setAttribute('type','color')
// function drawing(e) {
//     var div = document.createElement('div')
//     div.style.cssText = `width: 10px;height: 10px;background: ${input.value};
//     position: absolute;left:${e.clientX - 5}px;top: ${e.clientY - 5}px`
//     document.body.appendChild(div)
// }

// document.addEventListener('mousedown',()=>{
//     document.addEventListener('mousemove',drawing)
// })
// document.addEventListener('mouseup',()=>{
//     document.removeEventListener('mousemove',drawing)
// })
///////////////////////////////////////////////

//////////////////////////////////////////////////// rgb offset
// var p = document.body.appendChild(document.createElement("p"));
// var box = document.body.insertBefore(document.createElement('div'), p);
// box.style.cssText = "width: 255px; height: 255px; border: 1px solid #000";
// var count = 0
// box.addEventListener("mousemove", btnStatus)
// function btnStatus(e) {
//     box.style.background = "rgb(" + e.offsetX + "," + e.offsetY + ','
//         + count++ + ')';
//     p.innerHTML = '<h3>Horizontal: ' + e.offsetX + "</h3><h3>Vertical: "
//         + e.offsetY + "</h3>" + "<h3>" + 'loop-count: ' + count + "</h3>"
//     if (count > 254) {
//         count = -1
//     }
// }
//////////////////////////////////////////////////////

//////////////////////////////////////////////////////// hex Math.random 
// var container = document.body.appendChild(document.createElement('div'))
// container.style.cssText = 'width: 500px;height: 500px;border: 1px solid #000;'
// var btn = document.body.appendChild(document.createElement('button'))

// var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
// btn.addEventListener('click', () => {
//     var hex = '#';
//     let i;
//     let length = array.length
//     for (i = 0; i < 6; i++) {
//         hex += array[Math.floor(Math.random() * length)];
//     }
//     container.style.background = hex;
//     container.innerHTML = hex;
// });
////////////////////////////////////////////////////screenX,clientX,pageX,offsetX
// var box = document.body.appendChild(document.createElement('div'))
// var boxStyle = {
//     width: '500px',
//     height: '300px',
//     border: '1px solid red',
//     margin: '100px',
//     'overflow-y': 'scroll'
// }
// var inner = box.appendChild(document.createElement('div'))
// inner.style.cssText = 'height: 500px;background: green'
// Object.assign(box.style,boxStyle)

// box.addEventListener('click',(e)=>{
//     console.log(e.target.tagName, ' clicked')
//     console.log('screenX - ',e.screenX)
//     console.log('clientX - ',e.clientX)
//     console.log('pageX - ',e.pageX)
//     console.log('offsetX - ',e.offsetX)
//     console.log(e.target.offsetLeft)
//     console.log(box.pageYOffset)
//     console.log(e.target.offsetWidth)
// })
