// console.log(this);
const obj = {
    name: "Towhid Anuar",
    Class: "Btech",
    myfunction: () => {
        console.log(this.name);
        console.log("I am towhid");
    },
    subjets: ["DBMS", "CN", "AI", "ML", "DL"],
    newObj: {
        1: 12,
        myNewFunction: function () {
            console.log(this);
            console.log("I am Ramjan and User is Towhid");
        }
    }
}

// console.log(obj.myfunction());
// console.log()
// obj.myfunction();
// console.log(obj.myfunction);

// conditions
// 1. if condition
// let num1 = null;
// let num2 = 20;

// if (num1 < num2) {
//     console.log(`${num1} is less than ${num2}`);
// }
// else if (num1 > num2) {
//     console.log(`${num1} is greater than ${num2}`);
// }
// else if (num1 = num2) {
//     console.log(`${num1} is equal to ${num2}`);
// } else {
//     console.log("I am not sure");
// }


// LET SUPPOSE YOU HAVE ONE NUM AS INPUT YOU HAVE TO CHECK IF NUM IS MULTIPLE OF
// 3 THAN PRINT "FIZZ", IF NUM IS MULTIPLE OF 5 THAN PRINT "BUZZ", IF NUM IS MULTIPLE OF BOTH THAN PRINT "F
// IZZBUZZ"



// let num = 30;
// if (num % 3 == 0 && num % 5 == 0) {
//     console.log("Fizz Buzz");
// }
// else if (num % 3 == 0) {
//     console.log("Fizz");
// }
// else if (num % 5 == 0) {
//     console.log("Buzz");
// }
// else {
//     console.log(`${num} is not multiple of 3 or 5`);
// }


//For loop .. syntax
// for(let i=0;i<10;i++) {
//     console.log(` ${i}`);
// }

// let num = 10;
// for( let i=0;i<=num;i= i+1) {
//     console.log(i, num)
// }


// let arr = [1,2,3,4,5,5,6,7];

// for(let i=0; i<arr.length;i++) {
//     console.log(arr[i], i);
// }

// let str = "Arup Debnath";
// for(let i=0; i<str.length;i++) {
//     console.log("A"+str[i]+"B");
// }

