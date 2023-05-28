// Add your JavaScript code here

// Milestone 1: Basic quiz format

// Sample quiz data (replace with your own)
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
    // Add more questions here...
  ];
  
  // Display quiz questions
  function displayQuizQuestions() {
    const quizContainer = document.getElementById("quiz-container");
    
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
  
  // Milestone 2: User input and feedback
  
  // Add event listeners to record user input and provide feedback
  function addQuizEventListeners() {
    const questions = document.getElementsByClassName("question");
    
    Array.from(questions).forEach((question, index) => {
      const options = question.getElementsByTagName("li");
      
      Array.from(options).forEach(option => {
        option.addEventListener("click", () => {
          // Check if selected option is correct
          const selectedAnswer = option.textContent;
          const correctAnswer = quizData[index].correctAnswer;
          const isCorrect = selectedAnswer === correctAnswer;
          
          // Provide feedback
          if (isCorrect) {
            option.classList.add("correct");
          } else {
            option.classList.add("incorrect");
            const correctOption = Array.from(options).find(opt => opt.textContent === correctAnswer);
            correctOption.classList.add("correct");
          }
        });
      });
    });
  }
  
  // Initialize the quiz
  function initQuiz() {
    displayQuizQuestions();
    addQuizEventListeners();
  }
  
  // Call the initQuiz function when the page loads
  window.addEventListener("load", initQuiz);
  