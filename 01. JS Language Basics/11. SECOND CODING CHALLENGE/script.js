/****************************
* CODING CHALLENGE 1
*/

/*
John and Mike both play basketball in different teams.
In the latest 3 games, John's team scored 89, 120
and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest
average score), and print the winner to the console.
Also include the average score in the output.
3. Then change the scores to show different winners.
Don't forget to take into account there might be a
draw (the sam average score).

4. EXTRA: Mary also plays basketball, and her team cscored 97, 134 and 105 points.
Like before, log the average winner to the console. HINT: you will need the &&
operator to take the decision. If you can't solve this one, just watch the
solution, it's no problem :)
5. Like before, change the scores to generate different winners,
keeping in mind there might be draws.

GOOD LUCK :D
*/

score1John = 89;
score2John = 144;
score3John = 103; //Sum is 312
averageJohn = (score1John + score2John + score3John) / 3;

score1Mike = 102;
score2Mike = 94;
score3Mike = 123; //Sum is 339
averageMike = (score1Mike + score2Mike + score3Mike) / 3;

score1Mary = 97;
score2Mary = 134;
score3Mary = 105; //Sum is 336
averageMary = (score1Mary + score2Mary + score3Mary) / 3;

console.log ('Team John has average score of ' + averageJohn + 
', team Mary has average score of ' + averageMary + 
' and team Mike has average score of ' + averageMike);


if (averageJohn > averageMike && averageJohn > averageMary) {
    console.log('John\'s team has won');
} else if (averageMike > averageJohn && averageMike > averageMary) {
    console.log('Mike\'s team has won');
} else if (averageMary > averageJohn && averageMary > averageMike) {
    console.log('Mary\'s team has won');
} else if (averageJohn === averageMike && averageJohn > averageMary) {
    console.log('Teams John and Mike share 1st place');
} else if (averageJohn === averageMary && averageJohn > averageMike) {
    console.log('Teams John and Mary share 1st place');
} else {
    console.log('Teams Mike and Mary share 1st place');
}
