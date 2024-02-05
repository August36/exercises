const people = ["Harry", "Ron", "Hermione"];

// push - tilføjer nyt objekt til sidst i arrayet
result = people.push("draco");

// pop - fjerner sidste objekt i arrayet
result = people.pop();

// slice - tager i dette tilfælde fra objekt 1 til objekt 3 og laver et nyt array, men ændrer ikke det oprindelige array
result = people.slice(0, 3);

// splice - gør det samme som slice, men ændrer det oprindelige array
result = people.splice(0, 3, "cho");
// Her fjernes 0-3 altså harry, ron, hermione og tilføjer cho, så arrayet er = ["cho"]. Så hvis man console.logger "result", får man ["Harry", "Ron", "Hermione"], men hvis du console.logger people, altså selve arrayet får du ["cho"]

result = people.shift();
// shift(): Fjerner det første element fra starten af et array og returnerer dette element. Efter brug af shift() vil arrayet være ét element kortere, og indekseringen af de resterende elementer vil blive opdateret.
// Eksempel:
// var fruits = ["apple", "banana", "cherry"];
// var removedElement = fruits.shift();
// fruits bliver ["banana", "cherry"], og removedElement bliver "apple".unshift - tilføjer et objekt til starten

result = people.unshift();
// unshift(item1, item2, ...): Tilføjer et eller flere elementer til starten af et array og returnerer den nye længde af arrayet. Efter brug af unshift() vil arrayet indeholde de nye elementer i den angivne rækkefølge, og indekseringen af de eksisterende elementer vil blive øget.
// Eksempel:
// var fruits = ["banana", "cherry"];
// var newLength = fruits.unshift("apple", "orange");
// // fruits bliver ["apple", "orange", "banana", "cherry"], og newLength bliver 4

indexOf();
// var fruits = ["apple", "banana", "cherry", "apple", "orange"];
// var index = fruits.indexOf("apple");
// console.log(index);  Output: 0
// indexOf fortæller altså hvilket nummer i arrayet som objektet har

const letters = array.from("abcefghijklmn");
// Her laver vi stringen "abcefghijklmn" om til et array

split();
// split()-metoden i JavaScript bruges til at opdele en streng i et array af substrings baseret på en specificeret adskiller. Syntaksen for split() er som følger: streng.split(adskiller[, grænse]);

// Kig på derhjemme - hvordan laver man arrays om til en string?
