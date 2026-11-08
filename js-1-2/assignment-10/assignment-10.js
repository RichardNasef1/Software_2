"use strict";

const numDice = Number(prompt("How many dice do you want to roll?"));
const target = Number(prompt("What sum are you looking for?"));

let tries = 0;
let matches = 0;

for (let i = 0; i < 10000; i++) {

  let sum = 0;

  for (let j = 0; j < numDice; j++) {
    let dieRoll = Math.floor(Math.random() * 6) + 1;
    sum += dieRoll;
  }

  if (sum === target) {
    matches++;
  }

  tries++;
}
let chance = (matches / tries) * 100;
document.querySelector("#result").textContent =
  `Probability to get sum ${target} with ${numDice} dice is ${chance.toFixed(2)}%`;