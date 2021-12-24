"use strict";

function createPerson(name , weight , height , age){
    {
        name = name.split("");
        name[0] = name[0].toUpperCase();
        name = name.join("");
    }
    let personObject = {};
    personObject.name = name;
    personObject.age = age;
    personObject.weight = weight;
    personObject.height = height;
    personObject.sayName = function(){
        return personObject.name = "my name is : " + personObject.name;
    }
    personObject.BMI = function(){
        return personObject.weight / (personObject.height/100)**2;
    }
    return personObject;
}

let ali = createPerson("ali" , 60 , 170 , 20);
console.log(ali);
console.log(ali.sayName());
console.log(ali.BMI());

// object constructor

function Person(name , weight , height , age){
    {
        name = name.split("");
        name[0] = name[0].toUpperCase();
        name = name.join("");
    }
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.age = age;
    this.sayName = function(){
        return "my name is : " + this.name;
    }
    this.BMI = function(){
        return this.weight / (this.height/100)**2;
    }
}

let mohammad = new Person("mohammad" , 60 , 170 , 20);
console.log(mohammad);
console.log(mohammad.sayName());
console.log(mohammad.BMI());