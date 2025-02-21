class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
  getFullName(){
    return `${this.fname} ${this.lname}`
  }
}

const p1 = new Person("Harsh", "Prajapati");
const p2 = new Person("Akash", "Yadav");

// console.log(p1.getFullName())

// function Animal(name) {
//   class animal {
//     constructor(name) {
//       function makeSound() {
//           return this.name
//     }
//     }
//   }
// }

// console.log(Animal("hello"))

function Robot(name, batteryLevel) {
  this.name = name;
  this.batteryLevel = batteryLevel;
}

// Define charge method on Robot's prototype
if (!Robot.prototype.charge) {
  Robot.prototype.charge = function (batteryLevel) {
    return Math.min(batteryLevel + 20, 100);
  };
}