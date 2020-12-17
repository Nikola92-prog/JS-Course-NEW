/****************************
* Object and Properties

*/

 // Each value in object has name -> KEY
 //Also order doesn't matter much

 //Object Literal
 var john = {
     firstName: 'John', //key: value pair
     lastName: 'Smith',
     birthYear: 1990,
     family: ['Jane', 'Mark', 'Bob', 'Emily'],
     job: 'teacher',
     isMarried: false
 };
 console.log(john.firstName); //to read one of values, we ise dot (.)
 console.log(john['lastName']); // or we can use brackets

 var x = 'birthYear';
 console.log(john[x]);

 john.job = 'designer';
 john['isMarried'] = true;
 console.log(john);

 // NEW OBJECT SYNTAX
 var jane = new Object();
 jane.name = 'Jane';
 jane.birthYear = 1969;
 jane['lastName'] = 'Smith';
 console.log(jane);