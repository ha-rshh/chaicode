const person = {
  fname: "Harsh",
  lname: "Prajapati",
  hobbies: ["coding", "photography", "sleeping"], // example of array inside an object
  address: {
    houseNo: 1,
    street: "N palermo st1",
    landmark: "Landmark hotel",
    city: "mici",
    state: "NY",
  }, // example of nested object
};

console.log(person);
// further explaination is about object in deep
// with the information of stack and heap memory
// refer to video

let p1 = {
  fname: "Harsh",
};

let p2 = p1;

p2.fname = "Piyush";

console.log(p2);
console.log(p1);

//output will be :
// { fname: 'Piyush' }
// { fname: 'Piyush' }

//*  Machine Coding round on object
// problem : create an objecy representing a type of tea with properties for name, type, and caffeine content.

const teas = {
  name: "Lemon Tea",
  type: "Green",
  caffine: "Low",
};
// Access and print the name and type of properteis of the tea object

console.log(teas.name);
console.log(teas["type"]);
// two ways to access object value.
//* dot operator helps to access the property of array and object.
// Add a new property origin to the tea Object
teas.origin = "Assam";
console.log(teas);

// Change the caffeine level of the tea objecy to "Medium"
teas.caffine = "Medium";

// Remove the type property from the tea object. !important
delete teas.type;
console.log(teas);
// OUTPUT: { name: 'Lemon Tea', caffine: 'Medium', origin: 'Assam' }

//Check if the tea object has a property origin.
console.log("origin" in teas);
// true

// use a for in loop to print all properties of the tea object.
for (let key in teas) {
  console.log(`${key} : ${teas[key]}`);
}
// name : Lemon Tea
// caffine : Medium
// origin : Assam

//  create a nested objecy representing different types of teas and their properties.

const myTeas = {
  greanTea: {
    name: "Green Tea",
    // type: {
    //     one: "Assami",
    //     two: "China",
    //     third: "Australia"
    // }
  },
  blackTea: {
    name: "Black Tea",
  },
};

// Create a copy of the tea object.
console.log("---------------------------------------");
console.log(myTeas);
const teaCopy = { ...myTeas }; // ... spread operator -> Performs a shallow copy, it copies the references to them, not the actual values.
console.log(teaCopy);
const newCopy = myTeas; // copies the reference/
console.log(newCopy);

// Add a custom method describe to the tea objecy that returns a description string.

// Merge two objects representing different teas into one.