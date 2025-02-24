// Section 1: Data Types & Length
let x = "5";
let y = 5;
console.log(x == y);
console.log(x === y);

const words = ["JavaScript", "Programming", "Function", "Hoisting"];
// Function to get the longest word length

// Section 2: let, const, var & Scope
function testScope() {
    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;
    }
    console.log(a);
    console.log(b);
    console.log(c);
}
testScope();

var name = "John";
function greet() {
    if (true) {
        var message = "Hello " + name;
    }
    console.log(message);
}
greet();

// Section 3: Traditional Function vs. Arrow Function
function multiply(a, b) {
    return a * b;
}

const obj = {
    name: "Alice",
    sayHello: function() {
        setTimeout(() => {
            console.log("Hello, " + this.name);
        }, 1000);
    }
};
obj.sayHello();

// Section 4: Hoisting
console.log(a);
var a = 10;
console.log(b);
let b = 20;

console.log(square(5));
function square(n) {
    return n * n;
}
console.log(double(4));

var double = function(n) {
    return n * 2;
};

// Section 5: Operators
console.log(5 + "5");
console.log(5 - "3");
console.log(5 * "2");
console.log("10" / 2);
console.log(10 % "3");

// let x = 10;
x += 5;
x *= 2;
x -= 3;
x /= 2;

console.log(5 > 3 && 10 < 20);
console.log(5 > 3 || 10 > 20);
console.log(!(5 > 3));

// Section 6: Function Parameters vs Arguments
function sum(a, b, c = 5) {
    return a + b + c;
}
console.log(sum(2, 3));
console.log(sum(2, 3, 10));

// Bonus Questions
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter1 = outer();
counter1();
counter1();
const counter2 = outer();
counter2();
counter2();

// Number Reversal without Built-in Methods
function reverseNumber(num) {
    // Convert number to string manually and reverse it
}

// Custom Length Function
function customLength(str) {
    // Calculate length without using .length
}

// Avoid Hoisting Bug
console.log(add(2, 3));
console.log(multiply(2, 3));

function add(a, b) {
    return a + b;
}

var multiply = function(a, b) {
    return a * b;
};

// Function That Returns Another Function
function counter() {
    let count = 0;
    return function() {
        return ++count;
    };
}

const count = counter();
console.log(count());
console.log(count());
console.log(count());
