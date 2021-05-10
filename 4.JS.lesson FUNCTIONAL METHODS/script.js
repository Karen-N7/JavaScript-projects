////////////////////////////////////////////////////functoinal methods
const companies = [
    { name: 'Company one', category: 'Finance', start: 1981, end: 2003 },
    { name: 'Company two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company three', category: 'Auto ', start: 1999, end: 2007 },
    { name: 'Company four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company six', category: 'Finance', start: 1987, end: 1996 },
]

const ages = [12, 34, 2, 45, 65, 23, 42, 12, 8, 56]
//// ---------------------------------------------------------------------------forEach
// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

// companies.forEach(function(company) {
//     console.log(company);
// });

// companies.forEach(companies => console.log(companies));
//// ----------------------------------------------------------------------------filter
// var test = [];
// for (var i = 0; i < ages.length; i++) {
//     if (ages[i] > 45) {
//         test.push(ages[i]);
//     }
// }
// console.log(test);

// var test = ages.filter(function(age) {
//     if (age > 45) {
//         return true;
//     }
// });

// var test = ages.filter(function(age) {
//     return age > 45
// });

// var test = ages.filter(age => age > 45);

// var test = companies.filter(company => company.category == 'Retail');
// var test = companies.filter(company => company.start >= 1980 && company.end <= 2003);
// var test = companies.filter(company => company.end - company.start > 10);
// console.log(test);
////---------------------------------------------------------------------------------map
// var array = []
// for (var i = 0; i < companies.length; i++) {
//     array.push(companies[i].name + companies[i].end);
// }
// console.log(array)
// var test = companies.map(company => company.name + company.end);

// var test = companies.map(function(company) {
//     return company;
// });

// var test = ages.map(age => age * 2);

// console.log(test);
////---------------------------------------------------------------------------------sort
// var test = companies.sort(function(a, b) {
//     if (a.start > b.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// });
// var test = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// var test = companies.sort((a,b)=>a.start - b.start)

// var test = ages.sort((a, b) => a - b);
////---------------------------------------------------------------------------------reduce
// var test = ages.reduce((a, b) => a + b);
// console.log(test);
////----------------------------------------------------------------------TOTAL WORK
// var test = ages
//     .map(age => age * 2)
//     .filter(age => age >= 40)
//     .sort((a, b) => a - b)
//     .reduce((a, b) => a + b, 0)
// console.log(test);
