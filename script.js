const quizContainer = document.getElementById("quiz-container");
const quizFeedback = document.getElementById("quiz-feedback");
const submitButton = document.getElementById("submit-button");

// Function to display quiz questions for Quiz 1
function displayQuizQuestions() {
  quizData.forEach((question, index) => {
    const questionElement = createQuestionElement(question, index);
    quizContainer.appendChild(questionElement);
  });
}

// Function to display quiz questions for Quiz 2
function displayQuizQuestions2() {
  quizData2.forEach((question, index) => {
    const questionIndex = index + quizData.length;
    const questionElement = createQuestionElement(question, questionIndex);
    quizContainer.appendChild(questionElement);
  });
}

// Function to create a question element
function createQuestionElement(question, index) {
  const questionElement = document.createElement("div");
  questionElement.classList.add("question");
  questionElement.innerHTML = `
    <h3>Question ${index + 1}:</h3>
    <p>${question.question}</p>
    <ul>
      ${question.options.map(option => `<li>${option}</li>`).join("")}
   </ul>
  `;
  return questionElement;
}

// Function to validate user's answers and provide feedback
function validateAnswers() {
  const userAnswers = [];
  const correctAnswers = [];
  const questions = document.querySelectorAll(".question");
  let score = 0;

  questions.forEach((question, index) => {
    const selectedOption = question.querySelector("li.selected");
    if (selectedOption) {
      userAnswers.push(selectedOption.textContent);
      if (index < quizData.length) {
        correctAnswers.push(quizData[index].correctAnswer);
        if (selectedOption.textContent === quizData[index].correctAnswer) {
          score++;
          question.classList.add("correct");
        } else {
          question.classList.add("incorrect");
        }
      } else {
        const quiz2Index = index - quizData.length;
        correctAnswers.push(quizData2[quiz2Index].correctAnswer);
        if (selectedOption.textContent === quizData2[quiz2Index].correctAnswer) {
          score++;
          question.classList.add("correct");
        } else {
          question.classList.add("incorrect");
        }
      }
    } else {
      userAnswers.push("");
      if (index < quizData.length) {
        correctAnswers.push(quizData[index].correctAnswer);
      } else {
        const quiz2Index = index - quizData.length;
        correctAnswers.push(quizData2[quiz2Index].correctAnswer);
      }
    }
  });

  const feedback = `
    <p>You got ${score} out of ${quizData.length + quizData2.length} questions correct!</p>
    <ul>
      ${userAnswers.map((answer, index) => {
        if (answer === correctAnswers[index]) {
          if (index < quizData.length) {
            return `<li class="correct">${quizData[index].question} - ${correctAnswers[index]}</li>`;
          } else {
            const quiz2Index = index - quizData.length;
            return `<li class="correct">${quizData2[quiz2Index].question} - ${correctAnswers[index]}</li>`;
          }
        } else {
          if (index < quizData.length) {
            return `<li class="incorrect">${quizData[index].question} - ${correctAnswers[index]}</li>`;
          } else {
            const quiz2Index = index - quizData.length;
            return `<li class="incorrect">${quizData2[quiz2Index].question} - ${correctAnswers[index]}</li>`;
          }
        }
      }).join("")}
    </ul>
  `;

  quizFeedback.innerHTML = feedback;
}

displayQuizQuestions();
displayQuizQuestions2();
submitButton.addEventListener("click", validateAnswers);

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
const quizData = [
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

