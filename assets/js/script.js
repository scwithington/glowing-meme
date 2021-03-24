var questionsEl = document.getElementById('questions');
var questionTitleEl = document.getElementById('question-title');
var questionAnswerChoicesEl = document.getElementById('choices');

var startButton = document.getElementById('start-button');
var startScreen = document.getElementById('start-screen');
var questionScreen = document.getElementById('question-screen');

// Individual button variables
// var buttonOne = document.getElementById('buttonFirst');
// var buttonTwo = document.getElementById('buttonSecond');
// var buttonThree = document.getElementById('buttonThird');
// var buttonFour = document.getElementById('buttonFourth');
// var buttons = document.querySelectorAll('button');

var playerScore = 0;
var currentQIndex = 0;

var gameDuration = 10;
var timer;

startButton.addEventListener('click', startGame)

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
    timer = document.createElement("div");
    timer.setAttribute("id", "timer-readout");
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

const myQuestions = [
    {
      question: 'Who invented JavaScript?',
      answers: [
          {text: 'Boris the Soviet Lovehammer', correct: false},
          {text: 'Ronald Reagan', correct: false},
          {text: 'Brendan Eich', correct: true},
          {text: 'The letter 7', correct: false}
        ]
    },
    {
      question: 'Which one of these is not part of Javascript?',
      answers: [
          {text: 'booleans', correct: false},
          {text: 'main', correct: false},
          {text: 'albert', correct: true},
          {text: 'math', correct: false}
        ]
    },
    {
      question: 'Which tool can you use to format your code?',
      answers: [
          {text: 'ZBrush', correct: false},
          {text: 'Blender', correct: false},
          {text: 'Nothing', correct: false},
          {text: 'Prettier', correct: true}
        ]
    }
];

function displayQuestions() {
    nextQuestion();
    
}

function nextQuestion(question) {
    questionTitleEl.innerHTML = myQuestions[currentQIndex].question;
    questionAnswerChoicesEl.innerHTML = '';
    myQuestions[currentQIndex].answers.forEach((answer) => {
        const button = document.createElement("button");
        
        button.setAttribute("class", "choice");
        button.innerText = answer.text;
        questionAnswerChoicesEl.appendChild(button);

        button.addEventListener('click', function(event) {
            var userInput = event.target.innerText;
            for (i=0; i < myQuestions[currentQIndex].answers.length; i++) {
                if (myQuestions[currentQIndex].answers[i].text === userInput) {
                    if (myQuestions[currentQIndex].answers[i].correct === true) {
                        alert('Correct!');
                    }  else { //
                        alert('Incorrect.');
                    }
                }
            }
            currentQIndex++;
            displayQuestions();
        });

    });    

}

// function checkAnswer(correctAnswer) {
//     if(answer.correct = true) {
//         alert('correct');
//     } else {
//         alert('incorrect');
//     }
// }



// console.log(buttons)

// function nextQuestion() {
//     questionTitleEl.textContent = myQuestions[0].question;
//     buttonOne.textContent = myQuestions[0].answers[0];
//     buttonTwo.textContent = myQuestions[0].answers[1];
//     buttonThree.textContent = myQuestions[0].answers[2];
//     buttonFour.textContent = myQuestions[0].answers[3];
// }

function gameOver() {
    if (gameDuration > 0) {
        gameDuration = 0;
        gameDuration.innerHTML = '0';
    }

    // return;
}

function gameReset() {

}