"use strict";

// arrow functions
let arrowFunc = () => {
    alert("hello world");
}
// arrowFunc();

// Rest Parameters
function rest(arg1,...args){
    console.log(arg1);
    console.log(args);
}
rest(1,2,3,4,5,6,7,8);

// func keyword in named Function
let testFlag = 0; 
let test = function func(){
    testFlag++;
    testFlag == 2 ? console.log("finished") : test();
}
test();

// catchingDecorator Function
//