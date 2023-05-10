// 1- Select the section with an id of container without using querySelector.
const cont = document.getElementById("container");
console.log(cont);

// 2- Select the section with an id of container using querySelector.
const container = document.querySelector("#container");
console.log(container);

// 3- Select all of the list items with a class of “second”.
const second = document.getElementsByClassName("second");
console.log(second);

// 4- Select a list item with a class of third, but only the list item inside of the ol tag.
const third = document.querySelectorAll("ol .third");
console.log(third);

// 5- Give the section with an id of container the text “Hello!”.
// cont.innerText = "Hello!";

// 6- Add the class main to the div with a class of footer.
const footer = document.querySelector(".footer");
footer.classList.add("main");
console.log(footer);

// 7- Remove the class main on the div with a class of footer.
footer.classList.remove("main");
console.log(footer);

// 8- Create a new li element.
const li = document.createElement("li");

// 9-Give the li the text “four”.
li.innerText = "four";

// 10- Append the li to the ul element.
const ul = document.querySelector("#container ul");
console.log(ul);
ul.append(li);

// 11- Loop over all of the lis inside the ol tag and give them a background color of “green”.
const ol = document.querySelectorAll("ol");
console.log(ol);
for (let el of ol) el.style.backgroundColor = "green";

// 12- Remove the div with a class of footer
footer.remove();
