"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
// const locale = "da";

// // Target the object in de-texts that says das bot

// texts.de.texts[0].text;
// console.log(texts.de.texts[0].text);

// Du kan også gøre det sådan her

// texts.de.texts[0].text;
// console.log(texts[de].texts[0].text); // - altså i stedet for dot notation, så kan du bruge hardbrackets omkring "de"

// let locale = "de"; // her kan du skifte mellem da og de, og dermed nå de forskellige arrays

// console.log(texts[locale].texts[0].text);

// texts[locale].texts.forEach((each) => {
//   console.log(each);
// });

let locale = "de";

console.log(texts[locale].texts[0].text);

texts[locale].texts.forEach((each) => {
  document.querySelector(each.location).textContent = "Hej";
  console.log(each.location);
});
