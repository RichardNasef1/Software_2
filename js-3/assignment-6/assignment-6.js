"use strict";

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

let result;
let list = "";

while (result !== 6) {
  result = rollDice();
  list += `<li>${result}</li>`;
}

document.querySelector("#results").innerHTML = list;