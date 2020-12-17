/****************************
* Ternary Operator (conditional operator) and Switch Statements

*/

var firstName = 'John';
var age = 18;

age >= 18 ? console.log(firstName + ' dringks beer.')
: console.log(firstName + ' dringks juice.')

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}
console.log (firstName + ' drinks ' + drink); 

//Switch statement
var job = 'teacher';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisabon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' dpes something else.');
}

var age = 44;
switch(true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >=13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
/*var firstName = 'John';
var age = 26;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
} 
Block above does the same as this! We can do same things different way
*/

