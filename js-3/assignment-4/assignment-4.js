"use strict";

const numbers = [];

let number = Number(prompt("Enter a number (0 to stop):"));

while (number !== 0) {
  numbers.push(number);
  number = Number(prompt("Enter a number (0 to stop):"));
}

numbers.sort((a, b) => b - a);

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}