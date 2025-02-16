// ARRAYS

let fruits = ["apple", "mango", "cherry"];
let intFruits = ["Kiwi", "Avacado", "Dragon Fruit"];

// console.log(fruits);
// console.log(intFruits);

// console.log(typeof fruits);
// console.log(typeof intFruits);

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

for (let h = 0; h < teas.length + 99; h++) {
  console.log(`Teas at index ${h}: ${teas[h]}`);
}


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