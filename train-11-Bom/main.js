"use strict";


console.log(window);

// window inner(Width/Heitgh)
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(document.body.clientWidth);

// window open and close method
function closeTab(){
    window.close();
}
function openTab(){
    window.open("https://twitter.com/home");
}

// use window screen detail
console.log(window.screen)
console.log(window.screen.width); // full user screen Width
console.log(window.screen.height); // full user screen height
console.log(window.screen.availWidth); // all available user screen Width
console.log(window.screen.availHeight); // all available user screen Width
console.log(window.screen.availHeight); // all available user screen height
console.log(window.screen.colorDepth);
console.log(window.screen.pixelDepth);

// working with window Location Object
console.log(window.location);
console.log(window.location.href);
console.log(window.location.hostname);
console.log(window.location.pathname);
console.log(window.location.protocol);
window.location.hash = "#testHash"
console.log(window.location.hash);
// window.location.assign("http://www.gtree.ir/");
