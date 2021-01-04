
// var body = document.body;

//accessing gameStart div and elements within
var beginGameDiv= document.querySelector("#gameStart");
var startBtn = document.querySelector("#startUp");

// accessing questionSession div and elements within
var showQuestionDiv = document.querySelector("#questionSession");
var theQuestion = document.querySelector("#theQuestion");
var potentialAnswers = document.querySelector("#answerSet");
var validateAnswer = document.querySelector("#validate");
var TimerDiv = document.querySelector("#theTimer");
var timeRmaining = document.querySelector("#timeRemaining");


//accessing gameOver div and elements
var gameOverDiv= document.querySelector("#gameOver");
var yourScoreSum= document.querySelector("#yourScore");
var userInitialsInput = document.querySelector("#userInitials");
var postScoreBtn = document.querySelector("#postScore");
var noInitialsMsg= document.querySelector("#invalidResponse");

//accessing leaderBoard div and elements
var leaderBoardDiv = document.querySelector("#leaderBoard");
var startOverBtn = document.querySelector("#startOver");




// Global variable declarations
var userInitials;
var allScores = []
var answerCheck;
var theirAnswer;
var timeToPlay = 30;
var timeSeconds = timeToPlay;
var score = 0;

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
var QandA = [{
    question: "Who is the Director of the National Institute of Allergy and Infectious Diseases?",
    answers: ["Dr.Anthony Fauchi", "Dr. Debra Birx", "Dr. Anthony Fauci", "Dr. Debra Berx"],
    correct: "Dr. Anthony Fauci"
},
{
    question: "Which of the following is a city in China?",
    answers: ["Woohan", "Beijhing", "Shanghai", "Boston"],
    correct: "Shanghai"
},
{
    question: "Which of the following pharmaceutical companies was the first to get a Covid 19 vaccine approved in US?",
    answers: ["Moderna", "Phfizer", "Pfizer", "Medarna"],
    correct: "Pfizer"
},
{
    question: "Who is Joe Biden's Vice President (elect)",
    answers: ["Kamala Harris", "Camala Harris", "Kammala Harris", "Kamala Haris"],
    correct: "Kamala Harris"
},
{
    question: "Which active ingredient in cannibis is believed to treat pain and anxiety without a 'high'?",
    answers: ["CDC", "THC", "TBD", "CBD"],
    correct: "CBD"
},
{
    question: "She is married to Kanye West...",
    answers: ["Kim Jon-un", "Cloe Kardashian", "Kim Kardashian", "Cloey Kardashian"],
    correct: "Kim Kasrdashian"
},
{
    question: "What country used to be part of the Soviet Union?",
    answers: ["Lathvia", "Kyrgystan", "Armania", "Siberia"],
    correct: "Kyrgystan"
 },
 {
    question: "Which of these people is a world famous golfer?",
    answers: ["Jack Nicolson", "Tiger Wood", "Arnold Paulmer", "Gary Player"],
    correct: "Gary Player"
},];

console.log(QandA[1].question, QandA[1].answers[2]);
console.log(QandA.length);

//ensures that the beginGame div is all that loads when page loads.
window.onload = function () {
    beginGameDiv.setAttribute("class", "showDiv");
    showQuestionDiv.setAttribute("class", "hideDiv");
    gameOverDiv.setAttribute("class", "hideDiv");
    leaderBoardDiv.setAttribute("class", "hideDiv");
    TimerDiv.setAttribute("class", "hideDiv");
    

    init();
}

//accessing stored users
function init() {
    var storedGamers = JSON.parse(localStorage.getItem("allGamers"));
    if (storedGamers !== null) {
        allScores = storedGamers;
    }
}

//listening for game start, when button clicked, switches to showQuestions div
startBtn.addEventListener("click", function () {
    // var score = 0;

    showQuestions();
})

//Begin showing questions
function showQuestions() {
    
        //display the show question Div
        beginGameDiv.setAttribute("class", "hideDiv");
        showQuestionDiv.setAttribute("class", "showDiv");
        gameOverDiv.setAttribute("class", "hideDiv");
        leaderBoardDiv.setAttribute("class", "hideDiv");
        TimerDiv.setAttribute("class", "showDiv")

    //need to take time off clock in here and stop clock if run out of questions.

     theQuestion.append(QandA[1].question);
     startTimer();

    QandA[1].answers.forEach(function(answer) {
        var answerBtnEl = document.createElement("button");
        answerBtnEl.textContent =  answer;
        // answerBtnEl.addEventListener("click", checkAnswer);
        potentialAnswers.appendChild(answerBtnEl);
        var breakPoint = document.createElement("br");
        potentialAnswers.appendChild(breakPoint);


        answerBtnEl.addEventListener("click", function() {
        
            
            if (answerBtnEl.textContent === QandA[1].correct) {
                answerCheck = "Correct";
                validateAnswer.append(answerCheck);
                score++;
            }
            else {
                answerCheck = "Incorrect";
                validateAnswer.append(answerCheck);
            }
            
            console.log(answerCheck);
            console.log(score);
        });

    });
};
    // displayOptions();




// Timer function
function startTimer() {
    interval = setInterval(function() {
    if (timeToPlay > 0) {

        timeSeconds--;
        timeRemaining.textContent = timeSeconds;
    }
    else {
        timeRemaining.textContent = "0";
        // $(timeRemaining).text("0");
        // clearInterval(interval);
        // clearInterval(interval);
        // gameOver(score);
    }
    // return timeSeconds;
    }, 1000);
}

// BEFORE RUNNING QUESTION LOOP, NEED TO CLEAR THE PREVIOUS QUESTION AND ANSWERS IN THE ONCLICK SECTION.


