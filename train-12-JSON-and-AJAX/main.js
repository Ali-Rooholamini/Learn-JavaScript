"use strict";

// Json Practice
let testArray = [1,2,5,10,32,85,95];
let JsonFile = JSON.stringify(testArray);
console.log(JsonFile);
console.log(JSON.parse(JsonFile));


// AJAX Practice and working with API
let xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET" , "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8");
xmlHttp.send();
// xmlHttp.setRequestHeader("content-type" , "JSON");


function XMLprocess(result){
    result.forEach(function(elements) {
        console.log(elements);
    });
    console.log(result);
    console.log(xmlHttp.getAllResponseHeaders());
}

xmlHttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
        console.log("Succeeded");

        let process = JSON.parse(this.response);

        XMLprocess(process);
    }
}

