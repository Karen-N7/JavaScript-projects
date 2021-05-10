// var obj = {
//     name: 'John',
//     surname: 'Wick',
//      get fullName() {
//         return `${this.name} ${this.surname}`
//     },
//     set _fullName(value) {
//         var parts = value.split(' ')
//         this.name = parts[0]
//         this.surname = parts[1]
//     }
// }
// obj._fullName = 'Tom Carter'

// console.log(obj.fullName)
///////////////////////////////////////////////////

//////////////////////////////////////////////////////// in & of
// var obj = {
//     person_1: 'john',
//     person_2: 'tom'
// }

// if ('person_1' in obj) {
//     console.log('person exist in list')
// }
////////------------------------------------------------
// var obj = {
//     x: 3,
//     y: 5
// }
// for(var each in obj) {
//     console.log(each.repeat(3))
// }
// console.log(Object.keys(obj))
//////////////---------------------------------------
// let animals = ['🐔', '🐷', '🐑', '🐇'];
// let names = ['Gertrude', 'Henry', 'Melvin', 'Billy Bob'];

// for (let animal of animals) {
//   // Random name for our animal
//   let random = Math.floor(Math.random() * names.length);

//   console.log(`${names[random]} the ${animal}`);
// }
////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////freeze/seal & defineProperty
// var obj = {
//     x: 5,
//     y: 10
// }
// Object.defineProperty(obj, 'z', {
//     value: 15,
//     writable: true,
//     configurable: true,
//     enumerable: true
// })
// Object.freeze(obj) //seal() we cant delete or create / freeze() we cant delete,create or change
// delete obj.x
// console.log(obj)
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// function User(name, birthday) {
//     this.name = name;
//     this.birthday = birthday;

//     Object.defineProperty(this, "age", {
//       get: function() {
//         var today = new Date();
//         var yearDelta = today.getFullYear() - this.birthday.getFullYear();

//         if (today.getMonth() > this.birthday.getMonth() ||
//           (today.getMonth() === this.birthday.getMonth() && today.getDate() >= this.birthday.getDate())) {
//           return yearDelta;
//         }

//         return yearDelta - 1;
//       }
//     });
//   }

//   var pete = new User("Петя", new Date(1991, 09, 25));

//   console.log( pete.birthday );
//   console.log( pete.age );
//--------------------------------------------------
// var user = {}

// Object.defineProperties(user, {
//   firstName: {
//     value: "Tom"
//   },

//   surname: {
//     value: "Clancys"
//   },

//   fullName: {
//     get: function() {
//       return this.firstName + ' ' + this.surname;
//     }
//   }
// });

// console.log( user.fullName );
///--------------------------------------------
// var obj = {
//     a: 1,
//     b: 2,
//     internal: 3
//   };

//   Object.defineProperty(obj, "internal", {
//     enumerable: false
//   });

//   console.log( Object.keys(obj) );
//   console.log( Object.getOwnPropertyNames(obj) )
///--------------------------------------------
// const object1 = {};

// Object.preventExtensions(object1);
//   Object.defineProperty(object1, 'property1', {
//     value: 42
//   });
//   object1.bla = 'bla'

//   console.log(object1)
/////////////////////////////////////////////////

// var pro = {
//     prop1: 1,
//     fromPro() {
//         console.log('fromPro() method')
//     }
// }
// var pro2 = {}

// var exem = Object.create(pro,{
//     prop2: {
//         value: 2,
//         writable: true,
//         configurable: true,
//         enumerable: true
//     }
// })

// Object.defineProperty(exem,'prop3',{
//     value: 3,
//     writable: true,
//     configurabel: true,
//     enumerable: true
// })

// Object.setPrototypeOf(exem,pro2)
// console.log({exem})

/*  property descriptors
 *                 seal()     freeze()  preventExtensions()
 *Add new prop          no         no       no
 *Edit prop value       yes        no       yes
 *Delete a prop         no         no       yes
 *Change descriptors    no         no       yes
 *Reassign __Proto__    no         no       no
 * var check = exem.__proto__ == Object.getPrototypeOf(exem);console.log(check);
 *Object.isExtensible(obj)  Object.isSealed(obj)   Object.isFrozen(obj)
 */
//////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
function Test() {
    let running,
        startTime,
        endTime,
        duration = 0;
    this.start = function () {
        if (running) throw new Error('Stopwatch is already started');
        startTime = new Date();

        running = true;
    };
    this.stop = function () {
        if (!running) console.error('you should first run Stopwatch');
        running = false;
        endTime = new Date();
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };
    this.reset = function () {
        running = false;
        startTime = null;
        endTime = null;
        duration = 0;
    };
    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        },
        set: function (value) {
            duration = value;
        },
    });
}

var test = new Test();
test.duration = 'bla';
console.log(test.duration);

var btnStart = document.body.appendChild(document.createElement('button'));
btnStart.innerHTML = 'Start';
var btnStop = document.body.appendChild(document.createElement('button'));
btnStop.innerHTML = 'Stop';
var reset = document.body.appendChild(document.createElement('button'));
reset.innerHTML = 'Reset';
btnStart.addEventListener('click', () => {
    test.start();
});
btnStop.addEventListener('click', () => {
    test.stop();
    console.log(test.duration);
});
reset.addEventListener('click', () => {
    test.reset();
});
