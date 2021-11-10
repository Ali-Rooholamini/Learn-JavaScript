// Dom Searching

// getElement practice
console.log(document.getElementById("test"));
console.dir(document.getElementById("test")); 
console.log(document.getElementsByTagName("div"));
console.log(document.getElementsByClassName("col2"));
console.log(document.getElementsByClassName("tableClass"));

// querrySelector practice
console.log(document.querySelector("button"));
console.log(document.querySelector(".tableClass"));
console.log(document.querySelector(".col2 .col2 ul li"));
console.log(document.querySelectorAll(".col2"));
console.log(document.querySelectorAll("table.tableClass"));
console.log(document.querySelectorAll(".col2 .col2 ul li"));
console.log(document.querySelectorAll("table.tableClass tbody"));

// diffrence between console.dir/log
console.log(document.getElementById("test"));
console.dir(document.getElementById("test"));

// elem.closest
let liList = document.querySelector(".col2 .col2 ul li");
console.log(liList.closest(".col2"));
console.dir(liList.closest(".col2"));