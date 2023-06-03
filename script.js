const quizData = [
  {
    question: "What is the capital of FRANCE?",
    options: ["Paris", "London", "Berlin", "Rome"],
    correctAnswer: "Paris"
  },
  {
    question: "Who painted the MONA LISA?",
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

const quizContainer = document.getElementById("quiz-container");
const quizFeedback = document.getElementById("quiz-feedback");

function displayQuizQuestions() {
  quizData.forEach((question, index) => {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerHTML = `
      <h3>Question ${index + 1}:</h3>
      <p>${question.question}</p>
      <ul>
        ${question.options.map(option => `<li>${option}</li>`).join("")}
     </ul>
    `;
    quizContainer.appendChild(questionElement);
  });
}

function validateAnswers() {
  const userAnswers = [];
  const correctAnswers = [];
  const questions = document.querySelectorAll(".question");
  let score = 0;
  
  questions.forEach((question, index) => {
    const selectedOption = question.querySelector("li.selected");
    if (selectedOption) {
      userAnswers.push(selectedOption.textContent);
      correctAnswers.push(quizData[index].correctAnswer);
      if (selectedOption.textContent === quizData[index].correctAnswer) {
        score++;
        question.classList.add("correct");
      } else {
        question.classList.add("incorrect");
      }
    } else {
      userAnswers.push("");
      correctAnswers.push(quizData[index].correctAnswer);
    }
  });
  
  const feedback = `
    <p>You got ${score} out of ${quizData.length} questions correct!</p>
    <ul>
      ${userAnswers.map((answer, index) => {
        if (answer === correctAnswers[index]) {
          return `<li class="correct">${quizData[index].question} - ${correctAnswers[index]}</li>`;
        } else {
          return `<li class="incorrect">${quizData[index].question} - ${correctAnswers[index]}</li>`;
        }
      }).join("")}
    </ul>
  `;
  
  quizFeedback.innerHTML = feedback;
}

displayQuizQuestions();

const submitButton = document.createElement("button");
submitButton.textContent = "Submit";
submitButton.addEventListener("click", validateAnswers);
quizContainer.appendChild(submitButton);

const answerOptions = document.querySelectorAll(".question li");
answerOptions.forEach(option => {
  option.addEventListener("click", () => {
    if (option.classList.contains("selected")) {
      option.classList.remove("selected");
    } else {
      const selectedOption = option.parentNode.querySelector(".selected");
      if (selectedOption) {
        selectedOption.classList.remove("selected");
      }
      option.classList.add("selected");
    }
  });
});