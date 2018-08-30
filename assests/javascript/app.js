var correct = 0;
var inccorect = 0;
var unAnswered = 0;
var quizOver = false;
var time = 5;
var intervalId;


var questions = [{
    question: "Hi Michael?",
    answers: ["Bye ", "Good Morning! ", "Good Night "],
    correctAnswer: 2
}, {
    question: "Hi ?",
    answers: ["Shalom ", "Ola! ", "Night "],
    correctAnswer: 3
}, {
    question: "Home!!",
    answers: ["Today?", "Tomorrow?", "Now?", "How?"],
    correctAnswer: 1
}];

function questionMaker() {
    for (let i = 0; i < questions.length; i++) {
        var newRow = $("<div class='row headColor'>");
        var newColumn = $("<div class='col-md-12'>");
        $(".container").append(newRow);
        (newRow).append(newColumn);
        (newColumn).html(questions[i].question);

        for (let j = 0; j < questions[i].answers.length; j++) {
            var newRow = $("<div class='row'>");
            var newColumn = $("<div class='col-md-12 answerPreCss'>");
            var newAnswer = questions[i].answers[j];
            var inputs = $("<input type='radio' name='answers'>");
            var label = $("<label>");
            inputs.attr("id", "answers" + i + j);
            label.attr("for", "answers" + i + j);
            label.text(questions[i].answers[j]);
            $(".container").append(newRow);
            (newRow).append(newColumn);
            (newColumn).append(inputs);
            newColumn.append(label);
        }
    }
}
questionMaker()

function count() {
    time--;
    $(".timeRemaining").html("Time Remaning: " + time);

    if (time === 0) {
        $(".container").hide();
        $(".timeRemaining").hide();
        clearInterval(intervalId);
    } console.log(time)
}
$(".start").on("click", runQuiz)

function runQuiz() {
    intervalId = setInterval(count, 1000)
}



// $(".container").show(); 
// function endQuiz() {
//     if (time === 0) {

//     }
// }