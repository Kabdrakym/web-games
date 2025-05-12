let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

const guessInput = document.getElementById('guessInput');
const submitBtn = document.getElementById('submitGuess');
const feedback = document.getElementById('feedback');
const attemptsLeft = document.getElementById('attemptsLeft');
const restartBtn = document.getElementById('restartBtn');

submitBtn.addEventListener('click', checkGuess);
restartBtn.addEventListener('click', resetGame);

function checkGuess() {
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    feedback.textContent = "Введите число от 1 до 100.";
    return;
  }

  attempts--;
  attemptsLeft.textContent = attempts;

  if (guess === randomNumber) {
    feedback.textContent = `Поздравляем! Вы угадали число ${randomNumber}! 🎉`;
    endGame();
  } else if (attempts === 0) {
    feedback.textContent = `Игра окончена. Загаданное число было ${randomNumber}.`;
    endGame();
  } else if (guess < randomNumber) {
    feedback.textContent = "Слишком мало! Попробуйте больше.";
  } else {
    feedback.textContent = "Слишком много! Попробуйте меньше.";
  }
}

function endGame() {
  guessInput.disabled = true;
  submitBtn.disabled = true;
  restartBtn.style.display = 'inline-block';
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 10;
  guessInput.disabled = false;
  submitBtn.disabled = false;
  feedback.textContent = '';
  guessInput.value = '';
  attemptsLeft.textContent = attempts;
  restartBtn.style.display = 'none';
}
