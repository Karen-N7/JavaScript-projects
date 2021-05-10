// class Calculator {
//     constructor(previousOperand, currentOperand) {
//         this.previousOperand = previousOperand; //Object.assign(this, { previousOperand, currentOperand })
//         this.currentOperand = currentOperand
//         this.clear();
//     }
//     clear() {
//         this.currentOperandText = ''
//         this.previousOperandText = ''
//         this.operation = undefined;
//     }
//     delete() {
//         this.currentOperandText = this.currentOperandText.toString().slice(0, -1);
//     }
//     appendNumber(number) {
//         if (number === '.' && this.currentOperandText.includes('.')) return;
//         this.currentOperandText = this.currentOperandText.toString() + number.toString();
//     }
//     chooseOperation(operation) {
//         if (this.currentOperandText === '') return
//         if (this.previousOperandText !== '') {
//             this.compute()
//         }
//         this.operation = operation;
//         this.previousOperandText = this.currentOperandText;
//         this.currentOperandText = '';
//     }
//     compute() {
//         let computation;
//         var prev = parseFloat(this.previousOperandText);
//         var current = parseFloat(this.currentOperandText);
//         if (isNaN(prev) || isNaN(current)) return;
//         switch (this.operation) {
//             case '+':
//                 computation = prev + current;
//                 break;
//             case '-':
//                 computation = prev - current;
//                 break;
//             case '/':
//                 computation = prev / current;
//                 break;
//             case '*':
//                 computation = prev * current;
//                 break;
//             default:
//                 return;
//         }
//         this.currentOperandText = computation;
//         this.previousOperandText = '';
//         this.operation = undefined;
//     }
//     updateDisplay() {
//         this.currentOperand.innerText = this.currentOperandText;
//         if (this.operation != null) {
//             this.previousOperand.innerText = `${this.previousOperandText} ${this.operation}`
//         } else {
//             this.previousOperand.innerText = '';
//         }
//     }
// }

// var numberButtons = document.querySelectorAll('[data-number]');
// var operationButtons = document.querySelectorAll('[data-operation]');
// var deleteButton = document.querySelector('[data-delete]');
// var allClearButton = document.querySelector('[data-all-clear]');
// var equalsButton = document.querySelector('[data-equals]');
// var previousOperand = document.querySelector('[data-previous-operand]');
// var currentOperand = document.querySelector('[data-current-operand]');

// var calculator = new Calculator(previousOperand, currentOperand);

// numberButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         calculator.appendNumber(button.innerText);
//         calculator.updateDisplay();
//     });
// });

// operationButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         calculator.chooseOperation(button.innerText);
//         calculator.updateDisplay();
//     });
// });

// equalsButton.addEventListener('click', () => {
//     calculator.compute();
//     calculator.updateDisplay();
// });

// allClearButton.addEventListener('click', () => {
//     calculator.clear();
//     calculator.updateDisplay();
// });

// deleteButton.addEventListener('click', () => {
//     calculator.delete();
//     calculator.updateDisplay();
// });


////////////////////////////////////////////////////////////////////////
// let calculator = document.querySelector('.calculator-grid')
// let text = 'AC,DEL,/,1,2,3,*,4,5,6,+,7,8,9,-,.,0,='
// //////////////////////////////
// let mutate= ''
// text.split(',').forEach(item=>mutate += `<button>${item}</button>`)
// calculator.innerHTML += mutate

// // text.split(',').forEach(item=>{
// //     let button = document.createElement('button')
// //     button.appendChild(document.createTextNode(item))
// //     calculator.appendChild(button)
// // })
// ////////////////////////////

// class Calculator {
//     constructor(current,previous) {
//         this.current = current
//         this.previous = previous
//         this.clear()
//     }
//     clear() {
//         this.currentValue = ''
//         this.previousValue = ''
//         this.operation = null
//     }
//     delete() {
//         this.currentValue = this.currentValue.slice(0,-1)
//     }
//     appendNumber(number) {
//         if(number == '.' && this.currentValue.includes('.'))return
//         this.currentValue += number
//     }
//     chooseOperation(symbol) {
//         console.log(symbol)
//         if(!this.currentValue)return
//         if(this.previousValue) {
//             this.compute(symbol)
//         }
//         this.previousValue = this.currentValue
//         this.currentValue = ''
//         this.operation = symbol
//     }
//     compute() {
//         let computation;
//         let a = parseFloat(this.previousValue)
//         let b = parseFloat(this.currentValue)
//         if(isNaN(a) || isNaN(b))return // not a number 
//         switch(this.operation) {
//             case '+':computation = a + b; break;
//             case '-':computation = a - b; break;
//             case '*':computation = a * b; break;
//             case '/':computation = a / b; break;
//         }
//         this.currentValue = computation
//         this.previousValue = ''
//         this.operation = null
//     }
//     updateValues() {
//         this.current.innerHTML = this.currentValue
//         if(this.operation) {
//             this.previous.innerHTML = this.previousValue + ' ' + this.operation
//         }else {
//             this.previous.innerHTML = ''
//         }
//     }

// }



// let previous = document.querySelector('.previous-operand')
// let current = document.querySelector('.current-operand')
// let calc = new Calculator(current,previous)

// document.querySelectorAll('button').forEach(button=>{
//     button.addEventListener('click',()=>{
//         let method;
//         let content = button.textContent
//         if(!isNaN(content) ||content == '.'){
//             method = 'appendNumber'
//         } else if(content === '='){
//             method = 'compute'
//         } else if (content === 'AC'){
//             method = 'clear'
//         } else if (content === 'DEL'){
//             method = 'delete'
//         } else {
//             method = 'chooseOperation'
//         }
//         calc[method](content)
//         calc.updateValues()
//     })
// })
