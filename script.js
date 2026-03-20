let currentQuestionIndex = 0;
let userAnswers = [];

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const backBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const progressElement = document.getElementById("progress");
const sectionTitleElement = document.getElementById("section-title");
const questionElement = document.getElementById("question");
const textBlockElement = document.getElementById("text-block");
const answersElement = document.getElementById("answers");
const scoreElement = document.getElementById("score");
const mistakesElement = document.getElementById("mistakes");

startBtn.addEventListener("click", startQuiz);
backBtn.addEventListener("click", goBack);
nextBtn.addEventListener("click", goNext);
restartBtn.addEventListener("click", restartQuiz);

function startQuiz() {
  currentQuestionIndex = 0;
  userAnswers = [];

  startScreen.style.display = "none";
  quizScreen.style.display = "block";
  resultScreen.style.display = "none";

  showQuestion();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  sectionTitleElement.textContent = "GRAMMAR";
  questionElement.textContent = currentQuestion.question;
  textBlockElement.innerHTML = "";
  answersElement.innerHTML = "";

  backBtn.style.display = currentQuestionIndex === 0 ? "none" : "inline-block";

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;

    const optionLetter = ["a", "b", "c", "d"][index];

    if (userAnswers[currentQuestionIndex] === optionLetter) {
      button.classList.add("selected");
    }

    button.addEventListener("click", () => {
      userAnswers[currentQuestionIndex] = optionLetter;

      const allButtons = answersElement.querySelectorAll("button");
      allButtons.forEach(btn => btn.classList.remove("selected"));

      button.classList.add("selected");
    });

    answersElement.appendChild(button);
  });
}

function goNext() {
  if (!userAnswers[currentQuestionIndex]) {
    alert("Please select an answer.");
    return;
  }

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    showResults();
  }
}

function goBack() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
}

function showResults() {
  let correct = 0;
  let mistakesHtml = "<h3>Mistakes:</h3>";

  questions.forEach((question, index) => {
    if (userAnswers[index] === correctAnswers[index]) {
      correct++;
    } else {
      const correctIndex = ["a", "b", "c", "d"].indexOf(correctAnswers[index]);
      const userIndex = ["a", "b", "c", "d"].indexOf(userAnswers[index]);

      const correctText = correctIndex !== -1 ? question.options[correctIndex] : "Unknown";
      const userText = userIndex !== -1 ? question.options[userIndex] : "No answer";

      mistakesHtml += `
        <div class="mistake-item">
          <p><strong>${index + 1}. ${question.question}</strong></p>
          <p>Your answer: ${userText}</p>
          <p>Correct answer: ${correctText}</p>
        </div>
      `;
    }
  });

  const wrong = questions.length - correct;
  const percent = Math.round((correct / questions.length) * 100);
  const level = getLevel(correct);

  quizScreen.style.display = "none";
  resultScreen.style.display = "block";

  scoreElement.innerHTML = `
    Total Questions: ${questions.length} <br>
    Correct Answers: ${correct} <br>
    Wrong Answers: ${wrong} <br>
    Score: ${percent}% <br>
    <strong>Level: ${level}</strong>
  `;

  if (correct === questions.length) {
    mistakesElement.innerHTML = "<h3>Mistakes:</h3><p>No mistakes. Great job!</p>";
  } else {
    mistakesElement.innerHTML = mistakesHtml;
  }
}

function restartQuiz() {
  startScreen.style.display = "block";
  quizScreen.style.display = "none";
  resultScreen.style.display = "none";
}