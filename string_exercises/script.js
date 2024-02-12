// const aName = "Peter Heronimous Lundin";

// const firstName = aName.substring(0, aName.indexOf(" "));
// console.log(firstName);

// const middleName = aName.substring(
//   aName.indexOf(" ") + 1,
//   aName.lastIndexOf(" ")
// );
// console.log(middleName);

// const lastName = aName.substring(aName.lastIndexOf(" ") + 1);

// console.log(lastName);

// console.log(aName.split(" "));

// const firstNameSplit = aName.split(" ")[0];

// split bruges til at lave en string om til et array

// __________________________________________________________________________________________

// Lav bogstaver i en string til upper/lowercase

// const aName = "LKadjaslkLKJ";

// console.log(
//   aName.slice(0, 2) + aName[2].toUpperCase() + aName.slice(3).toLowerCase()
// );

// ______________________________________________________________________________________________

// Profanity filter
//Skifter var ud med const

// const curesewords = [
//   { bad: "var", good: "const" },
//   { bad: "float", good: "grid" },
//   { bad: "marquee", good: "just don't" },
// ];
// document
//   .querySelector("button")
//   .addEventListener("pointerdown", checkIfSentenceContainProfanity);

// function checkIfSentenceContainProfanity() {
//   const theTextElement = document.querySelector("p");
//   let theText = theTextElement.textContent;
//   theText = theText.replace("var", "const");

//   console.log(theText);
// }

//_____________Skifter alle de dårlige ord ud_____________________

const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];
document
  .querySelector("button")
  .addEventListener("pointerdown", checkIfSentenceContainProfanity);

function checkIfSentenceContainProfanity() {
  const theTextElement = document.querySelector("p");
  let theText = theTextElement.textContent;

  curseWords.forEach((curseWord) => {
    theText = theText.replaceAll(curseWord.bad, curseWord.good);
  });

  console.log(theText);
}
