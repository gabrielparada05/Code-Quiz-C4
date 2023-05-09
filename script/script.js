var progressBar = document.getElementById("progress");
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
    question: "Choose the correct HTML element for the largest heading:",
    options : ["header tag","h1 tag","h2 tag","large_h tag"],
    answer: "h1 tag",
  },
];

// show question 
function showQuiz(){
  document.querySelector(".quiz").style.display = "block";
}

var currentQuestion = 0;



var showQuestion = () => {
  var q = questions[currentQuestion];
  var questionText = q.question;
  var options = q.options;
  var optionsHTML = "";
  for (var i = 0; i < options.length; i++) {
    optionsHTML += `<input type="radio" name="answer" value="${options[i]}">${options[i]}<br>`;
  }
  var quizHTML = `
    <div class="question">${questionText}</div>
    <div class="options">${optionsHTML}</div>
    <button onclick="checkAnswer()">Submit</button>
  `;
  document.querySelector(".quiz").innerHTML = quizHTML;
  document.querySelector(".start").style.display="none";
};




// check answer
var checkAnswer = () => {
  var selectedOption = document.querySelector('input[name="answer"]:checked').value; 
  var correctAnswer = questions[currentQuestion].answer;
  if (selectedOption === correctAnswer) {
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
  // set the progress bar
  var progressBar = document.querySelector("#progress"); 
  var progressPerc = (currentQuestion/questions.length)*100;
  progressBar.style.width = `${progressPerc}%`;
  progressBar.textContent = `Question ${currentQuestion} of ${questions.length}`;
  progressBar.value = progressPerc;
};
 
/// set points and save in the local storage
function setPoints() {
  score.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
}




// set timer I NEED TO STOP IT WHEN I FINISH THE QUIZ
var timeEl = document.querySelector(".timer");

var secondsLeft = 30;

///var timerInterval = setInterval(function() {
  
/// }, 1000);


function setTime() {
  timer;
  secondsLeft--;
  timeEl.textContent = secondsLeft + " seconds left.";

  if(secondsLeft === 0) {
    // Stops execution of action at set interval
    clearInterval(timer);
    // Calls function to create 
    sendMessage();
    endQuiz()    
  }
}


function sendMessage() {
  this.alert("Game Over ");
}
/// i have to reset de game *************



///trigger quiz 
document.querySelector(".start").addEventListener("click", () => {
  timer = setInterval(setTime, 1000);
  showQuestion();
  showQuiz();
  checkAnswer();
  endQuiz()
  ///renderPoints ()
  
  document.querySelector(".start").style.display = "none";
  document.querySelector(".score").style.display = "block";
  document.querySelector("#progress").style.display = "block";
});


function endQuiz() {
  var initials = prompt("Please enter your initials");
  document.querySelector(".quiz").style.display="none";
  document.querySelector(".timer").style.display="none";
  document.querySelector(".start").style.display="none";
  renderPoints (initials);
};

function renderPoints (initials){
  var finalScore = document.querySelector("#scores");
  
    if (score > 2) {
    finalScore.textContent = "You scored " + score + " Great Job  " + initials;
    } else {

    finalScore.textContent = "You scored " + score + " Try Again " + initials;
  }

}

document.querySelector(".end-btn").addEventListener("click", function(){
  window.location.reload()
})

//RESET DE GAME

