/****************************
* If else statements
*/

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var massJohn, massMark, heightJohn, heightMark, bmiJohn, bmiMark, isMarkBmiHigher;
massJohn = 74;
massMark = 82;
heightJohn = 180;
heightMark = 182;
bmiJohn = massJohn / (heightJohn * heightJohn);
bmiMark = massMark / (heightMark * heightMark);

console.log(bmiJohn, bmiMark);

//Now instead of using boolean to print the statement, we can use if else

/*isMarkBmiHigher = bmiMark > bmiJohn;
console.log(isMarkBmiHigher);

console.log("Is Mark's BMI highet than John's? " + isMarkBmiHigher);*/
if (bmiMark > bmiJohn) {
    console.log('Mark has bigger BMI than John');
} else {
    console.log('Mark has not bigger BMI than John');
}