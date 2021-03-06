

        // Accessing html elements
        var welcomeScreenDiv = document.querySelector("#welcomeScreen");
        var theQuizDiv = document.querySelector("#theQuiz");
        var startPlayBtn = document.querySelector("#startPlay");
        var showQuestionDiv = document.querySelector("#showQuestion");
        var showAnswersDiv = document.querySelector("#showAnswers");
        var theTimerDiv = document.querySelector("#theTimer");
        var theGameOverDiv = document.querySelector("#gameOver");
        var theUserInitials = document.querySelector("#userInitials");
        var theFinalScore = document.querySelector("#finalScore");
        var leaderBoardDiv = document.querySelector("#leaderBoard");
        var timeRemainingDiv = document.querySelector("#timeRemaining");
        var theLeaderList = document.querySelector("#leaderList");
        var linkToLeaderBoardBtn = document.querySelector("#linkToLeaderBoard");

        //Creating a new elements
        var theQuestionEl = document.createElement("h2");
        var validatedEl = document.createElement("p");

        // //creating new GameOver div elements
        var invalidResponseEl = document.querySelector("#invalidResponse");
        var postScoreBtn = document.querySelector("#postScore");
        var finalScoreEl = document.querySelector("#finalScore");


        // setting global variables
        var answerBtn;
        var score = 0;
        var validated;
        var timeToPlay = 60;
        var timeSeconds = timeToPlay;
        var allScores = [];
        var userInitials;
        var questionIndex = 0;

        //question and answer object
        var QandA = [{
            question: "Who is the Director of the National Institute of Allergy and Infectious Diseases?",
            answers: ["Dr. Anthony Fauchi", "Dr. Debra Birx", "Dr. Anthony Fauci", "Dr. Debra Berx"],
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
            question: "Which active ingredient in cannabis is believed to treat pain and anxiety without a 'high'?",
            answers: ["CDC", "THC", "TBD", "CBD"],
            correct: "CBD"
        },
        {
            question: "She is married to Kanye West...",
            answers: ["Kim Jon-un", "Cloe Kardashian", "Kim Kardashian", "Cloey Kardashian"],
            correct: "Kim Kardashian"
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

        window.onload = function () {
            welcomeScreenDiv.style = "border: 2px solid black;";
            leaderBoardDiv.style = "display: none;";
            theQuizDiv.style = "display: none;";
            theGameOverDiv.style = "display: none;";

        }

        init();
        function init() {
            var storedGamers = JSON.parse(localStorage.getItem("allGamers"));
            if (storedGamers !== null) {
                allScores = storedGamers;
            }
            console.log(allScores);
        }

        //listening for leaderboard button click
        linkToLeaderBoardBtn.addEventListener("click", function () {
            goToLeaderBoard();
        })
        // function init() {

        // }

        //listening for start button click
        startPlayBtn.addEventListener("click", function () {
            quizQuestion();
            startTimer();
        })
        

        // Function to show questions and answers and record response
        function quizQuestion() {
            theQuizDiv.style = "display: block; border: 2px solid black";
            leaderBoardDiv.style = "display: none";
            welcomeScreenDiv.style = "display: none";


            showQuestion = (QandA[questionIndex].question)
            theQuestionEl.textContent = showQuestion;
            showQuestionDiv.append(theQuestionEl);

            QandA[questionIndex].answers.forEach(function (answers) {
                var answerBtn = document.createElement("button");
                answerBtn.textContent = answers;
                showAnswersDiv.appendChild(answerBtn);
                answerBtn.setAttribute("style", "width: 200px;");
                var breakPoint = document.createElement("br");
                showAnswersDiv.appendChild(breakPoint);


                answerBtn.addEventListener("click", function () {
                    console.log(answerBtn.textContent);
                    if (answerBtn.textContent === QandA[questionIndex].correct) {
                        score++;
                        console.log(score);
                        validatedEl.textContent = "Correct! Your score is " + score + "."
                        showAnswersDiv.append(validatedEl);
                    }
                    else {
                        validatedEl.textContent = "Incorrect.  Your score is " + score + " ...AND lost 10 seconds on the timer";
                        showAnswersDiv.append(validatedEl);
                        timeSeconds -= 10;
                    }
                    questionIndex++;
                    setTimeout(function () {
                        if (questionIndex < 8) {
                            showQuestionDiv.innerHTML = "";
                            showAnswersDiv.innerHTML = "";

                            quizQuestion();
                        }
                        else {
                            gameOver();
                        }
                    }, 1500);


                })
            })
        }

        // timer function
        function startTimer() {
            interval = setInterval(function () {

                if (timeSeconds > 0) {
                    timeSeconds--;
                    timeRemainingDiv.textContent = timeSeconds;
                }
                else {
                    clearInterval(interval);
                    var timeExpired = document.createElement("p");
                    timeExpired.textContent = "Time Expired";
                    showAnswersDiv.append(timeExpired);
                    gameOver();
                }
            }, 1000);
        }

        // game over function
        function gameOver() {
            theQuizDiv.style = "display: none";
            theGameOverDiv.style = "border: 2px solid black;"

            finalScoreEl.textContent = "Your final score is " + score;


            postScoreBtn.addEventListener("click", function (event) {

                userInitials = document.querySelector("#userInitials").value;

                if (userInitials === "") {

                    invalidResponseEl.textContent = "You need to enter initials";
                }
                else {
                    //create object to hold userintials and score
                    var scoreObject = { gamer: userInitials, scoreValue: score }

                    //adding scoreObject to the allScores array
                    allScores.push(scoreObject);
                    invalidResponseEl.textContent = "Great";
                    goToLeaderBoard();
                }
            })

        }

        //leaderboard function
        function goToLeaderBoard() {
            theGameOverDiv.style = "display: none";
            leaderBoardDiv.style = "border: 2px solid black";
            welcomeScreenDiv.style = "display: none";

            localStorage.setItem("allGamers", JSON.stringify(allScores));

            for (var i = 0; i < allScores.length; i++) {

                var newEntry = document.createElement("li")
                newEntry.textContent = allScores[i].gamer + " - " + allScores[i].scoreValue;
                theLeaderList.append(newEntry);
            };

        }