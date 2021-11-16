// getBoundingClientRect practice
let myDiv = document.getElementById("example1");
console.log(myDiv.getBoundingClientRect());

// mouseMoveEvent practice
document.onmousemove = function(event){
    // IE supporting Optimization
    event = event || window.event;
    if(event.pageX == null && event.clientX != null){
        event.pageX = event.clientX + document.body.scrollLeft;
        event.pageY = event.clientY + document.body.scrollTop;
    }
    // console.log(event.pageX , event.pageY);
    let CurrentPoint = document.elementFromPoint(event.pageX,event.pageY);
    if(CurrentPoint.tagName != "BODY" && CurrentPoint.tagName != "HTML"){
        event.target.style.backgroundColor = "pink";
    }
}

// mouseLeave practice
function leavesFunc(event){
    event = event || window.event;
    event.target.style.backgroundColor = "";
}

for(let bodyElement of document.body.childNodes){
    if(bodyElement instanceof Element){
        bodyElement.onmouseleave = leavesFunc
    }
}