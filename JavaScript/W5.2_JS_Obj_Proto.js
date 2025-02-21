// write a polyfill function for forEach

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 88];

if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (userFn) {
    for (let i = 0; i < this.length; i++) {
      userFn(this[i], i);
    }
  };
}

// arr.myForEach((e) => {
//   e = e * 5;
//   console.log(e);
// });
// creating my own map function

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (userFn, i) {
    let newArr = [];
    let indexPrint = [];
    for (let i = 0; i < this.length; i++) {
      let value = userFn(this[i], i);
      newArr.push(value);
      indexPrint.push(i);
    }
    return { newArr, indexPrint };
  };
}
let myArry = arr.myMap((e) => e * 2);
const meraArray = arr.map((x) => x * 2);
// console.log(myArry);

// creating my own filter function
if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (userFn) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
      let value = userFn(this[i]);
      if (userFn(this[i])) {
        newArr.push(this[i]);
      }
    }
    return newArr;
  };
}

let filteraized = arr.myFilter((i) => i % 2 == 0);
console.log(filteraized);
