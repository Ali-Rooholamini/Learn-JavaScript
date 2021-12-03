"use strict";

// try Catch Error
try{
    console.log(document.getElementsByClassName(asd));
}catch(e){
    console.log("error caught and fixed test");
    console.dir(e);
}

// Make an Error and throw it
let rndnums = [];
function randomNumbers(){
    if(rndnums.length == 10){
        let error = new Error("Maximum Array Lenght is Filled");
        throw error;
    }
    let rnd = parseInt(Math.random() * 10);
    if(rndnums.includes(rnd)){
        return randomNumbers();
    }
    rndnums.push(rnd);
    return rnd;
}

console.log(randomNumbers());
console.log(randomNumbers());
console.log(randomNumbers());
console.log(randomNumbers());
console.log(randomNumbers());
console.log(randomNumbers());
console.log(randomNumbers());
console.log(randomNumbers());
console.log(randomNumbers());
console.log(randomNumbers());
console.log(randomNumbers());
console.log(randomNumbers());
console.log(randomNumbers());
console.log(randomNumbers());
console.log(randomNumbers());
console.log(randomNumbers());