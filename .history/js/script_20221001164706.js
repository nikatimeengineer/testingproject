"use strict";

// const arr = [2, 3, 6, 8, 10];

// // arr[99] = 0;

// // console.log(arr.length)
// // console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} vnutri massiva ${arr}`)
// });

const str = prompt("","");
const products = str.split(",");
products.sort();
console.log(products.join('; '));



// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length;i++){
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }