// get class Attribute
console.log(myDiv.className);

let input = (document.getElementById("myDiv")).childNodes[1];

// get Attribute
console.log(input.type);
console.log(input.value);
console.log(input.getAttribute("type"));

// set Attribute
input.setAttribute("type","text");
input.value = "";
console.log(input.type);

// get Attribute
console.log(input.getAttribute("test"));

// Remove Attribute
input.removeAttribute("test");
console.log(input);

// Check for Existence
console.log(input.hasAttribute("test"));
console.log(input.hasAttribute("type"));

// set Attribute - we cant set input value with second example
input.value = "test";
input.setAttribute("value","test2"); // error

// set input to checkbox
input.setAttribute("type","checkbox");
input.checked = "true";