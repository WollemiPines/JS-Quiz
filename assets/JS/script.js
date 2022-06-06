//variables for ellements
var startButton= document.getElementById('opperation_btn');
var timerCountTextEl = document.querySelector('.time_left');
var userSelection="";
let qnumber=0;


// Change content function
function content(divSelector, value){
  document.querySelector(divSelector).innerHTML=value;
};


var questionsList= [question1, question2, question3];

  // Questions and answers inside indiv objects

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
  c:"JSON.stringify(object) ",
  answer:"JSON.stringify(object) ",
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
  function questionDisp(){
  console.log(qnumber);
  console.log(questionsList);

  content('#titles', currentQuestion.question);
  content('#questions', " <button id='quest_a'>''</button>" +"<br>" + " <button id='quest_b'>''</button>" +"<br>" + " <button id='quest_c'>''</button>");
  content('#quest_a', currentQuestion.a);
  content('#quest_b', currentQuestion.b);
  content('#quest_c', currentQuestion.c);
  content('#opperation_btn', "");

function selectionA(){
  userSelection=currentQuestion.a
  nextQuestion();
}
function selectionB(){
  userSelection=currentQuestion.b
  nextQuestion();
}
function selectionC(){
  userSelection=currentQuestion.c
  nextQuestion();
}


var userA =document.getElementById('quest_a');
userA.addEventListener("click", selectionA);

var userB =document.getElementById('quest_b');
userB.addEventListener("click",selectionB);

var userC =document.getElementById('quest_c');
userC.addEventListener("click", selectionC);
}


function nextQuestion(){
  function resultCheck(){
    if (userSelection===currentQuestion.answer){
      content('#results', "Correct!")
      wins++;
  }else{
    content('#results', "Incorrect!")
    losses++;
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

content('#opperation_btn', "<button>Start Game</button>");

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGameScreen);


// The startGame function is called when the start button is clicked
function startGameScreen() {
  //Run first q screen
  wins = 0;
  losses = 0;
  timerCount = 60;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  startTimer();
  greaterDisp();
}

function endScreen(){
  content('#titles', "Thats it, you're done!!");
  var results = ('You have ' + wins +' correct answers, and ' + losses +' incorrect answers.');
  content('#questions', results)
  content('#results', fillInName())
}
function fillInName(){
  
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
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      endScreen();
    }
  }, 1000);
}



// Start Bttn pressed

//Timer counts down from 60

// Slide changes to quiz


// Question pressed/answered = next side swaps in

