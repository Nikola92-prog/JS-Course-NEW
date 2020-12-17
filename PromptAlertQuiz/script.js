var Questions = function(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}


var question0 = new Questions('Is there more than billion Chinese?', ['Yes', 'No'], 'Yes');
var question1 = new Questions('Does planet Earth has 3 oceans?', ['Yes', 'No'], 'Yes');
var question2 = new Questions('Is it clever to give up on this programming?', ['Yes', 'No'], 'No');


var arrQuestions = [];
arrQuestions.push(question0);
arrQuestions.push(question1);
arrQuestions.push(question2);

var answerUser = [];
var scores = [];

function questionPrompt() {
    var answer;
    for(var i = 0; i < arrQuestions.length; i++) {
        console.log(arrQuestions[i].answers[0]);
        console.log(arrQuestions[i].answers[1]);
        answer = prompt(arrQuestions[i].question);
        answerUser.push(answer);
        if(answerUser[i] === arrQuestions[i].correctAnswer) {
            scores.push(1);
            alert('That is correct!');
        } else {
            scores.push(0);
            alert('That is not correct!');
        }
        console.clear();
    }
    if(scores[0] + scores [1] + scores [2] === 3) {
        alert('You have aced this quiz! 3/3');
    } else if(scores[0] + scores [1] + scores [2] === 2) {
        alert('Only one wrong answer! 2/3');
    } else if(scores[0] + scores [1] + scores [2] === 1) {
        alert('Only one correct answer... Better luck next time :) 1/3');
    } else if(scores[0] + scores [1] + scores [2] === 0) {
        alert('You have failed this quiz miserably 0/3');
    }
}
questionPrompt();