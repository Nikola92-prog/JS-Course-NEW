/****************************
* Object and Methods (method = function attached to object)

*/

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear) {
        return 2018 - this.birthYear; //this = that actual object
    }
};

console.log(john.calcAge(this.birthYear));

john.age = john.calcAge();
console.log(john);

//We can add element in object (line 20)