const maxNum = 3;
const minNum = 1;

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

const texts = document.querySelector("#texts");
const lose = document.querySelector("#lose");
const win = document.querySelector("#win");
const draw = document.querySelector("#draw");

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

function shake(element) {
    element.classList.add("shake");
}

// Event listeners for buttons
rock.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * (maxNum - minNum +1)) + minNum;
    if (randomNumber === 1) {
        console.log("rock");
    } else if (randomNumber === 2) {
        console.log("paper");
    } else {
            console.log("scissors");
        }
    });

paper.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * (maxNum - minNum +1)) + minNum;
    if (randomNumber === 1) {
        console.log("rock");
    } else if (randomNumber === 2) {
        console.log("paper");
    } else {
            console.log("scissors");
        }
    });

scissors.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * (maxNum - minNum +1)) + minNum;
    if (randomNumber === 1) {
        console.log("rock");
    } else if (randomNumber === 2) {
        console.log("paper");
    } else {
            console.log("scissors");
        }
    });