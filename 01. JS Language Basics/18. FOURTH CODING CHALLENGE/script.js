/****************************
* FOURTH CODING CHALLENGE

*/

/*
Let's remember the first coding challenge where Mark
and John compared their BMIs. Let's now implement
the same functionality with objects and methods.
1. For each of them, create an object with
properties for their full name, mass and height.
2. Then, add a method to each object to calculate
the BMI. Save the BMI to the object and also return
it from the method.
3. In the end, log to the console who has the
highest BMI, together with the full name and the
respective BMI. Don't forget they might have the
same BMI.

BMI = mass / (height * height) (mass in kg, height in meters)

GOOD LUCK :D
*/

/*
var massJohn, massMark, heightJohn, heightMark, bmiJohn, bmiMark, isMarkBmiHigher;
massJohn = 74;
massMark = 82;
heightJohn = 180;
heightMark = 182;
bmiJohn = massJohn / (heightJohn * heightJohn);
bmiMark = massMark / (heightMark * heightMark);

*/

var john = {
    fullName: 'John Smith',
    mass: 82,
    height: 1.84,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.mass / (this.height * this.height);
    }
};

var mark = {
    fullName: 'Mark Matters',
    mass: 74,
    height: 1.70,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.mass / (this.height * this.height);
    }
    
}

john.calcBMI();
mark.calcBMI();
console.log(john['BMI']);

if (john['BMI'] > mark['BMI']) {
    console.log(john.fullName + ' has higher BMI (' 
    + john['BMI'] + ') than ' + mark.fullName + ' whose BMI is '
     + mark['BMI']);
} else if (mark['BMI'] > john['BMI']) {
    console.log(mark.fullName + ' has higher BMI (' 
    + mark['BMI'] + ') than ' + john.fullName + ' whose BMI is '
     + john['BMI']);
} else {
    console.log(john.fullName + ' and ' + mark.fullName + 
    ' have same BMI');
}