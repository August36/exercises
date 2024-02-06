// what we know about functions so far
// - can be declared
// - can be Called
// - can be referenced
// - can recieve parameters
// - can return a value

function greeting(firstName) {
  return `Hello ${firstName}`;
}

// console.log(greeting("Hans"));

const sayHi = greeting; //Her referere vi samme function ved at give et den et andet navn/ lave functionen om til en variable

// console.log(sayHi("Mona"));

setTimeout(greeting, 1000, "ron"); // setTimeout bruges til at kalde en funktion med et delay, 1000 delen = 1000 millisekunder altså 1sec

//Denne function kan ændre hired: false til true og omvendt

function fireOrHire(action, person) {
  action(person);
}

const person3 = {
    firstName: "Harry",
    lastName: Potter
    hired: false,
};

const person4 = {
    firstName: "Ron",
    lastName: "Weasly"
    hired: true,
};

function hire(person) {
  person.hired = true;
}
function fire(person) {
  person.hired = false;
}

hire (person3);
console.log(person3);