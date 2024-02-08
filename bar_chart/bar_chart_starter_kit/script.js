const list = document.querySelector("ul");

const cueArr = [];

setInterval(generateBars, 1000);

function generateBars() {
  cueArr.push(getRandomNum());
  console.log(cueArr);
  document.querySelectorAll("li").forEach((li, i) => {
    li.style.setProperty("--height", cueArr[i]);
  });

  if (cueArr.length > 20) {
    cueArr.shift();
  }
}

function getRandomNum() {
  return Math.round(Math.random() * 100);
}
