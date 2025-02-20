const teas = {
  name: "Lemon Tea",
  tea: "Green",
  Caffeine: "Low",
};
console.log(teas.name, teas.type);
console.log(teas["name"], teas.type);
// adding a new property in object
teas.origin = "China";
// changing the value of a property
teas.Caffeine = "Medium";
//  removing the property of an obj
delete teas.type;
//  checking if the property exist
console.log("origin" in teas);
// printing properties of a obj
for (let key in teas) {
  console.log(key, teas[key]);
}
// creating nested object in a obj
const myTeas = {
  greantea: {
    name: "Green Tea",
  },
  blackTea: {
    name: "Black Tea",
  },
};

const newTeas = { ...teas };
// console.log(typeof newTeas)
const teaPilo = teas;

console.log(teaPilo);
console.log(newTeas);

// console.log(teas)

Object.prototype.meriChai = function () {
  console.log("Aaj Chai Mast rahi");
};
myTeas.meriChai();
console.log(myTeas);

const arr = [1, 3, 5, 6, 7, 8];
// we have product a product that is coded in simple js and we are getting the error .map function does not exist on arr variable.

// let firstName = "Harsh"
// let newName = firstName
// console.log(firstName)
// newName = "Piyush"
// console.log(firstName)

let remote = {
  color: "white",
};
let charger = remote;

charger.color = "black";

console.log(remote.
console.log(remote.color)