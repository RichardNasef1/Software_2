"use strict";

const startYear = Number(prompt("Enter the starting year:"));
const endYear = Number(prompt("Enter the ending year:"));

let result = "<ul>";

for (let year = startYear; year <= endYear; year++) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    result += `<li>${year}</li>`;
  }
}

result += "</ul>";

document.querySelector("#results").innerHTML = result;