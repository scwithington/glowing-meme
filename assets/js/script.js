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
var currentQIndex = -1;

var gameDuration = 60;

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
    var timer = document.createElement("div");
    timer.setAttribute("id", "timer-readout");
    document.body.appendChild(timer);
    timerInterval = setInterval(function() {

        if(gameDuration <= 0) {
            clearInterval(timer);
            gameOver();
        }
        // 
        document.getElementById('timer-readout').value = 10 - gameDuration;
        gameDuration --;
        timer.innerHTML = gameDuration;
    },   1000); // 1000 ms per interval
}

const myQuestions = [
    {
      question: 'Who invented JavaScript?',
      answers: [
          {a: 'Boris the Soviet Lovehammer', correct: false},
          {b: 'Ronald Reagan', correct: false},
          {c: 'Brendan Eich', correct: true},
          {d: 'The letter 7', correct: false}
        ]
    },
    {
      question: 'Which one of these is not part of Javascript?',
      answers: [
          {a: 'booleans', correct: false},
          {b: 'main', correct: false},
          {c: 'albert', correct: true},
          {d: 'math', correct: false}
        ]
    },
    {
      question: 'Which tool can you use to format your code?',
      answers: [
          {a: 'ZBrush', correct: false},
          {b: 'Blender', correct: false},
          {c: 'Nothing', correct: false},
          {d: 'Prettier', correct: true}
        ]
    }
];


// console.log(myQuestions);

function displayQuestions() {
    currentQIndex++;
    nextQuestion();
}

function questionReset() {
    myQuestions[currentQIndex].answers.forEach((button) => {
        questionAnswerChoicesEl.removeElement(button)
        displayQuestions();
    });
}

function nextQuestion(question) {
    questionTitleEl.innerHTML = myQuestions[currentQIndex].question;
    myQuestions[currentQIndex].answers.forEach((answer) => {
        const button = document.createElement("button");
        
        button.setAttribute("class", "choice");
    // button.innerText = answers.text;
        questionAnswerChoicesEl.appendChild(button);
        questionAnswerChoicesEl.children[0].textContent = myQuestions[currentQIndex].answers[0].a;
        button.addEventListener('click', function() {
            displayQuestions();
        });
        
    });
}

// function userInput {

// }

function checkAnswer(correctAnswer) {
    if(answers.correct = true) {
        alert('correct');
    } else {
        alert('incorrect');
    }
}



console.log(buttons)

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