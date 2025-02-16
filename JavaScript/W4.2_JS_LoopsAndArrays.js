// ARRAYS

let fruits = ["apple", "banana", "cherry"];
fruits[0] = "blueberry";

console.log(fruits[0]);
console.log(fruits.length);

fruits.push("banana");
fruits.unshift("grapes");
fruits.pop();

console.log(fruits);

// let teas = ["masala", "ginger", "oolong", "orange", "rose", "lemon"];

// teas[h];

// teas.length; // result - 6

// let h = 5; // h <= 5, h < 6

// loops also known as - iteration (i) - for
// step-1 - variable leke aao
// step - 2 - limit batao
// step - 3 - incre ya decre = h = h + 1; this is also same h++

// for (let h = 0; h < teas.length + 99; h++) {
//   console.log(`Teas at index ${h}: ${teas[h]}`);
// }

// sum of number in an array

let myArray = [1, 4, 2, 3, 5, 6];

function sumFactor(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
    // sum += numbers[i];
  }
  return sum;
}

let result = sumFactor(myArray);
console.log(result);

let anotherArray = sumFactor([3, 6, 9, 3, 7, 3, 7, 6]);
console.log(`My result of anotherArrays: ${anotherArray}`);

//* ARRAY MACHINE CODING

// Problem: Create an array containing different types of teas.

const teas = [
  "Green Tea",
  "Black Tea",
  "Oolong Tea",
  "White Tea",
  "Herbal Tea",
];

console.log(teas);

// Add "Chamomile Tea" to the existing list of teas.
teas.push("Chamomile Tea");
console.log(teas);

// Remove Oolong Tea from the list of teas.
const index = teas.indexOf("Oolong Tea");
console.log(teas.indexOf("Oolong Tea"));
if (index > -1) {
  teas.splice(index, 1);
}
console.log(teas);
// filter the list to only include teas that are caffienated. (herbal teas isn't cafienated)
const caffienatedTeas = teas.filter((tea) => tea !== "Herbal Tea");
console.log(caffienatedTeas);

// Sort the list of teas in alphabetical order.
console.log(teas.sort());

// use a loop to pritn each type of tea in the array

for (let i = 0; i < teas.length; i++) {
  console.log(teas[i]);
}

// Use a for loop to count how many teas are caffeinated ("excluding Hearbal Tea")
let caffTeas = [];
let count = 0;
for (let i = 0; i < teas.length; i++) {
  if (teas[i] !== "Herbal Tea") {
    caffTeas.push(teas[i]);
    count++;
  }
}
console.log(caffTeas, count);
// use a for loop to create a new array with all tea names is uppercase.

const upperCase = [];
for (let i = 0; i < teas.length; i++) {
  upperCase.push(teas[i].toUpperCase());
}
console.log(upperCase);

// Use a for loop ot find tea name with the most characters. !important

let longestTea = "";
for (let i = 0; i < teas.length; i++) {
  if (teas[i].length > longestTea.length) {
    longestTea = teas[i];
  }
}

// use a for loop to reverse the order of teas in the array
let newArr = [];
for (let i = teas.length - 1; i >= 0; i--) {
  newArr.push(teas[i]);
}
console.log(newArr);
