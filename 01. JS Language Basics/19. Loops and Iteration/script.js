/****************************
* Loops and iteration

*/
/*
for (var i = 0; i < 10; i++) {
    console.log(i);
}
*/
// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to console, i++
//...
// i = 9, 9 < 10 true, log i to console, i++
// i = 10, 10 < 10 FALSE, exit the loop!

/*for (var x = 1; x <= 20; x += 2) {
    console.log(x);
}

var john = ['John', 'Smith', 1990, 'designer', false];
console.log(john[0]);
console.log(john.[1]);
 //ovo je losa ideja, koristiti LOOP

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

var i = 0;
while(i < john.lenght) {
    console.log(john[i]);
    i++;
}
*/
// Continue and break statements

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
/*
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]); //we can skip elements we don't need, 
    //like numbers in this case
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]); //when comes to not string, stops the loop
}
*/
//How we can loop through array backwards?

for (var i = john.lenght - 1; i >= 0; i--) {
    console.log(john[i]);
}