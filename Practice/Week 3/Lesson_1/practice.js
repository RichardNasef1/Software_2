// BOM
// Windows
window.document.querySelector ("#greeting").innerText ="Welcome to Kaneli Doner"

//pop up window:
//alert("Welcome");

//const newsConfirm = confirm("Do you want to receive newsletter from us?");
//console.log(newsConfirm)

//if (newsConfirm){
//  document.querySelector("#Bomresult").innerText = "Thanks!, you will receive our newsletter!"}
//else{  document.querySelector("#Bomresult").innerText = "Ok, maybe next time."}

//promt: requires answers from user (string format)

//const customerName = prompt("Enter your name: ");
//console.log(customerName);

//if(customerName){
//  document.querySelector("#greeting").innerText = "Welcome" + customerName + "!";
//}

// location - tells the address info fo the document / redirect to another page
//console.log(location.href)
//location.href = "https://opiskelija.oma.metropolia.fi/"

// DOM - 
// Getting/selecting the elements 
const news = document.getElementById("news");
const newsPara = news.getElementsByTagName ("p")
document.querySelector("#newsNum").innerText = newsPara.length;
console.log(newsPara.length);

//combine both higher elements in the structure and the lower
const newsPara2 = document.getElementById("news").getElementsByTagName("p");
console.log(newsPara2.length)

//single command to select (CSS selector)
const newsPara3 = document.querySelectorAll("#news p");
console.log(newsPara3.length)


//select and create elements(s)
document.querySelector("#logo"); // retrieves a single element from a document using the css selector. In this case with a certain id
document.querySelectorAll(".button"); // retrieves elements from a document using the css class selector.
document.getElementById("logo"); // retrieves an element with a specific id from the document
document.createElement("p"); // creates a new p-element, but it is not yet added to the document

const logo = document.querySelector("#logo");
console.log(logo);
const logoID = document.getElementById("logo");
console.log(logo === logoID);

//create a new element then add it to doc as a child of another element
const textNew = document.createElement("p");
textNew.innerText = "This is an element created by using createElement"
document.querySelector("#greeting").appendChild(textNew)
console.log(document.querySelector("greeting").children)

//remove the new element 
greeting.removeChild(textNew);
console.log(document.querySelector("#greeting").children)

//select elements that match with the CSS selector (class)
const buttons = document.querySelectorAll(".button")
console.log(buttons.length)

//Go through a list and make the texts bold
const bullets = document.querySelectorAll("li");
for (let bullet of bullets) {
  bullet.innerHTML = `<b>${bullet.innerHTML}</b>`;
}


//Go through a list using forEach()



//select by tag and class at the same time:
const bulletins = document.querySelectorAll("p.specialbulletin");
for(let buttetin of bulletins) {
  bulletins.innerText ="Fresh juice for free";
}