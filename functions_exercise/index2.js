function fireOrHire(action, person) {
  action(person);
}

const person3 = {
  firstName: "Harry",
  lastName: "Potter", // Tilføjet komma her
  hired: false,
};

const person4 = {
  firstName: "Ron",
  lastName: "Weasly", // Tilføjet komma her
  hired: true,
};

function hire(person) {
  person.hired = true;
}

function fire(person) {
  person.hired = false;
}

hire(person3);
console.log(person3);
