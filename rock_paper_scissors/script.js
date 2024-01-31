const maxNum = 3;
const minNum = 1;
const randomNumber = Math.floor(Math.random() * (maxNum - minNum +1)) + minNum;

console.log(randomNumber)

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

const texts = document.querySelector("#texts");
const lose = document.querySelector("#lose");
const win = document.querySelector("#win");
const draw = document.querySelector("#draw");

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

// Function to start the game - activates when a button is pressed
function playGame() {

}

// Event listeners for buttons
rock.addEventListener("click", function() {
    playGame("rock");
});

paper.addEventListener("click", function() {
    playGame("paper");
});

scissors.addEventListener("click", function() {
    playGame("scissors");
});