const minNum = 1;
const maxNum = 100;

const computerGuess = document.querySelector("#computerGuess");

const startGameBtn = document.querySelector("#startGameBtn");
const correctAnswerBtn = document.querySelector("#correctAnswerBtn");
const tooLowBtn = document.querySelector("#tooLowBtn");
const tooHighBtn = document.querySelector("#tooHighBtn");

const resultMessage = document.querySelector("#result_message");

let attempts = 0;

// start game by adding eventlistener that activates runGame()
startGameBtn.addEventListener("click", function () {
    runGame()
});

// Random number
function generateRandomNumber() {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

function runGame() {
    computerGuess.textContent = generateRandomNumber();
}

