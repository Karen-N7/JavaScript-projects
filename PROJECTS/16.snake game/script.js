// var cvs = document.getElementById('snake');
// var ctx = cvs.getContext('2d');

// const box = 32;

// const ground = new Image();
// ground.src = "img/ground.png";
// const foodImage = new Image();
// foodImage.src = 'img/food.png';

// let dead = new Audio();
// let eat = new Audio();
// let left = new Audio();
// let up = new Audio();
// let right = new Audio();
// let down = new Audio();


// dead.src = 'audio/dead.mp3';
// eat.src = 'audio/eat.mp3';
// left.src = 'audio/left.mp3';
// up.src = 'audio/up.mp3';
// right.src = 'audio/right.mp3';
// down.src = 'audio/down.mp3'

// let snake = [];
// snake[0] = {
//     x: 9 * box,
//     y: 10 * box
// }

// let food = {
//     x: Math.floor(Math.random() * 17 + 1) * box,
//     y: Math.floor(Math.random() * 15 + 3) * box
// }

// let score = 0;
// let d;
// document.addEventListener('keydown', (e) => {
//     if (e.keyCode == 37 && d != 'RIGHT') {
    //         d = 'LEFT'
    //         audios.right.play();
//     } else if (e.keyCode == 38 && d != 'DOWN') {
    //         d = 'UP'
    //         audios.up.play();
//     } else if (e.keyCode == 39 && d != 'LEFT') {
    //         d = 'RIGHT'
    //         audios.left.play();
//     } else if (e.keyCode == 40 && d != 'UP') {
    //         d = 'DOWN'
    //         audios.down.play();
//     }
// });

// function collision(head, array) {
//     for (let i = 0; i < array.length; i++) {
//         if (head.x == array[i].x && head.y == array[i].y) {
//             return true;
//         }
//     }
//     return false;
// }

// function draw() {
//     ctx.drawImage(ground, 0, 0)
//     for (let i = 0; i < snake.length; i++) {
//         ctx.fillStyle = (i == 0) ? 'green' : 'white';
//         ctx.fillRect(snake[i].x, snake[i].y, box, box);

//         ctx.strokeStyle = 'red';
//         ctx.strokeRect(snake[i].x, snake[i].y, box, box);
//     }
//     ctx.drawImage(foodImage, food.x, food.y);
//     let snakeX = snake[0].x;
//     let snakeY = snake[0].y;
//     if (d == 'LEFT') snakeX -= box;
//     if (d == 'RIGHT') snakeX += box;
//     if (d == 'UP') snakeY -= box;
//     if (d == 'DOWN') snakeY += box;
//     if (snakeX == food.x && snakeY == food.y) {
//         score++;
//         audios.eat.play();
//         food = {
//             x: Math.floor(Math.random() * 17 + 1) * box,
//             y: Math.floor(Math.random() * 15 + 3) * box
//         }
//     } else {
//         snake.pop();
//     }
//     let newHead = {
//         x: snakeX,
//         y: snakeY
//     }
//     if (snakeX < box || snakeX > 17 * box || snakeY < 3 * box || snakeY > 17 * box || collision(newHead, snake)) {
//         clearInterval(game);
//         audios.dead.play();
//     }
//     snake.unshift(newHead)
//     ctx.fillStyle = 'white'
//     ctx.font = '45px Changa one';
//     ctx.fillText(score, 2 * box, 1.6 * box);
// }

// let game = setInterval(draw, 300)










var ctx = document.querySelector('canvas').getContext('2d')

let images = {}
let imageNames = ['ground','food']
imageNames.forEach(imageName=>{
    images[imageName] = document.createElement('img')
    images[imageName].src = 'img/' + imageName + '.png'
})

let audios = {}
let sounds = ['left','right','up','down','dead','eat']
sounds.forEach(sound=>{
    audios[sound] = document.createElement('audio')
    audios[sound].src = 'audio/' + sound + '.mp3'
}) 

var box = 32;
var direction;

var food = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box
}

var snake = [{
    x: 2 * box,
    y: 3 * box
}]



document.addEventListener('keydown', (e) => {
    switch(e.keyCode) {
        case 37:
            direction = 'LEFT'
            audios.left.play()
            break;
        case 38: 
            direction = 'UP'
            audios.up.play()
            break;
        case 39:
            direction = 'RIGHT'
            audios.right.play()
            break;
        case 40:
            direction = 'DOWN'
            audios.down.play()
    }
})

function collision(head, arr) {
    arr.forEach(each => {
        if (head.x == each.x && head.y == each.y) {
            return true
        }
    })
    return false
}

function draw() {
    ctx.drawImage(images.ground, 0, 0)
    ctx.drawImage(images.food, food.x, food.y)
    for (var i = 0; i < snake.length; i++) {
        ctx.fillStyle = i === 0 ?'red' : 'white'
        ctx.fillRect(snake[i].x, snake[i].y, box, box)
        ctx.strokeStyle = '#000'
        ctx.strokeRect(snake[i].x, snake[i].y, box, box)
    }
    var snakeX = snake[0].x
    var snakeY = snake[0].y

    if (direction == 'LEFT') snakeX -= box
    if (direction == 'UP') snakeY -= box
    if (direction == 'RIGHT') snakeX += box
    if (direction == 'DOWN') snakeY += box
    var snakeHead = {
        x: snakeX,
        y: snakeY
    }
    if (snakeHead.x == food.x && snakeHead.y == food.y) {
        food = {
            x: Math.floor(Math.random() * 17 + 1) * box,
            y: Math.floor(Math.random() * 15 + 3) * box
        }
        audios.eat.play()
    } else {
        snake.pop()
    }
    if (snakeHead.x > 17 * box || snakeHead.x < box || snakeHead.y < 3 * box || snakeHead.y > 17 * box || collision(snakeHead, snake)) {
        clearInterval(game)
        audios.dead.play()
    }
    snake.unshift(snakeHead)
    console.log(snake)
}
var game = setInterval(draw, 500)