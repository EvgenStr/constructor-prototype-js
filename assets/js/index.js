'use strict';

function Accumulator(startingValue = 0) {
  if (!new.target) {
    new Accumulator(startingValue);
  }
  this.value = isNaN(startingValue) ? 0 : +startingValue;
  // this.prototype = new ReadProto();
  // this.__proto__ = new ReadProto();
}

function ReadProto() {
  this.read = function () {
    if (!new.target) {
      new ReadProto();
    }

    const newValue = +prompt("Enter number:");
    if (isNaN(newValue)) {
      return;
    }
    return this.value += newValue;
  }

}

Accumulator.prototype = new ReadProto();

const acc1 = new Accumulator('10');
const acc2 = new Accumulator(15);

console.log(acc1, acc2);


// Accumulator.prototype.setValue = function () {
//   return this.value += this.read();
// }

// Accumulator.prototype.read = function(){
//   const newValue = +prompt("Enter number:");
//     if (isNaN(newValue - newValue)) {
//       return;
//     }
//     return this.value += newValue;
// };

// Array.prototype.push = function (item) {
//   this[10] = item;
// }

// let arr2 = new Array()
// arr2.push(2)