"use strict";


const amount = Number(prompt("How many participants?"));

const names = [];


for (let i = 0; i < amount; i++) {
  let name = prompt("Enter participant name:");
  names.push(name);
}

names.sort();

let list = "";

for (let i = 0; i < names.length; i++) {
  list += `<li>${names[i]}</li>`;
}

document.querySelector("#participants").innerHTML = list;