const dogs = [];

for (let i = 0; i < 6; i++) {
  let name = prompt("Enter a dog name:");
  dogs.push(name);
}

dogs.sort().reverse();

let list = "";

for (let i = 0; i < dogs.length; i++) {
  list += `<li>${dogs[i]}</li>`;
}
document.querySelector("#dogs").innerHTML = list;