"use strict";
let myDiv = document.getElementById("myDiv");

// classList practice
console.log(myDiv.classList);
console.log(myDiv.className);
myDiv.classList.add("test2","myClass");
console.log(myDiv.classList);
myDiv.classList.remove("joon","test2");
console.log(myDiv.classList);
console.log(myDiv.classList.contains("joon"));
console.log(myDiv.classList.contains("test"));

// working with classList Toggle 
function toggleShow(){
    myDiv.classList.toggle("hidden");
}

// inline style in DOM practice
console.log(myDiv.style);
let btn = document.querySelector("button.btn");
btn.style.backgroundColor = "yellow";
console.log(btn.style.backgroundColor);

// any location styles in Dom practice
console.log(window.getComputedStyle(myDiv));
console.log(window.getComputedStyle(myDiv).width);
console.log(window.getComputedStyle(myDiv).backgroundColor);
console.log(window.getComputedStyle(myDiv).textAlign); //this is a read-Only method so we cant change the Value.

// change division color with DOM
function changeColor(){
    myDiv.style.backgroundColor = prompt("رنگ موردنظر خودتان را وارد کنید");
}