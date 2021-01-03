
var body = document.body;

var startBtn = document.querySelector("#startUp");
var beginGame = document.querySelector("#gameStart");
var showQuestion = document.querySelector("#questionSession");
var theQuestion = document.querySelector("#theQuestion");
var endGame = document.querySelector("#gameOver");
var potentialAnswers = document.querySelector("#answerSet");


var leaderBoard = document.querySelector("#leaderBoard");
var oneAnswer = document.querySelector("#choicesOne");
var twoAnswer = document.querySelector("#choicesTwo");
var threeAnswer = document.querySelector("#choicesThree");
var fourAnswer = document.querySelector("#choicesFour");
var answerBtn = document.querySelectorAll(".answerBtn");
var buttonOne = document.querySelector("#button1");
var buttonTwo = document.querySelector("#button2");
var buttonThree = document.querySelector("#button3");
var buttonFour  = document.querySelector("#button4");
var areYouRight = document.querySelector("#validate");
var yourScore = document.querySelector("#yourScore");
var allScores = []
var timeLeft;
var interval;
var answer;


//accessing GameOver div elements
var userInitialsEl = document.querySelector("#userInitials");
var postScoreBtn = document.querySelector("#postScore");
var msgDiv = document.querySelector("#msg");
var userInitials;

//creating new GameOver div elements
var h2Success = document.createElement("h2");
var h2Fail = document.createElement("h2");

//appending content in GameOver div
h2Success.textContent = "Thank you!";
h2Fail.textContent = "You must enter initials";
h2Success.setAttribute("style", "color:black; font-size: 14px;");
h2Fail.setAttribute("style", "color:black; font-size: 14px;");

//accessing leaderBoard div elements
var leadersDiv = document.querySelector("#leaders");
var startOverBtn = document.querySelector("#startOver");

//creating new leadBoard div elements
var first = document.createElement("li");
var second = document.createElement("li");
var third = document.createElement("li");
var fourth = document.createElement("li");
var fifth = document.createElement("li");


//setting initial game score
var score = 0;


//object that contains questions, potential answers, and correct answers
var QandA = {
     questions: ["Who is the Director of the National Institute of Allergy and Infectious Diseases?",
                    "Which of the following is a city in China?",
                    "Which of the following pharmaceutical companies was the first to get a Covid 19 vaccine approved in US?",
                    "Who is Joe Biden's Vice President (elect)",
                    "Which active ingredient in cannibis is believed to treat pain and anxiety without a 'high'?",
                    "She is married to Kanye West...",
                    "What country used to be part of the Soviet Union?",
                    "Which of these people is a world famous golfer?"],

     answers: [["Dr.Anthony Fauchi", "Dr. Debra Birx", "Dr. Anthony Fauci", "Dr. Debra Berx"],
                    ["Woohan", "Beijhing", "Shanghai", "Boston"],
                    ["Moderna", "Phfizer", "Pfizer", "Modderna"],
                    ["Kamala Harris", "Camala Harris", "Kammala Harris", "Kamala Haris"],
                    ["CDC", "THC", "TBD", "CBD"],
                    ["Kim Jon-un", "Cloe Kardashian", "Kim Kardashian", "Cloey Kardashian"],
                    ["Lathvia", "Kyrgystan", "Armania","Siberia"],
                    ["Jack Nicolson", "Tiger Wood", "Arnold Paulmer", "Gary Player"]],
    correct: ["Dr. Anthony Fauci", "Shanghai", "Pfizer", "Kamala Harris", "CBD", "Kim Kardashian", "Kyrgystan", "Gary Player"],
};


console.log(QandA.questions.length);




//ensures that the beginGame div is all that loads when page loads.
window.onload = function() {
    beginGame.setAttribute("class", "showDiv");
    showQuestion.setAttribute("class", "hideDiv");
    endGame.setAttribute("class", "hideDiv");
    leaderBoard.setAttribute("class", "hideDiv");

    init(); 
}

//accessing stored users
function init() {
    var storedGamers =JSON.parse(localStorage.getItem("allGamers"));
    if (storedGamers !== null) {
        allScores = storedGamers;
    }
}

//listening for game start, when button clicked, switches to showQuestions div
startBtn.addEventListener("click", function() {
    // var score = 0;
    
    showQuestions();
})

    
function showQuestions() {    
    // for (j=0; j < QandA.questions.length; j++) {

    beginGame.setAttribute("class", "hideDiv");
    showQuestion.setAttribute("class", "showDiv");
    endGame.setAttribute("class", "hideDiv");
    leaderBoard.setAttribute("class", "hideDiv");

//need to take time off clock in here and stop clock if run out of questions.

var question = document.createElement("h2");
question.textContent = QandA.questions[0];
theQuestion.append(question);

makeBullets();
}

function makeBullets() {
    for (i = 0; i < QandA.answers[i].length; i++) {
    answer = document.createElement("button");
    answer.textContent = (QandA.answers[0][i]);
    potentialAnswers.append(answer)
    
   
    var breakPoint = document.createElement("br");
    potentialAnswers.append(breakPoint);
}}

potentialAnswers.onclick = function(event) {
    var theirAnswer = event.target

console.log(theirAnswer);
 if (QandA.correct[i]) {
    var response = document.createElement("p");
    response.textContent = "Incorrect";
    areYouRight.append(response);
    yourScore.append("Your score is " + score);
    showQuestion();

 }
    else {
        var response = document.createElement("p");
        response.textContent = "Correct";
        areYouRight.append(response);
        score++
        yourScore.append("Your score is " + score);
    showQuestion();
        
    }
    
}


    

