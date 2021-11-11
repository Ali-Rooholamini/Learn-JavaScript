"use strict";

let MyDiv = document.querySelector("div");

// nodeName and TagName practice
console.log(MyDiv.nodeName);
console.log(MyDiv.tagName);

// elem.innerHTML practice
console.log(MyDiv.innerHTML);
MyDiv.innerHTML = "<p> Hello World ! </p>";
console.log(MyDiv);
console.log(MyDiv.innerHTML);

// The second use more resources
MyDiv.innerHTML = MyDiv.innerHTML + "<hr>";
MyDiv.innerHTML += "<hr>";

// elem.outerHTML practice
// MyDiv.outerHTML = "<a href='#'>this is a link</a>";
console.log(MyDiv.outerHTML);

// ele.textContent practice
MyDiv.textContent = "this is a text";
console.log(MyDiv);
console.log(MyDiv.textContent);
MyDiv.textContent = "<p> in this property tags are also text </p>";
console.log(MyDiv);

// elem.hidden wroking like style:{display:none;} practice
MyDiv.hidden = true;
console.log(MyDiv);
MyDiv.hidden = false;