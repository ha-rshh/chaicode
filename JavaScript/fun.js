Object.prototype.chai = function(){
    console.log("Chai aur code")
}

const tea = {
    name: "Ice tea Lemon",
    type: "cool"
}
tea.chai()

const myTeas = ["Lemon Tea", "Orange Tea"] // array is also an object in JS
// console.log(typeof myTeas) // object
myTeas.chai()
