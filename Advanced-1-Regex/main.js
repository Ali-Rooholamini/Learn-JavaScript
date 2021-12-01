"use strict";

let text = "Hello World ! khoooobi khoobam /n khooobe";
// let pattern = RegExp(".ell.","gm");
// let pattern = RegExp("khoo*","gm");
// let pattern = RegExp("kh.*","gm");
// let pattern = RegExp("[^hello]","gmi");
let pattern = RegExp("hello?","gmi");

console.log(pattern.exec(text));
console.log(pattern.exec(text));
console.log(pattern.exec(text));
console.log(pattern.exec(text));