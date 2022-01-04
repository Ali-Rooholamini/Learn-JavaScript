"use strict";

// Promise Practice
let promise = new Promise((resolve , reject) => {
    // throw new error("test error");
    console.log("hahahaha");
    resolve();
});
promise.finally(() => {console.log("this is finally")});
promise.then(result => {console.log("finished promise")} , error => {console.log("error while running promise")});
console.log("end of code");

// Promise All Practice
let testNum = 1;
let testNum2 = 2;
let p = Promise.all([
    new Promise((resolve,reject) => {resolve(testNum);}),
    new Promise((resolve,reject) => {resolve(testNum2);})
]);
p.then(value => console.log("value is => " + value));

// Async and await Keyword Practice
async function AFunc(){
    console.log("we are in Async Function");
};

AFunc().then(result => {
    console.log("finshed Asyn function then");
});

console.log("end of this practice");