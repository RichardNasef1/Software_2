"use strict";

const diceRolls = Number(prompt("How many times do you want to roll the dice?"));

let sum = 0;

for (let i = 0; i < diceRolls; i++) {
  const diceResult = Math.floor(Math.random() * 6) + 1;
  sum += diceResult;
}

console.log(`The sum of the dice rolls is ${sum}`);