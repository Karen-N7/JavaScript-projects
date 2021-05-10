////////////////////////////////// calc select
// var btn = document.getElementById('btn');
// btn.addEventListener('click', process);

// function process() {
//     var a = parseFloat(document.getElementById('value1').value);
//     var b = parseFloat(document.getElementById('value2').value);
//     var opp = document.getElementById('opperator').value;
//     var result = document.getElementById('result');
//     var calculate;
//     if (opp == 'add') {
//         calculate = a + b;
//     } else if (opp == 'minus') {
//         calculate = a - b;
//     } else if (opp == 'divide') {
//         calculate = a / b;
//     } else if (opp == 'multiply') {
//         calculate = a * b;
//     }
//     result.value = calculate;
//     document.getElementById('test').innerHTML = calculate;
// }
//////////////////////////////////////////////////////////

////////////////////////////////////// calc 
// var textView = document.getElementById('textView');

// function insert(num) {
//     textView.value += num;
// }

// function equal() {
//     var exp = textView.value;
//     textView.value = eval(exp);
// }

// function back() {
//     var exp = textView.value;
//     textView.value = exp.substr(0,exp.length - 1);
// }

// function clean() {
//     textView.value = '';
// }


// document.getElementById('clean').onclick = function() { clean() };
// document.getElementById('back').onclick = function() { back() };
// document.getElementById('divide').onclick = function() { insert('/') };
// document.getElementById('multiply').onclick = function() { insert('*') };
// document.getElementById('seven').addEventListener('click', () => { insert(7) });
// document.getElementById('eight').onclick = function() { insert(8) };
// document.getElementById('nine').onclick = function() { insert(9) };
// document.getElementById('minus').onclick = function() { insert('-') };
// document.getElementById('four').onclick = function() { insert(4) };
// document.getElementById('five').onclick = function() { insert(5) };
// document.getElementById('six').onclick = function() { insert(6) };
// document.getElementById('plus').onclick = function() { insert('+') };
// document.getElementById('one').onclick = function() { insert(1) };
// document.getElementById('two').onclick = function() { insert(2) };
// document.getElementById('three').onclick = function() { insert(3) };
// document.getElementById('equal').onclick = function() { equal() };
// document.getElementById('zero').onclick = function() { insert(0) };
// document.getElementById('dott').onclick = function() { insert('.') };
///////////////////////////////////////////// calc




var textView = document.getElementById('textView');

function insert(num) {
    textView.value += num;
}

function equal() {
    textView.value = eval(textView.value);
}

function back() {
    textView.value =  textView.value.slice(0,- 1);
}

function clean() {
    textView.value = '';
}

document.querySelectorAll('button').forEach(button=>{
    button.addEventListener('click',()=>{
        let text = button.innerText //.attributes.attributeName.value //.dataset.num//.value
        switch(text){
            case 'C':
                clean()
                break;
            case '<':
                back()
                break;
            case '=':
                equal()
                // computate(text)
                break;
                default : 
                insert(text)
        }
    })
})

// function computate() {
//     let values = textView.value
//     let test = values.split('')
//     let symb;
//     test.forEach(item=>{
//         if(!parseFloat(item)) {
//              symb = item
//         }
//     })
//     let a = parseInt(values.slice(0,values.indexOf(symb)))
//     let b = parseInt(values.slice(values.indexOf(symb) + 1,values.length))

//     if(!a || !b) return
//         let compute;
//         switch(symb) {
//             case '+':
//                 compute = a + b
//                 break;
//             case '-':
//                 compute = a - b
//                 break;
//             case '*':
//                 compute = a * b
//                 break;
//             case '/': 
//                 compute = a / b
//                 break;
//         }
//     textView.value = compute
// }