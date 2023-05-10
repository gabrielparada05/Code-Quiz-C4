/// Get score saved in the local storage

var finalPoints = document.getElementById("see-score");
finalPoints.innerHTML = localStorage.getItem("pointsCount");

var progressBar = document.getElementsByClassName("progress");
var timer;


//set questions and options
var score = 0
var questions = [
  {
    question: "What does HTML stand for?",
    options : ["Hyper Tag Market Language", "Hyper Text Mark Link","Hyper Text Markup Language","Hyperlinking Text Manual Language"],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which program is used by web clients to view the web pages?",
    options : ["Web browser", "Protocol","Web server","Search Engine"],
    answer: "Web browser",
  },
  {
    question: "Which tag is used to display text in title bar of a web document?",
    options : ["Comment tag", "Meta tag","Heading tag","Title tag"],
    answer: "Title tag",
  },

  {
    question: "Which of the following is not a browser?",
    options : ["Safari","Macbook","Chrome","Edge"],
    answer: "Macbook",
  },
  {
    question: "Choose the correct HTML element for the most important heading of the page:",
    options : ["header tag","h1 tag","h2 tag","large_h tag"],
    answer: "h1 tag",
  },
];

// show quiz
function showQuiz(){
  document.querySelector(".quiz").style.display = "block";
}
// set progress bar
function progressShow()  {
  var progressBar = document.querySelector(".progress"); 
  var valueBar ;
  if (currentQuestion === 0) {
    valueBar = 1
  } else { 
    valueBar = currentQuestion + 1
  };
  var progressPerc = (valueBar/questions.length)*100;
  progressBar.style.width = `${progressPerc}%`;
  progressBar.textContent = ` ${valueBar} of ${questions.length}`;
  progressBar.value = progressPerc;
  }
  

  // show questions and options
var currentQuestion = 0;

function showQuestion () {
  var q = questions[currentQuestion];
  var questionText = q.question;
  var options = q.options;
  var optionsHTML = "";
  for (var i = 0; i < options.length; i++) {
    optionsHTML += `<input id="label${[i]}" type="radio" name="answer" value="${options[i]}"> 
    <label for="label${[i]}">${options[i]}</label> <br> `;
  }
  var quizHTML = `
    <h2 class="question">${questionText}</h2>
    <div class="options">${optionsHTML}</div>
    <div class="submit-btn"> <button onclick="checkAnswer()">Submit</button> </div>
  `;
  document.querySelector(".quiz").innerHTML = quizHTML;
  document.querySelector(".start").style.display="none";
  progressShow();
};



// check answers
function checkAnswer () {
  var selectedOption = document.querySelector('input[name="answer"]:checked'); 
  var correctAnswer = questions[currentQuestion].answer;
  if (selectedOption) {
    if (selectedOption.value === correctAnswer) {
      alert("Correct!");
      score = score + 1
    } else {
      alert("Incorrect!");
      secondsLeft -= currentQuestion; 
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      alert("Quiz completed!");
      endQuiz();
      clearInterval(timer);
    } 
  } else {
    alert("Please select an option");
  }
  
};




// set timer 
var timeEl = document.querySelector(".timer");
/// set seconds for the timer
var secondsLeft = 120;
function setTime() {
  timer;
  secondsLeft--;
  timeEl.textContent = secondsLeft + " seconds left!";

  if(secondsLeft === 0) {
    // Stops execution of action at set interval
    clearInterval(timer);
    // Calls function to create 
    sendMessage();
    endQuiz()    
  }
}


function sendMessage() {
  this.alert("Game Over");
}

///trigger quiz 
document.querySelector(".start").addEventListener("click", () => {
  timer = setInterval(setTime, 1000);
  showQuiz();
  showQuestion();
  //checkAnswer();
  //endQuiz();
  document.querySelector(".start").style.display = "none";
  //document.querySelector(".score").style.display = "block";
  document.querySelector(".progress").style.display = "block";
  finalPoints.style.display = "none";
});



 
// set the end 
function endQuiz() {
  var initials = prompt("Please enter your initials");
  renderPoints (initials);
  document.querySelector(".quiz").style.display="none";
  document.querySelector(".timer").style.display="none";
  document.querySelector(".start").style.display="none"
  document.querySelector(".end-btn").style.display="block";
  document.querySelector(".save-btn").style.display="block";
 
};

/// Render points

function renderPoints (initials){
  var finalScore = document.querySelector("#scores");
    if (score > 2) {
    finalScore.textContent = initials + ", your score is " + score + "/5" + ". Great Job.";
    } else {
    finalScore.textContent = initials + ", your score is " + score + "/5" + ". Try Again.";
  }
  // /// set points in the local storage and reset the game after the alert
  document.querySelector(".save-btn").addEventListener("click", function(){
    var lastScore = initials + " your last score was " + score; 
    localStorage.setItem("pointsCount", lastScore)
    alert("Score saved");
    window.location.reload()
})
}

//RESET DE GAME
document.querySelector(".end-btn").addEventListener("click", function(){
  window.location.reload()
})



