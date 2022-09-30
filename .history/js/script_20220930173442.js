"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};
options.makeTest();


console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options["colors"]["border"]);

// for (let key in options) {
//     if (typeof(options[key]) == 'object'){
//         for (let i in options[key]){
//             console.log(`Svoistvo ${i}, imeet znachenie ${options[key][i]}`)
//         }
//     } else {
//     console.log(`Svoistvo ${key}, imeet znachenie ${options[key]}`)
// }
// }



