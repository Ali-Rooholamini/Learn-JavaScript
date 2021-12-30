"use strict";

// Dynamic inheritance

function myFunc(bool){
    if(bool){
        return class animals{
            constructor(){
             this.name = "rabbit";
            }
            run(){
                console.log("--------");
            }
         }
    }else{
        return class FailedAnimals{
            constructor(){
                this.name = "failedRabbit";
            }
            run(){
                console.log("----Failed----");
            }
        }
    }
}

class rabbit extends myFunc(true){
    static staticValue = "test Static Value";
    constructor(){
        super(); // Access to Parent Constructor Data
        this.legs = true;
    }
    run(){  
        super.run(); // Access to parent Method
        console.log(this.name);
    }
}
let rabbitClass = new rabbit();

rabbitClass.run();
console.log(rabbitClass);

console.log(rabbit.staticValue); // Return Value
console.log(rabbitClass.staticValue); //undefined