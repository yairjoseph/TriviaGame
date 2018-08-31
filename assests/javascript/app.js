var correct = 0;
var incorrect = 0;
var unAnswered = 0;
var time = 61;
var intervalId;
var form = $("<form>");


var questions = [{
    question: "Which year's top 10 grossing video games are available on PS4?",
    answers: ["2011", "2015", "2014", "2010"],
    correctAnswer: 1
}, {
    question: "Most of us have played ATARI games. what does 'Atari' mean?",
    answers: ["Happiness", "Game", "Success", "Fun"],
    correctAnswer: 2
}, {
    question: "What does Mario jump onto after completing a level?",
    answers: ["Tube", "Castle", "Flag Pole", "Stairs"],
    correctAnswer: 2
}, {
    question: "What is another name for Counter-Strike?",
    answers: ["Half-life", "CSGO", "1.6", "CS"],
    correctAnswer: 0
}, {
    question: "Where was the first PS3 released?",
    answers: ["Israel ", "United States ", "Japan", "China"],
    correctAnswer: 2
}, {
    question: "Name the all time highest grossing game.",
    answers: ["World of Warcraft", "Counter-Strike", "Call Of Duty", "League Of Legends"],
    correctAnswer: 0
}, {
    question: "Name the character abused by Mario",
    answers: ["Luigi", "Donkey Kong", "Peach", "Yoshi"],
    correctAnswer: 1
}];
///change ame for every question
function QAMaker() {
    for (let i = 0; i < questions.length; i++) {
        var newRow = $("<div class='row headColor'>");
        var newColumn = $("<div class='col-md-12'>");
        $("#mainContainer").append(newRow);
        (newRow).append(newColumn);
        (newColumn).html(questions[i].question);

        for (let j = 0; j < questions[i].answers.length; j++) {
            var newRow = $("<div class='row'>");
            var newColumn = $("<div class='col-md-12 answerPreCss'>");
            var newAnswer = questions[i].answers[j];
            var inputs = $("<input type='radio'>");
            var label = $("<label>");
            inputs.attr("id", "answers" + i + j);
            label.attr("for", "answers" + i + j);
            label.text(newAnswer);
            $("#mainContainer").append(newRow);
            (newRow).append(newColumn);
            (newColumn).append(inputs);
            inputs.attr("name", "answers" + [i]);
            inputs.attr("value", newAnswer);
            newColumn.append(label);
        }
    }
}

QAMaker()

function count() {
    time--;
    $("#timeLeft").html(time);
    

    if (time === 0) {
        $("#startContainer").hide();
        $("#mainContainer").hide();
        $(".timeRemaining").hide();
        $(".submit").hide();
        $("#container3").show();
        $("#triviaTime").hide();
        clearInterval(intervalId);
        answersFunc()
    }
}



function runQuiz() {
    intervalId = setInterval(count, 1000)
    $(".start").hide();
    $(".submit").show();
    $("#startContainer").show();
    $("#mainContainer").show();
    $(".timeRemaining").show();
    $("#triviaTime").show();
    $("#triviaTime2").hide();

}

$(".start").on("click", runQuiz)



function submit() {
    $(".submit").hide();
    $("#mainContainer").hide();
    $(".timeRemaining").hide();
    $("#container3").show();
    $("#triviaTime").hide();
    answersFunc();
}
$(".submit").on("click", submit)

var rightAnswer = [
    $("input[name='answers0']:checked").val(),
    $("input[name='answers1']:checked").val(),
    $("input[name='answers2']:checked").val(),
    $("input[name='answers3']:checked").val(),
    $("input[name='answers4']:checked").val(),
    $("input[name='answers5']:checked").val(),
    $("input[name='answers6']:checked").val(),
]

function answersFunc() {
    for (let i = 0; i < questions.length; i++) {

        if (questions[i].answers.indexOf(rightAnswer[i]) === questions[i].correctAnswer) {
            correct++;
        }
        else if (!rightAnswer[i]) {
            unAnswered++;
        }
        else {
            incorrect++;
    }
}
    $("#Correct").text(correct);
    $("#Incorrect").text(incorrect);
    $("#UnAnswered").text(unAnswered);
}


function resetQuiz() {

}
$(".resetBtn").on("click", resetQuiz)