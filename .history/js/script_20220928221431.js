"use strict";

let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++
// }

// do {
//     console.log(num);
//     num++
// }
 
// while (num < 55)

// for (let i = 1; i < 8; i++){
//     console.log(num);
//     num++
// }

 
// for (let i = 1; i < 8; i++){
//     if (i == 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

let result = '';
const length = 7;

for (let i = 1; i < length; i++) {

    for (let j =0; j< i; j++){
        result += "*";
    }
    result += '\n';
}

console.log(result);



first: for (let i = 0; i < 3; i++) {
    console.log(`First level : ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level : ${j}`);
        for (let k = 0; k < 3; k++) {
            if ( k === 2) continue first;
            console.log(`Third level : ${k}`);
        }
    }
}



// Место для первой задачи
function firstTask() {
    // Пишем решение вот тут
    for (let i = 5; i <= 10; i++) {
        console.log(i);
    }     
}
firstTask();


function secondTask() {
    // Пишем решение вот тут
     for (let i = 20; i > 10; i--) {
        console.log(i);
    }     
}
secondTask();