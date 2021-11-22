"use strict";

const appSection = document.querySelector(".app");
const firstPageHeading = document.querySelector(".firstpage h1");
const background = document.querySelector(".firstpage .background");
const middleground = document.querySelector(".firstpage .middleground");
const foreground = document.querySelector(".firstpage .foreground");
const firstPage = document.querySelector(".firstpage");
const secondPage = document.querySelector(".secondpage");
const secondPageHeading = document.querySelectorAll(".secondpage .heading span");
const thirdPage = document.querySelector(".thirdpage");
const imageThirdPage = document.querySelectorAll(".imgs img");
const FIRST_PAGE_MAX_SCROLL = 500;
const FIRST_TRANS_MIN = 450;
const FIRST_TRANS_MAX = 650;
const SECOND_PAGE_TRANS = 1000;
secondPage.style.opacity = 0;
secondPage.hidden = true;

document.addEventListener("scroll" , function(event){

    let yOffset = window.pageYOffset;

    if(yOffset <= FIRST_PAGE_MAX_SCROLL){
        firstPage.style.opacity = 1;
        let scl = yOffset / FIRST_PAGE_MAX_SCROLL;
        firstPageHeading.style.transform = `scale(${1 + (0.1 + scl)})`;
        background.style.transform = `scale(${1 + (0.5 * scl)})`;
        foreground.style.transform = `scale(${1 + scl})`;
        middleground.style.transform = `scale(${1 + (0.8 * scl)})`;
    }
    
    if(yOffset >= FIRST_TRANS_MIN && yOffset < FIRST_TRANS_MAX){

        firstPage.hidden = false;
        secondPage.hidden = false;
        secondPageHeading[0].style.transform = `translate(0,0px)`;
        secondPageHeading[2].style.transform = `translate(0,0px)`;

        let op = yOffset / FIRST_TRANS_MAX;
        secondPage.style.opacity = `${op}`;
        firstPage.style.opacity = `${1 - op}`;

    }else if(yOffset > FIRST_TRANS_MAX && yOffset <= SECOND_PAGE_TRANS){

        firstPage.style.opacity = 0;
        firstPage.hidden = true;
        thirdPage.hidden = true;
        secondPage.style.opacity = 1;
        appSection.style.transform = "translate(0 , 0px)";
        secondPageHeading[0].style.visibility = "visible";
        secondPageHeading[2].style.visibility = "visible";

        let translateY = yOffset - FIRST_TRANS_MAX;
        secondPageHeading[0].style.transform = `translate(0,${-translateY}px)`;
        secondPageHeading[2].style.transform = `translate(0,${translateY}px)`;

    }else if(yOffset > SECOND_PAGE_TRANS){

        secondPageHeading[0].style.visibility = "hidden";
        secondPageHeading[2].style.visibility = "hidden";
        thirdPage.hidden = false;
        
        let scrollDown = yOffset - SECOND_PAGE_TRANS;
        appSection.style.transform = `translate(0 , ${-scrollDown}px)`;

        let scaleimg = yOffset / SECOND_PAGE_TRANS;
        imageThirdPage[1].style.transform = `translate3d(0px , ${-scrollDown * 0.1}px , 0px) scale(${1 + (scaleimg * 0.1)})`;
    }
});
