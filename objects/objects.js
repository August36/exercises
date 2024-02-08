// // Basic objects

// // et object:

// // let object = {
// //     firstName: "Klaus",
// //     age: 58,
// //     student: false
// // };

// // Arrays are for list of items of the same time

// // objects are for properties - and methods - that belong together
// // Properties in an object are in a random order, and can be addressed by name

// // let object = {
// //   firstName: "Klaus",
// //   age: 58,
// //   student: false,
// // };

// // console.log(`${object.firstName} is ${object.age}`);

// // let nameToGet = "firstName";

// // you can get properties with brackets:
// // console.log(`${object [nameToGET]} is  ${object ["age"]}`);

// // *** Adding a lastName property to the object ***
// // let person1 = {
// //   firstName: "Klaus",
// //   age: 58,
// //   student: false,
// // };

// // console.log(person1.lastName);

// // person1.lastName = "Mandal";

// // console.log(person1);

// // *** Removing property ***

// let person1 = {
//   firstName: "Klaus",
//   age: 58,
//   student: false,
// };

// person1.lastName = undefined;

// console.log("person1.lastName:", person1.lastName);

// // Adding properties
// person1.middleName = "Hans";

// console.log("person1.middleName:", person1.middleName);

// // By typing the object's variable name (object) followed the property's name as a astring in brackets (["firstName"])

// // Getting properties with brackets:
// let name = object["firstName"];
// //Setting properties with brackets
// object["firstName"] = "Bob";

// console.log(person1.lastName);

// // Removing properties
// delete person1.lastName;

// Like arrays, objects declared with const can be modified

// const person1 = {
//   firstName: "Klaus",
//   age: 58,
//   student: false,
// };

// console.log(person1);

// person1.age++; // adds 1 to age

// console.log(person1);

// But the value itself cannot be reassigned (if declared with const)

// const person1 = {
//   firstName: "Klaus",
//   age: 58,
//   student: false,
// };

// const person2 = {
//   firstName: "Bob",
//   age: 82,
//   student: true,
// };

// person1 = person2; // "uncaught typeError"

// Mutability references and copies
// The same object can exist in multiple places.

// const person1 = {
//   firstName: "Klaus",
//   age: 58,
//   student: false,
// };

// const person2 = person1;

// person2.firstName = "Bob";
// console.log(person2);

//  ^^You would think that you made a copy, but actually you just reference to person1 variable and modify person1

//These are two different objects
// const person1 = {
//   firstName: "Klaus",
//   age: 58,
//   student: false,
// };
// const person2 = {
//   firstName: "Klaus",
//   age: 58,
//   student: false,
// };

//Here the second becomes the first - There is still 2 objects in the array, but the variable person1 and person2 are merged.

// const person1 = {
//   firstName: "Klaus",
//   age: 58,
//   student: false,
// };

// const person2 = person1;
