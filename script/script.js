//1. Set question and answers. 

var myQuestions = [
    {
      question: "What is 10/2?",
      answers: {
        a: '3',
        b: '5',
        c: '115'
      },
      correctAnswer: 'b'
    },
    {
      question: "What is 30/3?",
      answers: {
        a: '3',
        b: '5',
        c: '10'
      },
      correctAnswer: 'c'
    }
  ];

  /// create a random choice
  




//2. To indicate the correct match  - Define var for questions/answer and 
// use if stat for checked correct answer. Create a new variable with the correct answer.








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
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}






//*************************** */

/// 4. use button to start quiz, which triggers the questions and timer. 


            // Access toggle switch HTML element
var themeSwitcher = document.querySelector("#theme-switcher");
var container = document.querySelector(".container");

// Set default mode to dark
var mode = "dark";

// Listen for a click event on toggle switch
themeSwitcher.addEventListener("click", function() {
  // If mode is dark, apply light background
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
  }
  // If mode is light, apply dark background 
  else {
    mode = "dark";
    container.setAttribute("class", "dark");
  }
)


/// 5. Questions should be display one by one. 


/// set a way to choice answer: click over the answer. 



// set a message to get "wrong" or "correct" answer.


// If the answer is wrong assign 0 pts. If is correct assign 1 pt. Storage that info. 


// If the answer is wrong subtract the time and go to the next question. If is correct go to the next one. Storage that info.  


/// when the time is gone or all question are answered, request the initials of the taker test and save the score. 