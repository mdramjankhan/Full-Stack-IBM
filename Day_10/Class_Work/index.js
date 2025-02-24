// let str = "SV University";
// console.log(str.length);

// console.log(str[0])
// console.log(str[str.length-1])

// str[0] = 'R';

// let str2;
// str2 = str;

// let arr = [10, 10.2, 'a', "abc", undefined, null, true];
// console.log(arr);

// console.log(arr[3]="Ramjan");
// console.log(arr[arr.length-1])
// arr.push("Khan");
// console.log(arr);
// arr.pop();
// console.log(arr);

//splice - home work

//object

// 3 ways to write object
// object literal
// new keyword
// constructor

const obj = {
    Ramjan: {
        name: "Ramjan Khan",
        age: 22,
        address: "Dhaka",
        subs:["CN", "HN", "EN"]
    },
    Amarjit: {
        name: "Amarjit Das",
        age: 25,
        address: "Kolkata",
        subs:["CN", "HN", "EN"]
    },
    1:"Hello"
}

// console.log(obj.Amarjit.name);

// console.log(obj["Amarjit"])

// delete obj["Amarjit"];
// console.log(obj)

obj.Virat = {
    name: "Virat Kohli",
    age: 32,
    address: "Mumbai",
    subs:["CN", "HN", "EN"]
}

obj.Virat = {
    name: "Virat Kohli",
    age: 32,
    address: "Delhi",
    subs:["CN", "HN", "EN"]
}

console.log(obj)

let Name = "Rainbell";
let Class = "BBCI";
let subject = "FS"

let newObj = {
    Name,
    Class,
    subject
}

console.log(newObj)
