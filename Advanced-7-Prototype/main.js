"use strict";

// prove everything based on Objects
let text = "hello";
function proveTest(){
    alert(1);
}
let testObj = {};

console.dir(text.__proto__);
console.dir(proveTest.__proto__);
console.dir(testObj.__proto__);

// inheritance
let animal = {
    eats : true,
    walk : function(){
        console.log("walking -----");
    }
}

let rabbits = {
    legs : true,
    get getLegs(){
        console.log(!this.legs);
    }
}

rabbits.__proto__ = animal;
rabbits.__proto__.brain = true;
console.dir(rabbits);
rabbits.walk();

function cat(){
    this.walk = function (){
        console.log("cat walking ----");
    },
    this.legs = "4"
}
let testFunc = new cat();

function testPro(){
    alert(222);
}

testFunc.__proto__ = rabbits; //added animals object too
testFunc.prototype = animal;
testFunc.prototype.func = testPro;
testFunc.prototype.name = "asd";
testFunc.walk();
console.log(testFunc);
console.dir(testFunc);
rabbits.getLegs;

// encapsulation  {Private and Public}
function consFunc(){
    this.public = "hello world";
    var status = true;
    this.printSomething = () => {
        return this.public + " and status is : " + !status ;
    }
}
let capsTrain = new consFunc();

console.log(capsTrain.printSomething())
