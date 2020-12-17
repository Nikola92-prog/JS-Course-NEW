/****************************
* FUNCTION STATEMENTS AND EXPRESSIONS

Last video explained functions through function statements, this one is about
function expressions
*/


//FUNCTION DECLARATION



// FUNCTION EXPRESSION
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';

        case 'driver':
            return firstName + ' drives uber in Lisbon';

        case 'designer':
            return firstName + ' designs beautiful websites';

        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));

//WHAT IS EXPRESSION - when code finishes with some value, if JS expects a value,
// then we need expression

//WHAT ARE STATEMENTS - they don't produce immediate value, that's what makes
// a statement