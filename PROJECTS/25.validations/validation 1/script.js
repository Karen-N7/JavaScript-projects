// var btn = document.getElementById('btn');
// btn.addEventListener('click', () => {
//     validateName()
//     validateLastName()
//     validatePassword()
// })

// document.querySelector('#name').addEventListener('keyup', validateName);

// function validateName() {
//     var name = document.getElementById('name').value;
//     if (name.length == 0) {
//         producePrompt('first', 'required name', 'red')
//     } else if (name.length > 10) {
//         producePrompt('first', 'Name is to long', 'red')
//     } else {
//         producePrompt('first', 'name ' + name + ' granted', 'green')
//     }
// }
// document.querySelector('#lastname').addEventListener('keyup', validateLastName);

// function validateLastName() {
//     var lastName = document.getElementById('lastname').value;
//     if (lastName.length == 0) {
//         producePrompt('second', 'required last name', 'red')
//     } else if (lastName.length > 10) {
//         producePrompt('second', 'Name is to long', 'red')
//     } else {
//         producePrompt('second', 'last name ' + lastName + ' granted', 'green')
//     }
// }
// document.querySelector('#password').addEventListener('keyup', validatePassword);

// function validatePassword() {
//     var password = document.getElementById('password').value;
//     if (password.length == 0) {
//         producePrompt('third', 'required password', 'red')
//     } else if (password.length > 10) {
//         producePrompt('third', 'password is to long', 'red')
//     } else {
//         producePrompt('third', 'password ' + password + ' granted', 'green')
//     }
// }

// function producePrompt(location, message, color) {
//     var search = document.getElementById(location)
//     search.innerHTML = message;
//     search.style.color = color;
//     setTimeout(() => {
//         search.innerHTML = ''
//     }, 2000)
// }



function validateInput(e) {
    let {name,value} = e.target ? e.target: e

    if (value.length == 0) {
        producePrompt(name, 'required ' + name, 'red')
    } else if (value.length > 8) {
        producePrompt(name, name + ' is to long', 'red')
    } else {
        producePrompt(name, 'value ' + value + ' granted', 'lime')
    }
}

function producePrompt(id, message, color) {
    var label = document.getElementById(id)
    label.innerHTML = message;
    label.style.cssText = `color: ${color};transition: .7s;opacity: 1`
    setTimeout(() => {
        label.style.opacity = 0
        setTimeout(()=>{
            label.innerHTML = ''
        },1000)
    }, 3000)
}


let inputs = document.querySelectorAll('input')
inputs.forEach(input=>{
    input.addEventListener('keyup',validateInput)
})

document.getElementById('btn').onclick =()=>{
    inputs.forEach(input=>{
        validateInput(input)
    })
}
