var questionsEl = document.getElementById('questions');
var questionTitleEl = document.getElementById('question-title');
var questionAnswerChoicesEl = document.getElementById('choices');

var startButton = document.getElementById('start-button');
var startScreen = document.getElementById('start-screen');
var questionScreen = document.getElementById('question-screen');

var buttonOne = document.getElementById('buttonFirst');
var buttonTwo = document.getElementById('buttonSecond');
var buttonThree = document.getElementById('buttonThird');
var buttonFour = document.getElementById('buttonFourth');
var buttons = document.querySelectorAll('button');

startButton.addEventListener('click', startGame)

function startGame(){
    startScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');
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

// function checkAnswer(correctAnswer) {
//     if(correct = true) {
//         alert('correct');
//     } else {
//         alert('incorrect');
//     }
// }

// var buttons = addEventListener('click', function(){
//     checkAnswer();
//     nextQuestion();
// });

// function nextQuestion() {
//     questionTitleEl.textContent = myQuestions[0].question;
//     buttonOne.textContent = myQuestions[0].answers[0];
//     buttonTwo.textContent = myQuestions[0].answers[1];
//     buttonThree.textContent = myQuestions[0].answers[2];
//     buttonFour.textContent = myQuestions[0].answers[3];
// }

