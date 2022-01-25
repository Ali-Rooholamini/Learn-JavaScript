"use strict";

// working with API - Get method - fetch built-in JS
document.getElementById("get").addEventListener("click" , () => {
    let url = "https://jsonplaceholder.typicode.com/users/1";
    fetch(url , {method : "GET"})
        .then(res => res.json())
        .then(res => console.log(res));
});

// working with API - Post method - fetch built-in JS
// document.getElementById("post").addEventListener("click" , () => {
//     let userData = {
//         id : 1,
//         name : "ali",
//         username : "aliringo",
//         email : "alirrr0078@gmail.com"
//     };

//     fetch("https://jsonplaceholder.typicode.com/users/" , {
//         method: "POST",
//         body: JSON.stringify(userData),
//         headers: {"Content-type": "application/json"}
//     }).then(Response => Response.json())
//       .then(json => console.log(json))
//       .catch(error => console.log(error));
// });

// working with API - Put method - fetch built-in JS
document.getElementById("put").addEventListener("click" , () => {
    let userData = {
        name : "asghar",
        username : "bullyMan"
    }

    fetch("https://jsonplaceholder.typicode.com/users/1" , {
        method: "PUT",
        body: JSON.stringify(userData),
        headers: {"Content-type": "application/json"}
    }).then(res => res.json())
      .then(json => console.log(json))
      .catch(error => console.log(error));

});

// working with API - Delete method - fetch built-in JS
document.getElementById("delete").addEventListener("click" , () => {
    fetch("https://jsonplaceholder.typicode.com/users/1" , {method:"DELETE"})
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(error => console.log(error));
});

// ------------------ working with API - Axios Library -----------------------

// axios Get method
// document.getElementById("get").addEventListener("click" , getData);
// function getData(){
//     axios
//         .get("https://jsonplaceholder.typicode.com/users/1")
//         .then(res => console.log(res.data))
//         .catch(err => console.log(err));
// }

// axios Post method
document.getElementById("post").addEventListener("click" , postData);
function postData(){
    let userData = {
        id : 1,
        name : "newAli",
        username: "rooholamini",
        email: "roohi@gmail.com"
    }

    axios
        .post("https://jsonplaceholder.typicode.com/users/" , userData)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
}