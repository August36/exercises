// "use strict";

// let firstName = "Joe";
// let lastName = "Hansen";

// sayHello(firstName);

// function sayHello(firstName, lastName) {
//   console.log(`Hello ${lastName} ${firstName}`);
// }

//Exercise 1b
// 1. What happens when function is called before its declared
// Still console.logs with no errors
// 2.The function is called with "myName"
//Its shows the value of the variable "myName"
// 3.There is another variable called Firstname outside the function?
// It takes the value of that function
// 4. The function is called without any parameter?
//Dosent console.log "firstName" as its not declared anywhere
// The function is called with firstName and LastName
// Both firstName and lastName is console.logged, if concatenated correctly
// The function is called with lastName before firstName
// order is reversed??

//Exercise 2a

//1. create another function called presentPet

let firstName = "August";
let animalType = "Cat";
let animalName = "Batman";

function presentPet(firstName, animalType, animalName) {
  console.log(
    `My name is ${firstName}, i have a ${animalType} called ${animalName}`
  );
}

presentPet(firstName, animalType, animalName);
