"use strict";

// let number = 5; debugger

// function logNumber(){
//     console.log(number); debugger
// }

// number = 6;

// logNumber();debugger

// number = 8;

// logNumber();debugger


function createCounter() {
    let counter = 0;

    const myFunction = function() {
        counter = counter + 1;debugger
        return counter;
    }
    
    return myFunction;
}

const increment = createCounter();
const c1 = increment();debugger
const c2 = increment();debugger
const c3 = increment();debugger

console.log(c1, c2, c3);