
var startBtn = document.querySelector("#startUp");
var beginGame = document.querySelector("#gameStart");
var showQuestion = document.querySelector("#questionSession");
var endGame = document.querySelector("#gameOver");
var leaderBoard = document.querySelector("#leaderBoard");
var oneAnswer = document.querySelector("#answer1");
var twoAnswer = document.querySelector("#answer2");
var threeAnswer = document.querySelector("#answer3");
var fourAnswer = document.querySelector("#answer4");
var question = document.querySelector("#theQuestion");

var QandA1 = {
    question1: "Who is the head doc at the CDC?",
    possAnswer1: "Dr. Fauci",
    possAnswer2: "Dr. Fauchi",
    possAnswer3: "Dr. Burchhead",
    possAnswer4: "Dr. Burckhead",    
}

window.onload = function() {
    beginGame.setAttribute("class", "showDiv");
    showQuestion.setAttribute("class", "hideDiv");
    endGame.setAttribute("class", "hideDiv");
    leaderBoard.setAttribute("class", "hideDiv");
}

startBtn.addEventListener("click", function() {
    beginGame.setAttribute("class", "hideDiv");
    showQuestion.setAttribute("class", "showDiv");

    question.textContent = QandA1.question1;
    oneAnswer.textContent = QandA1.possAnswer1;
    twoAnswer.textContent = QandA1.possAnswer2;
    threeAnswer.textContent = QandA1.possAnswer3;
    fourAnswer.textContent = QandA1.possAnswer4;
});
