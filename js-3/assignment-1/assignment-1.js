"use strict";

const numbers = [];

for (let i = 0; i < 5; i++) {
  let number = Number(prompt("Enter a number:"));
  numbers.push(number);
}

for (let i = 4; i >= 0; i--) {
  console.log(numbers[i]);
}