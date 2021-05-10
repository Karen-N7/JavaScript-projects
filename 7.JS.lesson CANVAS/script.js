// var canvas = document.querySelector('canvas');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// var ctx = canvas.getContext('2d');
// ctx.fillStyle = 'rgba(255,0,0,.5)';
// ctx.fillRect(100, 100, 100, 100);
// ctx.fillStyle = 'rgba(0,255,0,.5)';
// ctx.fillRect(400, 300, 100, 100);
// ctx.fillStyle = 'rgba(0,0,255,.5)';
// ctx.fillRect(700, 100, 100, 100);

// ctx.beginPath();
// ctx.moveTo(50, 300);
// ctx.lineTo(300, 100);
// ctx.closePath()
// ctx.lineTo(400, 200);
// ctx.strokeStyle = 'blue';
// ctx.stroke();

// var colors = ['green', 'red', 'blue'];
// for (var i = 0; i < 100; i++) {
//     var colorsX = colors[Math.floor(Math.random() * 3)]
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     ctx.beginPath();
//     ctx.arc(x, y, 30, 0, Math.PI * 2, false);
//     ctx.strokeStyle = colorsX;
//     ctx.stroke();
// }
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////// animation circle
// var canvas = document.querySelector('canvas');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight-5;

// var c = canvas.getContext('2d');
// var x = Math.random() * innerWidth;
// var y = Math.random() * innerHeight;
// var dx = (Math.random() - 0.5) * 10;
// var dy = (Math.random() - 0.5) * 10;
// var radius = 30;

// function animate() {
//     requestAnimationFrame(animate)
//     c.clearRect(0, 0, innerWidth, innerHeight);
//     c.beginPath();
//     c.arc(x, y, radius, 0, Math.PI * 2, false);
//     c.strokeStyle = 'red'
//     c.stroke();
//     c.fill()
//     if (x + radius > innerWidth || x - radius < 0) {
//         dx = -dx
//     }
//     if (y + radius > innerHeight || y - radius < 0) {
//         dy = -dy
//     }
//     x = x + dx;
//     y = y + dy;
// }
// animate()
///////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////// with structure function
// var canvas = document.querySelector('canvas');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// window.addEventListener('resize', function () {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// });

// var c = canvas.getContext('2d');

// function Circle(x, y, dx, dy, radius) {
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.radius = radius;
//     this.draw = function () {
//         c.beginPath();
//         c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//         c.strokeStyle = 'blue'
//         c.stroke();
//         c.fill()
//     }
//     this.update = function () {
//         if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
//             this.dx = -this.dx
//         }
//         if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
//             this.dy = -this.dy
//         }
//         this.x += this.dx;
//         this.y += this.dy;

//         this.draw();
//     }
// }
// var array = []
// for (var i = 0; i < 100; i++) {
//     var radius = 60;
//     var x = Math.random() * (innerWidth - radius * 2) + radius;
//     var y = Math.random() * (innerHeight - radius * 2) + radius;
//     var dx = (Math.random() - 0.5) * 5;
//     var dy = (Math.random() - 0.5) * 5;

//     array.push(new Circle(x, y, dx, dy, radius));
// }

// function animate() {
//     requestAnimationFrame(animate)
//     c.clearRect(0, 0, innerWidth, innerHeight);

//     for (var i = 0; i < array.length; i++) {
//         array[i].update();
//     }
// }

// animate()
///////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
// var canvas = document.querySelector('canvas');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// window.addEventListener('resize', function () {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     init();
// });


// var c = canvas.getContext('2d');

// var mouse = {
//     x: undefined,
//     y: undefined
// }
// window.addEventListener('mousemove', function (event) {
//     mouse.x = event.x;
//     mouse.y = event.y;
//     console.log(mouse);
// });

// var maxRadius = 40;
// var colorArray = ['#FFF587', '#FF8C64', '#FF665A', '#7D6B7D','#A3 A1A8'];
// // var colorArray = ['#731F35', '#F2F0F0', '#BF6B63', '#F2B6B6','#0D0D0D'];
// // var colorArray = ['#0F9FBF', '#0FAEBF', '#F25D50', '#F27777','#0D0D0D']

// function Circle(x, y, dx, dy, radius) {
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.radius = radius;
//     this.minRadius = radius;
//     this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
//     this.draw = function () {
//         c.beginPath();
//         c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//         c.fillStyle = this.color;
//         c.fill()
//     }
//     this.update = function () {
//         if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
//             this.dx = -this.dx
//         }
//         if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
//             this.dy = -this.dy
//         }
//         this.x += this.dx;
//         this.y += this.dy;
//         if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
//             if (this.radius < maxRadius) {
//                 this.radius += 10;
//             }
//         } else if (this.radius > this.minRadius) {
//             this.radius -= 1;
//         }

//         this.draw();
//     }
// }
// var array = []
// function init() {
//     array = [];
//     for (var i = 0; i < 800; i++) {
//         var radius = Math.random() * 3 + 1;
//         var x = Math.random() * (innerWidth - radius * 2) + radius;
//         var y = Math.random() * (innerHeight - radius * 2) + radius;
//         var dx = (Math.random() - 0.5) * 10;
//         var dy = (Math.random() - 0.5) * 10;

//         array.push(new Circle(x, y, dx, dy, radius));
//     }

// }

// function animate() {
//     requestAnimationFrame(animate)
//     c.clearRect(0, 0, innerWidth, innerHeight);

//     for (var i = 0; i < array.length; i++) {
//         array[i].update();
//     }
// }

// animate()
//////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
// var canvas = document.createElement('canvas');
// document.body.appendChild(canvas);
// canvas.setAttribute('width', '200')
// canvas.setAttribute('height', '200')
// canvas.style.background = '#333'
// var counter = canvas.getContext('2d');
// var no = 0;// starting point
// var start = 4.72;// point from where you want to fill the circle
// var cw = counter.canvas.width; //return canvas width;
// var ch = counter.canvas.height; //return canvas height;
// var diff; //find the diference between current value(no) and targeted value(100);
// function fillCounter() {
//     diff = ((no / 100) * Math.PI * 2 * 10);
//     counter.clearRect(0, 0, cw, ch);
//     counter.lineWidth = 15; //size of stroke
//     counter.fillStyle = '#3498db' //color that yo want to fill in counter circle
//     counter.strokeStyle = '#3498db'; //stroke color
//     counter.textAlign = 'center';
//     counter.font = '25px monospace'; // set font size nad face
//     counter.fillText(no + "%", cw / 2, ch / 2 + 10,cw); // fill text(text,x,y)
//     counter.beginPath();
//     counter.arc(cw / 2, ch / 2, cw / 2 - 10, start, diff / 10 + start,false);//arc(x,y,start,stop)
//     counter.stroke(); //to fill stroke
//     if (no >= 80) {
//         clearTimeout(fill);//fill is a variable that call the function fillCounter()
//     }
//     no++
// }

// var fill = setInterval(fillCounter, 30); //call the fillCounter function after every 50MS