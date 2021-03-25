var questionsEl = document.getElementById('questions');
var questionTitleEl = document.getElementById('question-title');
var questionAnswerChoicesEl = document.getElementById('choices');

var startButton = document.getElementById('start-button');
var startScreen = document.getElementById('start-screen');
var questionScreen = document.getElementById('question-screen');
var resetButton = document.querySelector('.resetBtn');

var scoresEl = document.querySelector('.scores');
var feedEl = document.querySelector('.initialFeed');
// Individual button variables
// var buttonOne = document.getElementById('buttonFirst');
// var buttonTwo = document.getElementById('buttonSecond');
// var buttonThree = document.getElementById('buttonThird');
// var buttonFour = document.getElementById('buttonFourth');
// var buttons = document.querySelectorAll('button');

var userInitials = [];
var playerScore = 0;
var currentQIndex = 0;

var gameDuration = 60;
var timer;

const myQuestions = [
    {
      question: 'Who invented JavaScript?',
      answers: [
          {text: 'Jack Daniels', correct: false},
          {text: 'Ronald Reagan', correct: false},
          {text: 'Brendan Eich', correct: true},
          {text: 'Ronald Trettmann', correct: false}
        ]
    },
    {
      question: 'Commonly used data types DO NOT include:',
      answers: [
          {text: 'booleans', correct: false},
          {text: 'strings', correct: false},
          {text: 'alerts', correct: true},
          {text: 'numbers', correct: false}
        ]
    },
    {
      question: 'Arrays in JavaScript can be used to store:',
      answers: [
          {text: 'numbers and strings', correct: false},
          {text: 'other arrays', correct: false},
          {text: 'booleans', correct: false},
          {text: 'all of the above', correct: true}
        ]
    },
    {
      question: 'Inside of which HTML element do we put our JavaScript?',
      answers: [
        {text: '<meta>', correct: false},
        {text: '<script>', correct: true},
        {text: '<style>', correct: false},
        {text: '<head>', correct: false}
      ]
    },
    {
      question: 'JavaScript is designed for what purpose?',
      answers: [
        {text: 'to style HTML pages', correct: false},
        {text: 'to execute Queries related to databases on a server', correct: false},
        {text: 'to add interactivity to HTML pages', correct: false},
        {text: 'All of the above', correct: true}
      ]
    },
    {
      question: 'Among the keywords below, which is not a statement?',
      answers: [
        {text: 'with', correct: false},
        {text: 'if', correct: false},
        {text: 'for', correct: false},
        {text: 'use strict', correct: true}
      ]
    }
];

startButton.addEventListener('click', startGame)
    
scoresEl.classList.add('hidden');

function startGame(){
    startScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');

    //start the timer
    startTimer();
    //initialize score to 0
    displayQuestions();
}

function startTimer(){
    //timer code
    timer = document.createElement('div');
    timer.setAttribute('id', 'timer-readout');
    document.body.appendChild(timer);
    timerInterval = setInterval(function() {
        if(gameDuration < 1) { 
            
            clearInterval(timerInterval);
            gameOver();
        } else {
            gameDuration--;
        }
        // doesn't stop at zero
        document.getElementById('timer-readout').value = 10 - gameDuration;
        timer.innerHTML = gameDuration;
    },   1000); // 1000 ms per interval
}



function displayQuestions() {
    nextQuestion();
}

function nextQuestion(question) {
    questionTitleEl.innerHTML = myQuestions[currentQIndex].question;
    questionAnswerChoicesEl.innerHTML = '';
    myQuestions[currentQIndex].answers.forEach((answer) => {
        const button = document.createElement('button');
        
        button.setAttribute('class', 'choice');
        button.innerText = answer.text;
        questionAnswerChoicesEl.appendChild(button);

        button.addEventListener('click', function(event) {
            var userInput = event.target.innerText;
            for (i=0; i < myQuestions[currentQIndex].answers.length; i++) {
                if (myQuestions[currentQIndex].answers[i].text === userInput) {
                    if (myQuestions[currentQIndex].answers[i].correct === true) {
                        console.log('Correct!');
                    }  else { //
                        console.log('Incorrect.');
                        gameDuration -= 10;
                    }
                } 
                if (myQuestions[currentQIndex] === 7){
                    gameOver();
                }
            }
            currentQIndex++;
            displayQuestions();
        });

    });    

}

function gameOver() {
    questionScreen.classList.add('hidden');
    userInitials = prompt('You achieved a score of '+ gameDuration +'. Enter your initials to save your high score.')
    if (userInitials !== null) {
        localStorage.getItem('gameDuration')
        localStorage.setItem(gameDuration, playerScore);
        listScores();
        console.log(userInitials + '  ' + playerScore);

    }        

}

function listScores() {
    scoresEl.classList.remove('hidden');
    timer.classList.add('hidden');

    for (var i = 0; i < userInitials.length; i++) {
        
        var li = document.createElement("li");
        li.textContent = userInitials + '___' + playerScore;
        li.setAttribute("data-index", i);
        feedEl.appendChild(li);
    }

    resetButton.addEventListener('click', function() {
        startScreen.classList.remove('hidden');
        scoresEl.classList.add('hidden');
    });
}