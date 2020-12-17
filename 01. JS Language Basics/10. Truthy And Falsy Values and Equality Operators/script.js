/****************************
* Truthy and Falsy Values and Equality Operators

*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height = 23;

if (height) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

var height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height === '23') {
    console.log('The == operator does type coercion!');
} else {
    console.log('The === operator does not type coercion!');
}