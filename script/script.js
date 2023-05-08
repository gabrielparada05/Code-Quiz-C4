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
  }
];

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
};


var checkAnswer = () => {
  var selectedOption = document.querySelector('input[name="answer"]:checked').value;
  var correctAnswer = questions[currentQuestion].answer;
  if (selectedOption === correctAnswer) {
    alert("Correct!");
  } else {
    alert("Incorrect!");
    timer -= currentQuestion; 
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    alert("Quiz completed!");
  }
};
 
var timer = 100;

var startTimer = () => {
  timerInterval = setInterval(() => {
    timer--;
    document.querySelector(".timer").textContent = "Timer: " + timer + " seconds";

    if(timer === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage("Time´s up");
    }
    
  }, 1000);
}

document.querySelector(".start").addEventListener("click", () => {
  startTimer();
  showQuestion();
  showQuiz();
});

//*
/// getting elements
 

  /// create a random choice
  




//2. To indicate the correct match  - Define var for questions/answer and 
// use if stat for checked correct answer. Create a new variable with the correct answer.



/*



////**********************************
///3 set timer 

                // Selects element by class
var timeEl = document.querySelector(".time");

            // Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    timer--;
    timeEl.textContent = timer + " seconds left till colorsplosion";

    if(timer === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}






//*************************** */

/// 4. use button to start quiz, which triggers the questions and timer. 






/// 5. Questions should be display one by one. 


/// set a way to choice answer: click over the answer. 



// set a message to get "wrong" or "correct" answer.


// If the answer is wrong assign 0 pts. If is correct assign 1 pt. Storage that info.}