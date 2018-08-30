var correct = 0;
var inccorect = 0;
var unAnswered = 0;
var quizOver = false;


var questions = [{
    question: "Hi Michael?",
    answers: ["Bye", "Good Morning!", "Good Night"],
    correctAnswer: 2
}, {
    question: "Hi ?",
    answers: ["Bye", "Good Morning!", "Good Night"],
    correctAnswer: 2
}];

function questionMaker() {
    for (let i = 0; i < questions.length; i++) {
        var newRow = $("<div class='row'>");
        var newColumn = $("<div class='col-md-12'>");
        $("#mainContainer").append(newRow);
        (newRow).append(newColumn);
        (newColumn).html(questions[i].question);
    }
}
questionMaker()