var progressBar = document.getElementById("progress");

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

var timerInterval;

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
    endQuiz()
  }
  var progressBar = document.querySelector("#progress"); 
  var progressPerc = (currentQuestion/totalQuestion)*100;
  progressBar.style.width = `${progressPercent}%`;
  progressBar.textContent = `Question ${currentQuestion} of ${totalQuestions}`;
};
 

function setPoints() {
  score.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
}




// set timer
var timeEl = document.querySelector(".timer");

var secondsLeft = 100;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
      endQuiz()
    }

  }, 1000);
}

function sendMessage() {
  this.alert("Game Over ");
}
/// i have to reset de game



///trigger quiz 
document.querySelector(".start").addEventListener("click", () => {
  setTime();
  showQuestion();
  showQuiz();
  checkAnswer();
  document.querySelector(".start").style.display = "none";
  document.querySelector(".score").style.display = "block";
  document.querySelector("#progress").style.display = "block";
});

function endQuiz() {
  var finalScore = document.querySelector("#scores")
  var initials = prompt("Please enter your initials");
  document.querySelector(".quiz").style.display="none";
    document.querySelector(".timer").style.display="none";
    document.querySelector(".start").style.display="none";
  
  if (initials != null) {
    document.getElementById("demo").innerHTML =
    finalScore.textContent = "You scored " + score + "! Great Job! " + initials;
    
  }

}
