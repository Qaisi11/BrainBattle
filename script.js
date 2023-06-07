const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      correctAnswer: "Paris"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
      correctAnswer: "Leonardo da Vinci"
    },
    {
      question: "What is the capital of Canada?",
      options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
      correctAnswer: "Ottawa"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Mercury", "Venus", "Earth", "Jupiter"],
      correctAnswer: "Jupiter"
    },
    {
      question: "What is the largest organ in the human body?",
      options: ["Liver", "Heart", "Lungs", "Skin"],
      correctAnswer: "Skin"
    },
    {
      question: "Who invented the telephone?",
      options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Benjamin Franklin"],
      correctAnswer: "Alexander Graham Bell"
    },
    {
      question: "What is the national animal of Canada?",
      options: ["Bald eagle", "Beaver", "Grizzly bear", "Moose"],
      correctAnswer: "Beaver"
    },
    {
      question: "What is the tallest mammal in the world?",
      options: ["Giraffe", "Elephant", "Hippopotamus", "Rhino"],
      correctAnswer: "Giraffe"
    }
  ];


  const quizData2 = [
    {
      question: "What is the capital of Japan?",
      options: ["Tokyo", "Seoul", "Beijing", "Bangkok"],
      correctAnswer: "Tokyo"
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
      correctAnswer: "William Shakespeare"
    },
    {
      question: "What is the currency of Australia?",
      options: ["Dollar", "Pound", "Euro", "Yen"],
      correctAnswer: "Dollar"
    },
    {
      question: "Which country is known as the 'Land of the Rising Sun'?",
      options: ["China", "India", "Japan", "Australia"],
      correctAnswer: "Japan"
    },
    {
      question: "Who painted the famous artwork 'The Starry Night'?",
      options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"],
      correctAnswer: "Vincent van Gogh"
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
      correctAnswer: "Pacific Ocean"
    }
  
  ];