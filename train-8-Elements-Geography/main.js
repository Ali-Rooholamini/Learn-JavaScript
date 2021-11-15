"use strict";

// assign firstDiv offsetTop to circle
let firstDiv = document.getElementById("example1");
let circle = document.getElementById("circle");
circle.style.top = firstDiv.offsetTop + "px";

// Elements Geography
console.log(firstDiv.offsetLeft);
console.log(firstDiv.clientLeft);
console.log(firstDiv.clientTop);
console.log(firstDiv.clientWidth);
console.log(firstDiv.clientHeight);
console.log(firstDiv.offsetWidth);
console.log(firstDiv.offsetHeight);
console.log(firstDiv.scrollHeight);
console.log(firstDiv.scrollTop); 

// working on scroll
function goToStart(){
    window.scrollTo(0,0);
}

function slowDown(){
    window.scrollBy(0,20);
}

function goToBox(){
    let boxNumber = prompt("عدد باکس را وارد کنید : ");
    window["example"+boxNumber].scrollIntoView(false);
}