"use strict";

const firstPageHeading = document.querySelector(".firstpage h1");
const background = document.querySelector(".firstpage .background");
const middleground = document.querySelector(".firstpage .middleground");
const foreground = document.querySelector(".firstpage .foreground");
const firstPage = document.querySelector(".firstpage");
const secondPage = document.querySelector(".secondpage");
secondPage.style.opacity = 0;
secondPage.hidden = true;
const FIRST_PAGE_MAX_SCROLL = 500;
const FIRST_TRANS_MIN = 450;
const FIRST_TRANS_MAX = 600;

document.addEventListener("scroll" , function(event){

    let yOffset = window.pageYOffset;

    if(yOffset <= FIRST_PAGE_MAX_SCROLL){
        firstPage.style.opacity = 1;
        let scl = yOffset / FIRST_PAGE_MAX_SCROLL;
        console.log(scl);
        firstPageHeading.style.transform = `scale(${1 + (0.1 + scl)})`;
        background.style.transform = `scale(${1 + (0.5 * scl)})`;
        foreground.style.transform = `scale(${1 + scl})`;
        middleground.style.transform = `scale(${1 + (0.8 * scl)})`;
    }
    
    if(yOffset >= FIRST_TRANS_MIN && yOffset < FIRST_TRANS_MAX){
        secondPage.hidden = false;
        let op = yOffset / FIRST_TRANS_MAX;
        console.log(op);
        secondPage.style.opacity = `${op}`;
        // firstPage.style.opacity = `-${op}`;
    }

});
