"use strict";
let x = 0;
let circle = document.getElementById("spn");
circle.style.left = `0`;
circle.style.top = `10px`;


// function circleAnimation(){
//     let test = setInterval(function(){
//         x++;
//         console.log(x);
//         circle.style.left = `${x}px`;
//         if(x == 450){
//             clearInterval(test);
//         }
//     }, 10)
// }

function circleAnimation(){
    let test1 = requestAnimationFrame(moveCircle);

    function moveCircle(time){
        x++;
        circle.style.left = `${x}px`;
        if(x == 450){
            return;
        }
        requestAnimationFrame(moveCircle);
    }
}

