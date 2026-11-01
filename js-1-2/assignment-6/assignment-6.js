"use strict";

const answer = confirm("Should I calculate the square root?");

if (answer === true) {
  const number = Number(prompt("Enter a number:"));

  if (number < 0) {
    document.querySelector("#result").textContent =
      "The square root of a negative number is not defined";
  } else {
    const squareRoot = Math.sqrt(number);

    document.querySelector("#result").textContent =
      `The square root of ${number} is ${squareRoot}`;
  }
} else {
  document.querySelector("#result").textContent =
    "The square root is not calculated.";
}