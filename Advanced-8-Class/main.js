"use strict";

// class practice //
class animal{

    // Class Fields
    legs = true;

    constructor(){
        this.running = this.running.bind(this);
        this.name = "Cat";
    }

    // running = () => {
    //     console.log(this.name + " = ---Runing--- ");
    // }

    running(){
        console.log(this.name + " = ---Runing--- ");
    }

}
let animalClass = new animal();

console.log(animalClass);
animalClass.running();
setTimeout(animalClass.running , 1000);
// setTimeout(() => animalClass.running() , 1000);
// setTimeout(animalClass.running.bind(animalClass) , 1000);

// ---- Arrow Function and Bind fix Call-Back Function problem ---- //


// inheritance //

class Rabbit extends animal{
    walk(){
        console.log(this.name + " and rabbit ---Walking--- ");
    }
}
let rabbitClass = new Rabbit();

console.log(rabbitClass);
rabbitClass.walk();
console.log(rabbitClass.name);

// --- javaScript have Override ---  //