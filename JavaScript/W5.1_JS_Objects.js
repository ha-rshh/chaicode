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
    fname : "Harsh"
}

let p2 = p1

p2.fname = "Piyush"

console.log(p2)
console.log(p1)

//output will be : 
// { fname: 'Piyush' }
// { fname: 'Piyush' }