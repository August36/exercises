const minNum = 1;
const maxNum = 100;

let computerGuess = document.querySelector("#computerGuess");

const startGameBtn = document.querySelector("#startGameBtn");
const correctAnswerBtn = document.querySelector("#correctAnswerBtn");
const tooLowBtn = document.querySelector("#tooLowBtn");
const tooHighBtn = document.querySelector("#tooHighBtn");

const resultMessage = document.querySelector("#result_message");

let attempts = 0;

// start game by adding an event listener that activates runGame()
startGameBtn.addEventListener("click", function () {
    runGame();
});

function resetGame() {
    attempts = 0;
    resultMessage.textContent = "";
}

// Random number
function generateRandomNumber() {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

tooLowBtn.addEventListener("click", function () {
    attempts++;

    // CurrentGuess is a string - this converts it to a number
    const currentGuess = parseInt(computerGuess.textContent, 10);

    // Generate a new guess between minNum and the previous computer guess
    const newGuess = Math.floor(Math.random() * (maxNum - currentGuess + 1)) + currentGuess;

    // Update computer guess
    computerGuess.textContent = newGuess;
});

tooHighBtn.addEventListener("click", function () {
    attempts++;

    // CurrentGuess is a string - this converts it to a number
    const currentGuess = parseInt(computerGuess.textContent, 10);

    // Generate a new guess between minNum and the previous computer guess
    const newGuess = Math.floor(Math.random() * (currentGuess - minNum + 1)) + minNum;

    // Update computer guess
    computerGuess.textContent = newGuess;
});

correctAnswerBtn.addEventListener("click", function () {
    resultMessage.textContent = `Congratulations! It took ${attempts} attempts to guess the correct number.`;
});

function runGame() {
    resetGame();
    // generate first computerGuess
    computerGuess.textContent = generateRandomNumber();
}