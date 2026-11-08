"use strict";

const names = ["Johnny", "DeeDee", "Joey", "Marky"];

function concat(names) {
  let result = "";

  for (let i = 0; i < names.length; i++) {
    result += names[i];
  }

  return result;
}

document.querySelector("#result").textContent = concat(names);