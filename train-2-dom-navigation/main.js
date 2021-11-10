// Dom Navigation

const body = document.body;

// test body and access to its childNodes and change body color too
console.log(body.childNodes[3]);
console.log(body.bgColor = "white");

// set for on a Html Element childNodes
for(let i = 0; i < (body.childNodes[3]).childNodes.length ; i++){
    console.log((body.childNodes[3]).childNodes[i]);
}

// access to Element with parentNode - nextSibling - previousSibling
console.log(body.childNodes[1].parentNode);
console.log((body.childNodes[1]).childNodes[0].nextSibling);
console.log((body.childNodes[1]).childNodes[2].previousSibling);

// working with Element Id and also we can access to Element with Window
console.log(table1.tBodies);
console.log(table1)
console.log(table1.id);
console.log(window['table1']);
console.log(window['table-test2']);