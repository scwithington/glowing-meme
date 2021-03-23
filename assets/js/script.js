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

var gameDuration = 90;

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
    timerInterval = setInterval(() => {
        gameDuration--;
        // Math variables stating a rotation of 60 seconds
        var minuteHand = Math.floor(gameDuration / 60);
        var secondHand = gameDuration % 60;
        // Assigning an extra zero in front of minute-hand numbers that are less than 10.
        if (secondHand < 10) {
            secondHand = '0' + secondHand;
        }
        // 
        timer.innerHTML = `${minuteHand}:${secondHand}`;
        // Terminate game function when seconds less than or equal to zero
        if (gameDurationInSec = 0) {
            gameOver();
        // console.log(gameDuration);
        }
    },   1000); // 1000 ms per interval
}

const myQuestions = [
    {
      question: 'Who invented JavaScript?',
      answers: [
          {a: 'Boris Shmokakov', correct: false},
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
          {a: 'Dota 2', correct: false},
          {b: 'A bag of cashews', correct: false},
          {c: 'Nothing', correct: false},
          {d: 'Prettier', correct: true}
        ]
    }
];


// console.log(myQuestions);

function displayQuestions() {
    questionReset();
    currentQIndex++;
    nextQuestion();
}

function questionReset() {
    
}

function nextQuestion(question) {
    questionTitleEl.innerHTML = myQuestions[currentQIndex].question;
    myQuestions[currentQIndex].answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = myQuestions[currentQIndex].answers[answer];
        button.setAttribute("class", "choice");
    // button.innerText = answers.text;
        questionAnswerChoicesEl.appendChild(button);
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