"use strict";

// ------------ Accessors Practice ------------

// let person = {
//     name : "ali",
//     set lname(family){
//         this.lastName = family;
//     },
//     get lname(){
//         return family;
//     }
// }
// person.lname = prompt("enter last name");
// console.log(person);


// ------------ constructor Objects ------------

function constObject(){
    let test = "slm";
    this.name = "ali";
    this.lastName = "rooholamini";
    Object.defineProperties(this , {
        age : {
            set : function(num){
                this.ageNumber = num;
            }
        },
        getAge : {
            get : function(){
                return this.ageNumber;
            }
        }
    });
}
let object = new constObject();
object.age  = prompt("enter number");
console.log(object);
console.log(object.ageNumber);


// ------------ Clone Onjects ------------

// wrong way to clone the objects

// let wrongClone = object;
// wrongClone.name = "asdasd";
// console.log(wrongClone.name);
// console.log(object.name);

// clone object (better dont use this way)

// let cloneTest = {};
// for(let keys in object){
//     cloneTest[keys] = object[keys];
// }
// cloneTest.name = "asdasd";
// console.log(cloneTest.name);
// console.log(object.name);

// clone object 

let cloneTest = {};
Object.assign(cloneTest , object); // best practice
cloneTest.name = "asdasd";
console.log(cloneTest.name);
console.log(object.name);


// ------------ optional chaining ?. ------------

alert(object?.name); // checking if name exist then alert it => return ali
alert(object?.age); // checking if age exist then alert it => return undefined (dont exist)(no error)