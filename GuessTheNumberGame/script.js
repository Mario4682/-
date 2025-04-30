// Генерираме тайно число между 1 и 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// Функция за проверка на предположението
function checkGuess() {
    // Взимаме стойността от полето
    const guess = Number(document.getElementById("guessInput").value);
    const message = document.getElementById("resultMessage");

    // Проверяваме дали е празно поле
    if (!guess) {
        message.textContent = "Моля, въведи число!";
        return;
    }

    // Сравняваме въведеното число със скритото
    if (guess === secretNumber) {
        message.textContent = "Браво! Позна правилното число!";
        message.style.color = "green";
    } else if (guess < secretNumber) {
        message.textContent = "Тайното число е ПО-ГОЛЯМО.";
        message.style.color = "blue";
    } else {
        message.textContent = "Тайното число е ПО-МАЛКО.";
        message.style.color = "orange";
    }
}
