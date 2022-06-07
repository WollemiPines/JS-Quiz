//variables for ellements
var startButton= document.getElementById('opperation_btn');
var timerCountTextEl = document.querySelector('.time_left');
var userSelection="";
let qnumber=0;
// Re-asign the start button every page load to display
content('#opperation_btn', "<button>Start Game</button>");

// Change content function
function content(divSelector, value){
  document.querySelector(divSelector).innerHTML=value;
};

// Questions list for referecing length of quiz. ideally the game would run by cycling 
// though questionsList[x] for x = 0-questionsList.length  but i was unable to get it to work
var questionsList= [question1, question2, question3];

  // Questions and answers inside indivdual objects
 var question1 = {
  question:"In Java Script, what symbol is used to divde two numbers?",
  a:"%", 
  b:"/",
  c:"Both a and b",
  answer:"/",
  };
var question2 = {
  question:"What turns an object into a string?",
  a:"math.random", 
  b:".stringify",
  c:"JSON.stringify(object)",
  answer:"JSON.stringify(object)",
  };
var question3 = {
  question:"A boolean is what?",
  a:"True / False value", 
  b:"1 or 0 Binary",
  c:"A Nor Gate",
  answer:"True / False value",
  };

// Question screen content function;
function greaterDisp(){

  // if gates to determine what question to disply depending on the qnumber 

  if(qnumber===0){
    var currentQuestion=question1;  
    questionDisp();
  }
  if(qnumber===1){
    var currentQuestion=question2;  
    questionDisp();
  }
  if(qnumber===2){
    var currentQuestion=question3;
    questionDisp();
  }
  // questionDisp function changes the content of the main page to a a multiple choice questionaire and subs 
  // in the correct questions and answers depending on the variable (question) selected with the qnumber.
  // this function runs inside greaterDisp to keep the if gates from influencing the global scope
  function questionDisp(){

  content('#titles', currentQuestion.question);
  content('#questions', " <button id='quest_a'>''</button>" +"<br>" + " <button id='quest_b'>''</button>" +"<br>" + " <button id='quest_c'>''</button>");
  content('#quest_a', currentQuestion.a);
  content('#quest_b', currentQuestion.b);
  content('#quest_c', currentQuestion.c);
  content('#opperation_btn', "");

// if a question is selected, run the next 
var userA =document.getElementById('quest_a');
userA.addEventListener("click", selectionA);

function selectionA(){
  userSelection=currentQuestion.a
  nextQuestion();
}

var userB =document.getElementById('quest_b');
userB.addEventListener("click",selectionB);

function selectionB(){
  userSelection=currentQuestion.b
  nextQuestion();
}

var userC =document.getElementById('quest_c');
userC.addEventListener("click", selectionC);

function selectionC(){
  userSelection=currentQuestion.c
  nextQuestion();
}
}


function nextQuestion(){
  function resultCheck(){
    if (userSelection===currentQuestion.answer){
      content('#results', "Correct!")
      wins++;
  }else{
    content('#results', "Incorrect!")
    losses++;
    timerCount= timerCount - 10;
  }
  }
  resultCheck();
   console.log(userSelection);
   qnumber++;
   greaterDisp();
    console.log(qnumber);
    console.log(wins);
 }
}


// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGameScreen);


// The startGame function is called when the start button is clicked
function startGameScreen() {
  //reset variables
  wins = 0;
  losses = 0;
  qnumber= 0;
  timerCount = 60;
  // reset result of previous answer on game rerun
  content('#results', "");
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  // start timer 
  startTimer();
  // activate the funtion that starts the quiz screen
  greaterDisp();
}

// endScreen function for when all results are in and equal to the length of the quiz
function endScreen(){
  content('#titles', "Thats it, you're done!!");
  // disp results
  var results = ('You have ' + wins +' correct answers, and ' + losses +' incorrect answers.');
  content('#questions', results)
  // reactiveate start button
  startButton.disabled = false;
  content('#opperation_btn', "<button>Try Again?</button>");
  // activate form to record highscores
  endScreenForm();
  return;
}

// highscores form, data collector
function endScreenForm(){
console.log(timerCount);
// set content to disp the form
content('#results', "Time remaining: " + timerCount + "<br>" +"<form id='formid'>Your Intials Here:<input type='text' name='inits' value='Initals'></form>" + "<br>" + "<button id='formBttn'>Submit Score</button>")
submitBttn =document.getElementById('formBttn')
// add event listener to sumbit bttn to run function highscores screen
submitBttn.addEventListener("click", highsScoresScreen);


function highsScoresScreen(){
  
var highScoresName = document.querySelector("formid".value);
console.log(highScoresName);
content('#results',highScoresName);

}
}


// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerCountTextEl.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (wins>=questionsList.length && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        endScreen();
      }
      if (losses>=questionsList.length && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        endScreen();
      }
      if (losses+wins>=questionsList.length && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        endScreen();
      }
    }
    // Tests if time has run out
    if (timerCount <= 0) {
      // Clears interval
      clearInterval(timer);
      endScreen();
    }
  }, 1000);
}


