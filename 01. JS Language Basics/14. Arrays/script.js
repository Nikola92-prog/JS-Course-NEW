/****************************
* ARRAYS - multivalue variables

*/

var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

//Arrays are zero based, means first thing has value of 0

console.log(names);
console.log(names[2]);

//MUTATE ARRAY DATA
names [1] = 'Ben';
console.log(names);

names[names.lenght] = 'Mary';
console.log(names);

//DIFFERENT DATA TYPES
var john = ['John', 'Smith', 1990, 'teacher', false];
john.push('blue'); //adds element at end of array
john.unshift('Mr.'); //adds element at the beginning
console.log(john);

john.pop(); //REMOVES LAST ELEMENT IN ARRAY
john.shift(); //REMOVES FIRST ELEMENT IN ARRAY
console.log(john);

console.log(john.indexOf(1990)); //shows on which position is element

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer'
: 'John IS a designer';
console.log(isDesigner);