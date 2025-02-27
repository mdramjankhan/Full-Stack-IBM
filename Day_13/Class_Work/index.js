//---------------------- HIGHER ORDER FUNCTIONS-------------------------------------->
// For each
// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
// let output = arr.forEach((el, index)=> { // first paramiter is element and the second is index

// })

// console.log(output);

// for(let i=0;i<arr.length;i++) {
//     console.log(arr[i], i);
// }


//MAP------------------------------------------------>

// let output = arr.map((el, index)=> {
//     return el **2 ;
// })

// console.log(output);

//filter------------------------------------------------>
// let output = arr.filter((el, index)=> {
//     return el > 5;
// })

//reduce--------------------------------------->
// let output = arr.reduce((acc, el, index)=> { // accumulator and current element
//     console.log(el, index, acc);
//     return acc+el
// }, 0); // initial value of accumulator
// console.log(output);

// multiple higher order functions------------------>
// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,"Ramjan Khan", "Amarjit Das"];

// let output = arr.filter((el, inx)=> {
//     return typeof el == "number";
// }).map((el, idx)=> {
//     // console.log(el);
//     return el*2;
// }).map((el,index)=> {
//     return el+10;
// }).filter((el,index)=> {
//     // console.log(el);
//     return el > 20 && el<50;
// }).reduce((el,acc)=> {
//     // console.log(el)
//     return acc+el
// })

// console.log(output);
// let a = arr.sort((a,b)=> {return a-b})

let data = [
    {
        name: "watch",
        price: 2000,
        brand: "Apple",
        rating: 2
    },
    {
        name: "Shoe",
        price: 1000,
        brand: "Adidus",
        rating: 3
    },
    {
        name: "Phone",
        price: 20000,
        brand: "Apple",
        rating: 4
    },
    {
        name: "Samsung LED",
        price: 15000,
        brand: "Samsung",
        rating: 4
    },
];

// let output = data.sort((a,b)=> {return a.price - b.price});
// console.log(output);

// items.sort((a, b) => a.value - b.value);

// sort by name
let output = data.sort((a, b) => {
    let nameA = a.name;
    let nameB = b.name;
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
});

console.log(output)

//------------LOCAL STORAGE--------------->


