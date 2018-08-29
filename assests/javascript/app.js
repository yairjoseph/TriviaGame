// var question = ["What kind of music do you like?", "Where would you rather be right now?", "What is your favorite pokemon?", "How do you feel about people who only drink sparkling"];
// var correctAnswer = 0;
// var incorrectAnswer = 0;
// var unanswered = 0; 

$("#button").on("click", check);

function check() {
    alert("You have one the grand prize!! One million dollars!!");

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var correct = 0;

    if (question1 == "answer") {
        correct++;
    }
    if (question2 == "answer") {
        correct++;
    }
    if (question3 == "answer") {
        correct++;
    }
    if (question4 == "answer") {
        correct++;
    }
    if (question5 == "answer") {
        correct++;
    }
    if (question6 == "answer") {
        correct++;
    }
    if (question7 == "answer") {
        correct++;
    }

document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("number_correct").innerHtml = "You got " + correct + " correct.";

}
