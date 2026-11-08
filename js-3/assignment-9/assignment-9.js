"use strict";

const numbers = [2, 7, 4, 9, 12, 15, 18];

function even(numbers) {
  const evenNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }

  return evenNumbers;
}

const result = even(numbers);

console.log("Original array:", numbers);
console.log("Even numbers:", result);