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

// Event listeners for buttons
rock.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * (maxNum - minNum +1)) + minNum;
    if (randomNumber === 1) {
        console.log("rock");
    }
});

paper.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * (maxNum - minNum +1)) + minNum;
    if (randomNumber === 2) {
        console.log("paper")
    };
});

scissors.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * (maxNum - minNum +1)) + minNum;
    if (randomNumber === 3) {
        console.log("scissors")
    };
});