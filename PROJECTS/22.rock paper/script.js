// (function () {


var images = document.querySelectorAll('[data-key]')
var score = document.querySelector('.score')
var resultInfo = document.querySelector('.resultInfo')
var userScore = 0;
var compScore = 0;

function getCompChoice() {
    var choices = ['r', 'p', 's']
    var choice = Math.floor(Math.random() * choices.length)
    return choices[choice]
}

function grow(letter) {
    if (letter == 'r') return 'rock';
    if (letter == 'p') return 'paper';
    return 'scissors'
}

function search(userChoice, color) {
    var searchResult = document.querySelector(`[data-key=${userChoice.slice(0, 1)}]`)
    searchResult.style.boxShadow = `0 0 5px 5px ${color}`
    setTimeout(() => {
        searchResult.style.boxShadow = ''
    }, 500)
}

function render(res, userChoice, compChoice) {
    userChoice = grow(userChoice)
    compChoice = grow(compChoice)
    var user = ' user '.sub().fontsize(3)
    var comp = ' comp '.sub().fontsize(3)
    var color;
    if (res == 'win') {
        userScore++
        resultInfo.innerHTML = `${userChoice + user} beats ${compChoice + comp}. You win 🔥`;
        resultInfo.style.color = 'green'
        color = 'green'
    } else if (res == 'lose') {
        compScore++
        resultInfo.innerHTML = `${userChoice + user} loses ${compChoice + comp}. You lost... 💩`;
        resultInfo.style.color = 'red'
        color = 'red'
    } else {
        resultInfo.innerHTML = `draw`
        resultInfo.style.color = 'orange'
        color = 'orange'
    }
    search(userChoice, color)
    score.innerHTML = `${userScore} : ${compScore}`
}

function game(userChoice) {
    var compChoice = getCompChoice()
    var result;
    switch (userChoice + compChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            result = 'win'
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            result = 'lose'
            break;
        default:
            result = 'draw'
            break;
    }
    render(result, userChoice, compChoice)
}

for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function () {
        var imgName = this.getAttribute('data-key')
        game(imgName)
    })
}


// })()