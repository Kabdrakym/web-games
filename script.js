let score = 0;
let highscore = localStorage.getItem("highscore") || 0;
let timer;
let timeRemaining = 30;

document.getElementById("score").textContent = `Очки: ${score}`;
document.getElementById("highscore").textContent = `Рекорд: ${highscore}`;

const clickButton = document.getElementById("clickButton");
const resetButton = document.getElementById("resetButton");
const timerDisplay = document.getElementById("timer");
const messageDisplay = document.getElementById("message");

clickButton.addEventListener("click", () => {
    score++;
    document.getElementById("score").textContent = `Очки: ${score}`;
    clickButton.classList.add("clicked");

    setTimeout(() => {
        clickButton.classList.remove("clicked");
    }, 200);

    if (score > highscore) {
        highscore = score;
        localStorage.setItem("highscore", highscore);
        document.getElementById("highscore").textContent = `Рекорд: ${highscore}`;
    }
});

resetButton.addEventListener("click", () => {
    score = 0;
    document.getElementById("score").textContent = `Очки: ${score}`;
    messageDisplay.textContent = "";
    timeRemaining = 30;
    timerDisplay.textContent = `Оставшееся время: ${timeRemaining} секунд`;
    clearInterval(timer);
    startGame();
});

function startGame() {
    timer = setInterval(() => {
        timeRemaining--;
        timerDisplay.textContent = `Оставшееся время: ${timeRemaining} секунд`;

        if (timeRemaining <= 0) {
            clearInterval(timer);
            messageDisplay.textContent = `Игра окончена! Ваш результат: ${score} очков.`;
            if (score > highscore) {
                localStorage.setItem("highscore", score);
                document.getElementById("highscore").textContent = `Рекорд: ${score}`;
            }
        }
    }, 1000);
}

// Старт игры сразу после загрузки страницы
startGame();
