"use strict";

const sides = Number(prompt("How many sides does the dice have?"));

function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

let result;
let list = "";

while (result !== sides) {
  result = rollDice(sides);
  list += `<li>${result}</li>`;
}

document.querySelector("#results").innerHTML = list;