function printHello() {
  console.log("Hello World!");
}

function printGreet(name) {
  //   console.log("Hello! What's Up?", name);
  console.log(`Hello! ${name} What's Up?`);
}

function addNum(num1, num2) {
  return num1 + num2;
}

printHello();
printGreet("Harsh");
addNum(6, 8);
console.log(addNum(2, 4));

// String - "". '', ``
let name = "Harsh";

// Number - 20(int), 20.3(float)
let age = 24;

// Boolean - True, False
let isPaid = true;
// let isPaid = false;

// Null
let favouriteClass = null;

// undefined - jo exist kare but uski value na ho koi; suppose you and your ex.
let homeTown;

// array
let skills = [true, false, "html", "css", "js", 45];

// {} - braces also used to contain object basically a pair of key and its value;
let studentProfile = {
  name: "aditya",
  age: 19,
  isPaid: true,
  skills: ["html", "css", "js"],
  favouriteClass: null,
};

// typeof - used to check the type of input if it's an object or string or number

console.log(typeof homeTown);

let numberofGuest = 0;

let pizzaSize;
// small <= 2
// medium <= 5
// large

// if (numberofGuest <= 2) {
//   console.log("You need small size pizza.");
// } else if (numberofGuest <= 5) {
//   console.log("You need medium size pizza.");
// } else if (numberofGuest <= 7) {
//   console.log("You need large size pizza.");
// } else {
//   console.log("You need multiple size pizza.");
// }



// also known as greedy algorithm
if (numberofGuest <= 2) {
  pizzaSize = "You need small size pizza.";
} else if (numberofGuest <= 5) {
  pizzaSize = "You need medium size pizza.";
} else if (numberofGuest <= 7) {
  pizzaSize = "You need large size pizza.";
} else {
  pizzaSize = "You need multiple size pizza.";
}

console.log(pizzaSize);
