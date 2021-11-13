// add ul and li to firstDiv - createElement practice
let myDiv = document.getElementById('firstDiv');

let newUl = document.createElement('ul');
newUl.className = "TestClass";
newUl.innerHTML = "<li id='firstList'>اولین آیتم لیست</li>";
myDiv.prepend(newUl);

// -------------------- List Building machine -------------------- //
let firstUl = document.getElementsByClassName("TestClass")[0];

// add li with createElement and location object
// function creation(location){
//     let newElem = document.createElement("li");
//     newElem.innerHTML = "<strong>آیتم جدید</strong>";
//     firstUl[location](newElem);
// }

// create li with createDocumentFragment,createElement and location object
// documentFragment is better for oprimization Dom Performance
function creation(location){
    let newFrag = document.createDocumentFragment();
    let newElem = document.createElement("li");
    newElem.innerHTML = "<strong>آیتم جدید</strong>";
    newFrag.append(newElem);
    firstUl[location](newFrag);
}

function giveLocation(){
    let where = prompt("به کجای لیست آیتم جدید اضافه شود ؟!؟");
    if(where in firstUl){
        return creation(where);
    }
    alert("نام وارد شده اشتباه است");
}

// TextNode , node.remove and cloneNode practice
let lastDiv = document.createElement("div");
document.querySelector("button").after(lastDiv);
// textNode
lastDiv.append(document.createTextNode("helo World!"));
// cloneNode
let lastDivClone = lastDiv.cloneNode(true);
// node.remove
lastDiv.remove();
console.log(lastDivClone);