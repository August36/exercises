const aName = "Peter Heronimous Lundin";

const firstName = aName.substring(0, aName.indexOf(" "));
console.log(firstName);

const middleName = aName.substring(
  aName.indexOf(" ") + 1,
  aName.lastIndexOf(" ")
);
console.log(middleName);

const lastName = aName.substring(aName.lastIndexOf(" ") + 1);

console.log(lastName);

console.log(aName.split(" "));

const firstNameSplit = aName.split(" ")[0];

// split bruges til at lave en string om til et array
