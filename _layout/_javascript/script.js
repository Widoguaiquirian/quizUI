'use strict';
// ! *********** FOR LESSONS NAMES *********** //
// ? *********** FOR REGULAR COMMENTS *********** //
const quizData = [
  {
    question: 'What does the phrase profit from mean?',
    a: 'Take advangate of someone.',
    b: 'Enjoy vacations',
    c: 'To get advantage from a situation.',
    d: 'Enjoy your free time',
    correct: 'c',
  },
  {
    question: 'What does the phrase take after mean?',
    a: 'To finally understand something that was hard to understand.',
    b: 'To be similar to and older member of your family.',
    c: 'To do something later',
    d: 'Postpone pendings',
    correct: 'b',
  },
  {
    question: 'What does the phrase take back mean?',
    a: 'Return.',
    b: 'Remove.',
    c: 'Consider.',
    d: 'Start from 0.',
    correct: 'a',
  },
  {
    question: 'What does thigh mean in spanish?',
    a: 'Riñon',
    b: 'Palma',
    c: 'Muslo',
    d: 'Pantufla',
    correct: 'c',
  },
  {
    question: 'How do you denote a quantity?',
    a: 'Alot',
    b: 'A lot',
    c: 'Much',
    d: 'So',
    correct: 'b',
  },
  {
    question: 'What are the 5 questions in English?',
    a: 'Which, what, when, where and why',
    b: 'Whow, what, when, which and why',
    c: 'Who, what, when, where and why',
    d: 'who, whose, when, those and why',
    correct: 'c',
  },
];

const quiz = document.getElementById('quiz');

const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach(function (answer) {
    answer.checked = false;
  });
}

function getSelected() {
  let answer;
  answerEls.forEach(function (answerEl) {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener('click', function () {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2> You answered correctly at ${score} / ${quizData.length} questions</h2>

        <button onclick="location.reload()"> Reload</button>
        `;
    }
  }
});
