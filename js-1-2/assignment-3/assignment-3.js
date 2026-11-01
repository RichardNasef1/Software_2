const firstNumber = Number(prompt("Enter the first integer:"));
const secondNumber = Number(prompt("Enter the second integer:"));
const thirdNumber = Number(prompt("Enter the third integer:"));

const sum = firstNumber + secondNumber + thirdNumber;
const product = firstNumber * secondNumber * thirdNumber;
const average = sum / 3;

document.querySelector("#results").textContent =
  `Sum: ${sum}, Product: ${product}, Average: ${average}`;