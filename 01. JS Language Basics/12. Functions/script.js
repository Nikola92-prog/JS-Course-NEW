/****************************
* FUNCTIONS
*/

function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);


//CALCULATING YEARS UNTIL RETIREMENT - Function calling function
function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year)
    var retirement = 65 - age;

    if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years.');
    }   else {
    console.log(firstName + ' is already retired.');
}
}
yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');




function kunaEuroCalculation(kuna) {
    return kuna / 7.4;
}

function kunaEuroDollarCalculation(kuna) {
    return kunaEuroCalculation(kuna) * 1.10;
}

var budget1 = 10000;

var budget1EURO = kunaEuroCalculation(budget1);
var budget1DOLLAR = kunaEuroDollarCalculation(budget1);

console.log('If we express our budget in Euros, we have ' + budget1EURO + 
', which is in dollars ' + budget1DOLLAR);