
var startBtn = document.querySelector("#startUp");
var beginGame = document.querySelector("#gameStart");
var showQuestion = document.querySelector("#questionSession");
var endGame = document.querySelector("#gameOver");
var leaderBoard = document.querySelector("#leaderBoard");
var oneAnswer = document.querySelector("#choicesOne");
var twoAnswer = document.querySelector("#choicesTwo");
var threeAnswer = document.querySelector("#choicesThree");
var fourAnswer = document.querySelector("#choicesFour");
var question = document.querySelector("#theQuestion");
var buttonOne = document.querySelector("#button1");
var buttonTwo = document.querySelector("#button2");
var buttonThree = document.querySelector("#button3");
var buttonFour  = document.querySelector("#button4");
var trueFalse = document.querySelector("#validate");
var yourScore = document.querySelector("#yourScore");
var theLeader1 = document.querySelector("#leader1");
var theLeader2 = document.querySelector("#leader2");
var theLeader3 = document.querySelector("#leader3");
var theLeader4 = document.querySelector("#leader4");
var theLeader5 = document.querySelector("#leader5");
var postScoreBtn = document.querySelector("#postScore");

var gamerInitials = localStorage.getItem("gamerInitials");

var score = 0;


var QandA = {
    bigQuestion: ["Who is the Director of the National Institute of Allergy and Infectious Diseases?", "Which of the following is a city in China?", "Which of the following pharmaceutical companies was the first to get a Covid 19 vaccine approved in US?", "Who is Joe Biden's Vice President (elect)", "Which active ingredient in cannibis is believed to treat pain and anxiety without a 'high'?", "She is married to Kanye West..."],
    answerSet1: ["Dr.Anthony Fauchi", "Dr. Debra Birx", "Dr. Anthony Fauci", "Dr. Debra Berx"],
    answerSet2: ["Woohan", "Beijhing", "Shanghai", "Boston"],
    answerSet3: ["Moderna", "Phfizer", "Pfizer", "Modderna"],
    answerSet4: ["Kamala Harris", "Camala Harris", "Kammala Harris", "Kamala Haris"],
    answerSet5: ["CDC", "THC", "TBD", "CBD"],
    answerSet6: ["Kim Jon-un", "Cloe Kardashian", "Kim Kardashian", "Cloey Kardashian"],
    correctAnswer: ["Dr. Anthony Fauci", "Shanghai", "Pfizer", "Kamala Harris", "CBD", "Kim Kardashian"]
}


window.onload = function() {
    beginGame.setAttribute("class", "showDiv");
    showQuestion.setAttribute("class", "hideDiv");
    endGame.setAttribute("class", "hideDiv");
    leaderBoard.setAttribute("class", "hideDiv");
    
}


startBtn.addEventListener("click", function() {
    // var score = 0;
    beginGame.setAttribute("class", "hideDiv");
    showQuestion.setAttribute("class", "showDiv");

    question.textContent = QandA.bigQuestion[0];
    oneAnswer.textContent = QandA.answerSet1[0];
    twoAnswer.textContent = QandA.answerSet1[1];
    threeAnswer.textContent = QandA.answerSet1[2];
    fourAnswer.textContent = QandA.answerSet1[3];

    if (buttonOne.addEventListener("click", function() {
            trueFalse.textContent = "Wrong Answer";
            yourScore.textContent = ("Your current score is " + score + ".");
            countdown();
        }));
    
    if (buttonTwo.addEventListener("click", function() {   
            trueFalse.textContent = "WRONG answer!";
            yourScore.textContent = ("Your current score is " + score + ".");
            countdown();
        }));

    if (buttonThree.addEventListener("click", function() {
            score++;
            trueFalse.textContent = "You are CORRECT!";
            yourScore.textContent = ("Your current score is " + score + ".");
            countdown();
         }));

    if (buttonFour.addEventListener("click", function() {  
            trueFalse.textContent = "WRONG answer!"
            yourScore.textContent = ("Your current score is " + score + ".");
            countdown();
        }));

    })

    var countdown = function() {
      var timeLeft = 1;
        var interval = setInterval(function() {
         if (timeLeft > 0) {
             timeLeft--;
         }
             else {
             clearInterval(interval);
            goToGameOver();
          }
        }, 1000);
      }

    var goToLeaderBoard = function() {
        beginGame.setAttribute("class", "hideDiv");
        showQuestion.setAttribute("class", "hideDiv");
        endGame.setAttribute("class", "hideDiv");
        leaderBoard.setAttribute("class", "showDiv");



    }

    var goToGameOver = function() {
        beginGame.setAttribute("class", "hideDiv");
        showQuestion.setAttribute("class", "hideDiv");
        endGame.setAttribute("class", "showDiv");
        leaderBoard.setAttribute("class", "hideDiv");

        postScoreBtn.addEventListener("click", function() {
        localStorage.setItem("gamerInitials", userInitials.value);
        console.log(userInitials.value);
        goToLeaderBoard();
        });
    }


    




