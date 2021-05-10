// ABCDEFGHIJKLMNOPQRSTUVWXYZ
///////////////////////////////////////////////////SWITCH
// var animals = ["dunky", "monkey", "giraf", "spoong bob", "dinosaur"];
// let text;
// document.addEventListener('keydown',(e)=>{
//     if (e.which === 13 || e.keyCode === 13) {
//       let animal = animals[Math.floor(Math.random() * animals.length)];
//       if (animals == "dunky" || animals == "monkey" || animals == "giraf") {
//         text = " - this animals will go in Noah's Ark";
//       } else if (animals == "Spoong Bob") {
//         text = " - spoong bob was not animals";
//       } else if (animals == "dinosaur") {
//         text = " - this animals will not go in ark";
//       } else {
//         text = " - this animals will  not go in ark";
//       }
//       document.body.innerHTML = animal;
//       setTimeout(() => {
//         document.body.innerHTML += text + '<br/>';
//       }, 1000);
//     }
// })

//////---------------------------------alternative
// var animals = ["dunky", "monkey", "giraf", "spoong bob", "dinosaur"];
// let text;
// function render(e) {
//   if (e.which === 13 || e.keyCode === 13) {
//     var animal = animals[Math.floor(Math.random() * animals.length)];
//     switch (animal) {
//       case "dunky":
//       case "monkey":
//       case "giraf":
//         text = " - this animal will go in Noah's Ark";
//         break;
//       case "spoong bob":
//         text = " - spoong bob was not animal";
//         break;
//       case "dinosaur":
//       default:
//         text = " - this animal will not go in ark";
//     }
//     document.body.innerHTML = animal;
//     setTimeout(() => {
//       document.body.innerHTML += text + "<br/>";
//     }, 1000);
//   }
// }

// document.addEventListener("keydown", render);
//////////////////////////////////////////////////

//////////////////////////////////////////////////MENU
// var btn = document.createElement('button');
// document.body.appendChild(btn);
// btn.innerHTML = '&equiv;';

// let ul = document.createElement('ul');
// document.body.appendChild(ul);

// var text = 'home about contact';
// var array = text.split(' ')

// for (let each of array) {
//     let li = document.createElement('li');
//     ul.appendChild(li);
//     li.innerHTML = each;
// }
// let status = true;
// btn.addEventListener('click', () => {
//     // if (status == true) {
//     //     ul.style.display = 'none';
//     //     status = false;
//     // } else if (status == false) {
//     //     ul.style.display = 'block';
//     //     status = true;
//     // }
//     status = !status
//     ul.style.display = status ? 'block' : 'none'
// })
/////////////////////////////////////////////////////////

//////////////////////////////////////////////////// Math.floor
// var array = [
//     ["monkey", "dunky", "tironosaur Rex", "Spoonge Bob"],
//     ["drunk", "terrorist", "stupid", "big", "awesome", "smart"],
//     ["can", "can't", "shood"]
// ];

// function getRandomWord(selectedArray){
//     return selectedArray[Math.floor(Math.random()* selectedArray.length)]
// }
// let count = 0
// document.body.addEventListener('keydown', () => {
//     count++
//     let animal = getRandomWord(array[0])
//     let status =getRandomWord(array[1])
//     let access = getRandomWord(array[2])
//     let total = `${count}. - the ${animal} is ${status} so he ${access} go to Ark <hr/>`
//     document.body.insertAdjacentHTML('afterend', total);
// });

//////////////////////////////////////////////////////////

//////////////////////////////////////////////////// for of
// let ul = document.createElement("ul");
// document.body.appendChild(ul);
// let fruitList = ["banana","apple","mango"];

// for (let fruit of fruitList) {
//     let li = document.createElement("li");
//     ul.appendChild(li);
//     li.textContent = fruit;
// }
/////////////////////////////////////////////////////////

// //////////////////////////////////////////// classList methods
// let firstTag = document.body.appendChild(document.createElement("firstTag"));
// document.body.appendChild(document.createElement("secondTag"));
// console.log(document.body.children);
// console.log(document.body.childNodes); //each linebreak was childNode named text
// firstTag.parentElement.insertBefore(firstTag, firstTag.parentElement.children[0]);
// firstTag.classList.add("my-class");
// firstTag.classList.remove("my-class");
// firstTag.classList.toggle("my-class");//replace if exist, add if not exist
// firstTag.classList.replace("my-class","otherClass");
// let wasContain = firstTag.classList.contains("my-class");// true
// let wasContain = firstTag.classList.contains("otherName");// false
////////////////////////////////////////

