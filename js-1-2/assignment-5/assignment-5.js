"use strict";

const year = Number(prompt("Enter a year:"));

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  document.querySelector("#result").textContent = `${year} is a leap year.`;
} else {
  document.querySelector("#result").textContent = `${year} is not a leap year.`;
}