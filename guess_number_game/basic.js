const minNum = 1;
const maxNum = 100;
let answer = generateRandomNumber(); // Function to generate a random number

const gameRules = document.querySelector("#game_rules");
const userGuessInput = document.querySelector("#user_guess");
const resultMessage = document.querySelector("#result_message");
const guessButton = document.getElementById("guessButton");

let attempts = 0;

guessButton.addEventListener("click", function () {
    runGame();
});

function generateRandomNumber() {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

function runGame() {
    let guess = Number(userGuessInput.value);

    if (isNaN(guess)) {
        resultMessage.textContent = "Skriv venligst en gyldigt nummer";
    } else if (guess < minNum || guess > maxNum) {
        resultMessage.textContent = "Skriv venligst et gyldigt nummer";
    } else {
        attempts++;
        if (guess < answer) {
            resultMessage.textContent = "For lavt. Prøv igen!";
        } else if (guess > answer) {
            resultMessage.textContent = "For højt. Prøv igen!";
        } else {
            resultMessage.textContent = `Korrekt! Det rigtige svar er ${answer}. Du brugte ${attempts} forsøg`;
            // Reset game state for the next round
            attempts = 0; // Reset attempts for the next round
            userGuessInput.value = ""; // Clear the input field
            answer = generateRandomNumber(); // Generate a new random number for the next round
        }
    }
}