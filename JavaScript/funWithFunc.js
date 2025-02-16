Function.prototype.describe = function () {
  console.log(`Function name is ${this.name}`);
};

function greet(name) {
  return `Hello ${name}`;
}

greet.describe();

function aurBhai() {}
aurBhai.describe();

function add(a, b) { //  a and b called function parameter
  return a + b;
}

add(5,4) // here 5 and 4 are arguement passed to add function
// function declaration
const subtract = function (a, b) {
  return a - b;
};
// function expression
const multiply = (a, b) => a * b;
// arrow function

function applyOperation(a, b, operation) {
  return operation(a, b);
}

const result = applyOperation(5, 4, (x, y) => x / y);
console.log(result)

//uper theory is called as first class function.
console.log("------------------------------------")
function createCounter(){
  let count = 0;
  return function (){
    count++
    return count
  }
}
// know as tiffin concept

const counter = createCounter()
console.log(counter())

// function oneF(){
//   let myName = "Harsh"
// }

// oneF()

(function(){
  console.log("hello world")
})()

// ()()