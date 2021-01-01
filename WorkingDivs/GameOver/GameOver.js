
//Why NOT working?
var body = document.body;
var userInitialsEl = document.querySelector("#userInitials");
var postScoreBtn = document.querySelector("#postScore");
var msgDiv = document.querySelector("#msg");
var h2Success = document.createElement("h2");
var h2Fail = document.createElement("H2");

h2Success.textContent = "Thank you!";
h2Fail.textContent = "You must enter initials";
h2Success.setAttribute("style", "color:black; font-size: 14px;");
h2Fail.setAttribute("style", "color:black; font-size: 14px;");



var userIntials;


postScoreBtn.addEventListener("click", function(event) {
    event.preventDefault();

    userInitials = document.querySelector("#userInitials").value;

    if (userInitials === "") {
        msgDiv.appendChild(h2Fail);
        
    }
      else {
        msgDiv.appendChild(h2Success);
      }

    
    });

