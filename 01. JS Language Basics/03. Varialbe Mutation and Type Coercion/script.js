//Variable type coercion
var firstName = 'John';
var age = 28;



console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old' + job + '. Is he married? ' + isMarried);

/*
JS converts variable "age" in string, 
as it becomes part of bigger string in combination with variable firstName
*/

//Variable mutation
age = 'twenty eight';
job = 'driver';
alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);