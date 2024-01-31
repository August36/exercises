const minNum = 1;
const maxNum = 100;
let answer = generateRandomNumber();

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
        // Hvis svaret ikke er et tal - fejlmeddelelse - input kan kun modtage tal men tilføjet for en sikkerhedsskyld
        resultMessage.textContent = "Skriv venligst en gyldigt nummer";
        // Hvis svaret er mindre end minNum eller størrer end maxNum - fejlmeddelelse
    } else if (guess < minNum || guess > maxNum) {
        resultMessage.textContent = "Skriv venligst et gyldigt nummer";
    } else {
        //Tilføj et brugt forsøg
        attempts++;
        if (guess < answer) {
            resultMessage.textContent = "For lavt. Prøv igen!";
        } else if (guess > answer) {
            resultMessage.textContent = "For højt. Prøv igen!";
        } else {
            resultMessage.textContent = `Korrekt! Det rigtige svar er ${answer}. Du brugte ${attempts} forsøg`;

            resultMessage.classList.add('celebrate');

            attempts = 0;
            userGuessInput.value = "";
            answer = generateRandomNumber();

            setTimeout(() => {
                resultMessage.classList.remove('celebrate');
            }, 1000);
        }
    }
}