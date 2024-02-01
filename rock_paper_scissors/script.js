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

// ******************* SHAKE ANIMATION *******************

// By making element a parameter to the function you can target any html element
function shake(element) {
  element.classList.add("shake");
  // Removes shake animation after the duration (1.8sec)
  setTimeout(() => {
    element.classList.remove("shake");
  }, 1800);
}

// ******************* EVENT LISTENERS *******************

// ******************* ROCK *******************
rock.addEventListener("click", () => {
  //remove previous classes from player1 for when the game is restarted
  player1.classList.remove("rock", "paper", "scissors");
  // add the right class
  player1.classList.add("player", "rock");
  // hides win/lose/draw text for when the game is restarted
  win.classList.add("hidden");
  draw.classList.add("hidden");
  lose.classList.add("hidden");
  // Clear previous classes from player2 for when the game is restarted
  player2.classList.remove("player", "rock", "paper", "scissors");
  // generate random number
  const randomNumber =
    Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  // call shake function and target each player
  shake(player1);
  shake(player2);
  if (randomNumber === 1) {
    player2.classList.add("player", "rock");
    setTimeout(() => {
      draw.classList.remove("hidden");
    }, 1800);
  } else if (randomNumber === 2) {
    //change player2 img to paper
    player2.classList.add("player", "paper");
    //after 1.8 sec result text will be shown
    setTimeout(() => {
      lose.classList.remove("hidden");
    }, 1800);
  } else {
    player2.classList.add("player", "scissors");
    setTimeout(() => {
      win.classList.remove("hidden");
    }, 1800);
  }
});

// ******************* PAPER *******************

paper.addEventListener("click", () => {
  player1.classList.remove("rock", "paper", "scissors");
  player1.classList.add("player", "paper");
  win.classList.add("hidden");
  draw.classList.add("hidden");
  lose.classList.add("hidden");
  player2.classList.remove("player", "rock", "paper", "scissors");
  const randomNumber =
    Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  shake(player1);
  shake(player2);
  if (randomNumber === 1) {
    player2.classList.add("player", "rock");
    setTimeout(() => {
      win.classList.remove("hidden");
    }, 1800);
  } else if (randomNumber === 2) {
    player2.classList.add("player", "paper");
    setTimeout(() => {
      draw.classList.remove("hidden");
    }, 1800);
  } else {
    player2.classList.add("player", "scissors");
    setTimeout(() => {
      lose.classList.remove("hidden");
    }, 1800);
  }
});

// ******************* SCISSORS *******************

scissors.addEventListener("click", () => {
  player1.classList.remove("rock", "paper", "scissors");
  player1.classList.add("player", "scissors");
  win.classList.add("hidden");
  draw.classList.add("hidden");
  lose.classList.add("hidden");
  player2.classList.remove("player", "rock", "paper", "scissors");
  const randomNumber =
    Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  shake(player1);
  shake(player2);
  if (randomNumber === 1) {
    player2.classList.add("player", "rock");
    setTimeout(() => {
      lose.classList.remove("hidden");
    }, 1800);
  } else if (randomNumber === 2) {
    player2.classList.add("player", "paper");
    setTimeout(() => {
      win.classList.remove("hidden");
    }, 1800);
  } else {
    player2.classList.add("player", "scissors");
    setTimeout(() => {
      draw.classList.remove("hidden");
    }, 1800);
  }
});
