document.getElementById('parent').style.border = "1px solid black";
document.getElementById('parent').style.height = "200px";
document.getElementById('parent').style.backgroundColor = "teal";

// adding new element in dom
let element = document.createElement("button");
element.textContent = "Click me";
element.style.backgroundColor = "red";
element.style.padding = "10px";

document.getElementById("parent").append(element);

var variable = 10;
console.log(variable);

variable = 15;
console.log(variable);

function myfunc() {
    console.log("Hello, World!");
}

const myfunc1 = ()=> {
    console.log("Hello, World!");
}