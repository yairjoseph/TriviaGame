var correct = 0;
var inccorect = 0;
var unAnswered = 0;
var quizOver = false;


var questions = [{
    question: "Hi Michael?",
    answers: ["Bye ", "Good Morning! ", "Good Night "],
    correctAnswer: 2
}, {
    question: "Hi ?",
    answers: ["Shalom ", "Ola! ", "Night "],
    correctAnswer: 2
}];

function questionMaker() {
    for (let i = 0; i < questions.length; i++) {
        var newRow = $("<div class='row'>");
        var newColumn = $("<div class='col-md-12'>");
        // var fields = ("<label>");
        $("#mainContainer").append(newRow);
        (newRow).append(newColumn);
        // newColumn.html(fields);
        (newColumn).html(questions[i].question);

        for (let j = 0; j < questions[i].answers.length; j++) {
            var newRow = $("<div class='row'>");
            var newColumn = $("<div class='col-md-12'>");
            var newAnswer = questions[i].answers[j];
            var inputs = $("<input type='radio' name='answers'>");
            var label = $("<label>");
            inputs.attr("id", "answers"+i+j);
            label.attr("for", "answers"+i+j);
            label.text(questions[i].answers[j]);
            $(".container").append(newRow);
            (newRow).append(newColumn);
            (newColumn).append(inputs);
            newColumn.append(label);
            
            
            // (newColumn).html(questions[i].answers[j]);
            

        }
    }
}
questionMaker()