//////////////////////////////////////// calc with input event
// var input1 = document.createElement('input');
// document.body.appendChild(input1);
// var input2 = document.createElement('input');
// document.body.appendChild(input2);
// var input3 = document.createElement('input');
// document.body.appendChild(input3);
// input1.addEventListener('input', process);
// input2.addEventListener('input', process);

// function process() {
//     var a = parseFloat(input1.value) || 0;
//     var b = parseFloat(input2.value) || 0;
//     input3.value = a + b;
// }
//////////////////////////////////////////////////

///////////////////////////////////////////// onblur
// var test = document.createElement('input');
// document.body.appendChild(test).onblur = () => {
//     test.value = "the text was changed";
// };
///////////////////////////////////////////////////

//////////////////////////////////////////////////  Method 1
// let name = document.createElement('input');
// document.body.appendChild(name);
// let surname = document.createElement("input");
// document.body.appendChild(surname);
// let btn = document.createElement("button");
// document.body.appendChild(btn);
// btn.style.cssText = "width: 50px;heght 50px;";
// btn.textContent = "click"

// btn.addEventListener("click", () => {
//     let p = document.createElement("p");
//     document.body.appendChild(p);
//     p.textContent = `${name.value} ${surname.value}`;
// });
/////////////////////////////////////////////////////// method 2 - included object
// var firstname = document.body.appendChild(document.createElement('input'))
// var lastname = document.body.appendChild(document.createElement('input'))
// var password = document.body.appendChild(document.createElement('input'))

// document.body.appendChild(document.createElement('button')).addEventListener('click', () => {
//     var total = {
//         firstname: firstname.value,
//         lastname: lastname.value,
//         password: password.value
//     }

//     var p = document.body.appendChild(document.createElement('p'));
//     p.textContent = total.firstname + ' ' + total.lastname;
//     firstname.value = ''
//     lastname.value = ''
// })
///////////////////////////////////////////////////  Method 3 -  included object and array
// let name = document.body.appendChild(document.createElement('input'));
// let surname = document.body.appendChild(document.createElement('input'));
// let btn = document.body.appendChild(document.createElement("button"));
// let p = document.body.appendChild(document.createElement('p'));

// let arr = [];
// function loopContent() {
//     for (var i = 0; i < arr.length; i++) {
//         var result = arr[i].name + " " + arr[i].surname + '<br>';
//     }
//     p.innerHTML += result;
// }

// btn.addEventListener('click', () => {
//     let obj = {
//         name: name.value,
//         surname: surname.value
//     }
//     name.value = ''
//     surname.value = ''
//     arr.push(obj)
//     loopContent()
// });
////////////////////////////////////////////// Method 4
// var input_1 = document.body.appendChild(document.createElement('input'));
// var input_2 = document.body.appendChild(document.createElement('input'));
// let ul = document.body.appendChild(document.createElement('ul'))
// var clear = document.body.appendChild(document.createElement('div'));
// clear.innerHTML = '&times;'
// let allPersons = []
// let count= 0;
// let stored = storage('get')
// if(stored) {
//     allPersons = stored
//     getValues(allPersons)
// } else {
//     // allPersons = []
// }

// function setValues(firstname, lastname) {
//     count++
//     let li = ul.appendChild(document.createElement('li'))
//     li.innerHTML = `person ${count}. - ${firstname} ${lastname}<hr/>`;
// }

// function getValues(allPersons) {
//     allPersons.forEach(item => {
//         setValues(item.firstname, item.lastname);
//     });
// }

// function storage(query,arr){
//     if(query === 'set') {
//         sessionStorage.setItem('person',JSON.stringify(arr))
//     } else {
//         return JSON.parse(sessionStorage.getItem('person'))
//     }
// }


// var btn = document.body.insertBefore(document.createElement("button"), ul)
// .addEventListener("click", () => {
//     let person ={
//         firstname: input_1.value,
//         lastname: input_2.value
//     }
//         if (person.firstname && person.lastname) {
//             setValues(person.firstname, person.lastname);
//             allPersons.push(person)
//             storage('set',allPersons)
//             input_1.value = '';
//             input_2.value = '';
//         }
//     });
// clear.addEventListener('click', () => {
//     sessionStorage.clear();
//     location.reload();
// });

