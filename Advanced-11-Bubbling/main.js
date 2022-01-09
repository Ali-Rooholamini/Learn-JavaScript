"use strict";

// bubbling Practice

firstDiv.onclick = function(event){
    let saveColor = event.target.style.backgroundColor;
    event.target.style.backgroundColor = "yellow";
    setTimeout(() => {
        alert(`Target TagName = ${event.target.tagName} and event tagName = ${this.tagName}`);
        event.target.style.backgroundColor = saveColor;
    } , 0);
}

// function firstClick(event){
//     let saveColor = event.target.style.backgroundColor;
//     event.target.style.backgroundColor = "yellow";
//     setTimeout(() => {
//         alert(`Target TagName = ${event.target.tagName} and event tagName = ${event.currentTarget}`); //currentTarget dosent Work !!
//         event.target.style.backgroundColor = saveColor;
//     } , 0);
// }

// Event Deligation Practice
class eventD {

    constructor(elem){
        this._elem = elem;
        elem.onclick = this.onClick.bind(this);
    }

    save(){
        alert("this is save button");
    }
    reset(){
        alert("this is reset button");
    }
    load(){
        alert("this is load button");
    }


    onClick(event){
        event.preventDefault();
        console.log(event.target.dataset.action);
        if(event.target.dataset.action){
            this[event.target.dataset.action]();
        }else{
            alert("this is form body = undeifined");
        }
    }
}
new eventD(firstForm);

// capturing Practice
for(let elem of document.querySelectorAll("*")){
    addEventListener("click" , () => {console.log(elem.tagName)} , true);
}