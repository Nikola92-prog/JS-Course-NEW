/****************************
* Boolean Logic

&& AND - needs both conditions to be true
|| OR - needs only one condition to be true
! NOT - inverts true/false statement
*/

var firstName = 'John';
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

