"use strict";

const numbers = [];

while (true) {
  let number = Number(prompt("Enter a number:"));

  if (numbers.includes(number)) {
    alert("This number has already been given!");
    break;
  }

  numbers.push(number);
}

numbers.sort((a, b) => a - b);

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}