// OOP
//                         - encapsulation, inheritance, polymorphism -

//----------------------------------------------object
// var person2 = new Object();
// person2.name = 'Alex';
// person2.lastname = 'Carter';
// person2.process = function() {
//     return person2.name + ' ' + person2.lastname + '<br>';
// }

// person2.name = 'Matt'
// document.write(person2.process());
// // ----------------------------------------------object literal
// var Person2 = {
//     name: 'Alex',
//     lastName: 'Carter',
//     process() { //function: process()
//         return person2.name + ' ' + person2.lastName;
//     }
// }
// person2.name = 'Matt'
// document.write(person2.process());
///////////////////////////////////////////////////////

/////////////////////////////////////////////////////////// call, apply, bind
// var animal = {
//     species: 'lion'
// }

// var process = function(a,b) {
//     console.log(`${this.species}s was ${a} and they live in ${b}`)
// }

// process.call(animal,'hunters','Africa')
//---------------------------------------------apply
// var animal = {
//     species: 'lion'
// }
// var array = ['hunters','Africa']

// var process = function(a,b) {
//     console.log(`${this.species}s was ${a} and they live in ${b}`)
// }

// process.apply(animal,array)
//---------------------------------------------bind
// var animal = {
//     species: 'lion'
// }
// var process = function(a,b) {
//     console.log(`${this.species}s was ${a} and they live in ${b}`)
// }

// var activate = process.bind(animal,'hunters','Africa')
// var button = document.body.appendChild(document.createElement('button'))
// button.innerHTML = 'click'
// button.addEventListener('click', activate)
////////////////////////////////////////////////////////

// OOP - Creational patterns
////////////////////////////////////////////////////////////Factory
// function userInfo(name, age) {  // camelCase notation
//     let someObj=  {
//        name : name,
//        age : age,
//        process: function() {
//            console.log(name + 'was' + age + 'older')
//       }
//     };
//     return someObj
//  }

//  let userInfo1 = userInfo("Tom", 23)
//  userInfo1.process()
//------------------------------------------------------ Factory - modern way
//  function userInfo(name, age) {  // camelCase notation
//     return {
//       name,
//       age,
//       process(){
//           console.log(`${name} was ${age} older`)
//       }
//     }
//   };

//   let userInfo1 = userInfo("Tom", 23);
//   userInfo1.process()
/////////////////////////////////////// Constructor
// function Animal(type, skinColor, leavingPlace) {   //Pascal notation
//     this.type = type;
//     this.skinColor = skinColor;
//     this.leavingPlace = leavingPlace;
//     this.aboutAnimal = function() {
//         return this.type + ' ' + this.skinColor + ' ' + this.leavingPlace + '<br>';
//     }
//     this.revise = function(newSkinColor) {
//         this.skinColor = newSkinColor;
//         this.revised = true;
//     }
// }

// var ant = new Animal('insect', 'red', 'desert');
// document.write(ant.aboutAnimal());

// var monkey = new Animal('monkey', 'grey', 'jungle');
// monkey.revise('black');
// document.write(monkey.aboutAnimal());
/////---------------------------------------Magazine Constructor
// function Animal(type, skinColor, leavingPlace) {   //Pascal notation
//     this.type = type;
//     this.skinColor = skinColor;
//     this.leavingPlace = leavingPlace;
//     this.aboutAnimal = function() {
//         return this.type + ' ' + this.skinColor + ' ' + this.leavingPlace + '<br>';
//     }
//     this.revise = function(newSkinColor) {
//         this.skinColor = newSkinColor;
//         this.revised = true;
//     }
// }
// function Magazine(type, skinColor, leavingPlace, month) {
//     Animal.call(this, type, skinColor, leavingPlace);
//     this.month = month;
// }

// var test = new Magazine('humanoid', 'grey', 'earth', 'jan')
// document.write(test.aboutAnimal())
// ------------------------------------------------------ constructor combine with prototype
// function Person(name, lastName, age) {
//     this.name = name;
//     this.lastName = lastName;
//     this.age = age;
// }

// Person.prototype.process = function () {
//     var currentAge = new Date().getFullYear() - this.age;
//     return `${this.name} ${this.lastName} was ${currentAge} years old`;
// }

// Person.prototype.revise = function (newName) {
//     this.name = newName;
//     this.revised = true;
// }
// var person1 = new Person('John', 'Doe', 1991);

// console.log(person1);
// person1.revise('Tom');
// console.log(person1);
// // // ------------------------------ Magazine Constructor combine with prototype
// function Person(name, lastName, age) {
//     this.name = name;
//     this.lastName = lastName;
//     this.age = age;
// }

// Person.prototype.process = function () {
//     var currentAge = new Date().getFullYear() - this.age;
//     return `${this.name} ${this.lastName} was ${currentAge} years old`;
// }

// function Magazine(name, lastName, age,eyeColor) {
//     Person.call(this,name, lastName, age);
//     this.eyeColor = eyeColor;
// }
// // Magazine.prototype = Object.create(Person.prototype);
// // Magazine.prototype.constructor = Magazine;
// Object.setPrototypeOf(Magazine.prototype,Person.prototype)

// Magazine.prototype.someMethod = function() {
//     console.log('some method')
// }

// var person_1 = new Magazine('Tom','Winstone',1961,'green')
// console.dir(Person)
// console.dir(person_1);
////////////////////////////////////////////

///////////////////////////////////////////////// Object.create
// var Animal = {
//     type: 'reptile',
//     skinColor: 'green',
//     'leaving place': 'forest',
//     display: function () {
//         document.write(this.type + ' ' + this.skinColor + ' ' + this['leaving place'] + '<br>');
//     }
// }
// var ant = Object.create(Animal)
// ant.type = 'insect';
// ant['leaving place'] = 'desert';
// ant.display();

// var monkey = Object.create(Animal);
// monkey['leaving place'] = 'jungle';
// monkey.display();

// console.dir(Animal)
// console.dir(ant)

/////////////////////////////////////////////////// classes
// class Book {
//     constructor(title, author, year) {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }
//     getAuthorName() {
//         return `The author name was ${this.author}`;
//     }
// }

// var authorName = new Book('The Avengers', 'John', 2015);
// console.log(authorName.getAuthorName());
// console.dir(authorName)
// /////////////////////////////////////////////////////////// new keyword
// function Person(name) {
//     this.name = name;
// }

// Person.prototype.process = function () {
//     var currentAge = new Date().getFullYear() - this.age;
//     return `${this.name} ${this.lastName} was ${currentAge} years old`;
// }
// var person1 = new Person('John');

// // // let _new = function(constructor,name) {
// // //     let obj = {}
// // //     Object.setPrototypeOf(obj,constructor.prototype)
// // //     constructor.call(obj,name)
// // //     return obj
// // // }

// // // let person1 = _new(Person,'John')

// console.dir(Person)
// console.dir(person1)

