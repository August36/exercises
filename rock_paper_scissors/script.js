const maxNum = 3;
const minNum = 1;
const randomNumber = Math.floor(Math.random() * (maxNum - minNum +1)) + minNum;

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

const texts = document.querySelector("#texts");
const lose = document.querySelector("#lose");
const win = document.querySelector("#win");
const draw = document.querySelector("#draw");

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

