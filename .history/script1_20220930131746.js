 

// const str = "test";
// const arr = [1, 2 ,4];

// console.log(str.toUpperCase());
// console.log(arr.length);


// const fruit = "Some fruit";
// console.log(fruit.indexOf("fruit"));

// const logg = "Hello world";

// console.log(logg.slice(-1));

// console.log(logg.substring(6, 11));
// console.log(logg.substr(1 ,6));


// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(te


// const usdCurr = 28;
// const discount = 0.9;


// function convert (amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);


// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) return
//     }
//     console.log('Done');
// }

// test();


// function sayHello(name) {
//     return `Hello, ${name}!`;

// }
// sayHello('Anton');

// function sayHello(name) {
//     return `Привет, ${name}!`;
// }

// console.log(sayHello('Alex'));

// // let num = 2;
// function number(num){
    
//     return [num - 1, num, num +1]
// }
// console.log(number(2));


// function getMathResult(baseNum,progressNum) {
//     for (let i = 1; i <= progressNum; i++){
//         baseNum * i
//     }

// }

// console.log(getMathResult(5,3))















// /* Задание на урок:

// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

// 4) Потренироваться и переписать цикл еще двумя способами*/

// 'use strict';

// // Код возьмите из предыдущего домашнего задания
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// }


// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a !='' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');

//     } else {
//         console.log('error');
//         i--;
//     }

// }

// if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// }else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман")
// } else {
//     console.log("Произошла ошибка")
// }
// console.log(personalMovieDB);










// let num = 50;

// // while (num <= 55) {
// //     console.log(num);
// //     num++
// // }

// // do {
// //     console.log(num);
// //     num++
// // }
 
// // while (num < 55)

// // for (let i = 1; i < 8; i++){
// //     console.log(num);
// //     num++
// // }

 
// // for (let i = 1; i < 8; i++){
// //     if (i == 6) {
// //         // break;
// //         continue;
// //     }
// //     console.log(i);
// // }

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for (let j =0; j< i; j++){
//         result += "*";
//     }
//     result += '\n';
// }

// console.log(result);



// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level : ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level : ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if ( k === 2) continue first;
//             console.log(`Third level : ${k}`);
//         }
//     }
// }



// // Место для первой задачи
// function firstTask() {
//     // Пишем решение вот тут
//     for (let i = 5; i <= 10; i++) {
//         console.log(i);
//     }     
// }
// firstTask();


// function secondTask() {
//     // Пишем решение вот тут
//      for (let i = 20; i >= 10; i--) {
//         if (i===13) break;
//         console.log(i);
//     }     
// }
// secondTask(); 


// function thirdTask(){
//     for (i = 2; i <= 10; i++){
//         if( i % 2 == 0)
//         console.log(i);
//     }
// }
// thirdTask();


// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//        continue;
//     } else {
//         console.log(i);
//     }
// }

// let numI = 2;
// while (numI <= 16){
//     if(numI % 2 === 0){
//         numI++;
//         continue;
//     } else {
//         console.log(numI);
//     }
//     numI++
// }

// function fifthTask() {
//     const arrayOfNumbers = [];

//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }

//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;
// }

// fifthTask()

// function firstTask() {
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }

//     console.log(result);
//     return result;
// }

// firstTask();

// function secondTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else if (typeof(data[i]) === 'string') {
//             data[i] = `${data[i]} - done`;
//         }
//     }

//     console.log(data);
//     return data;
// }

// secondTask();

// function thirdTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i]
//     }

//     console.log(result);
//     return result;
// }

// thirdTask();













// // if (4 == 9) {
// //     console.log('Ok!');
// // } else {
// //     console.log('Error!');
// // }

// // const num = 50;

// // if (num < 49) {
// //     console.log('Error');
// // } else if (num > 100) {
// //     console.log('many');
// // } else {
// //     console.log('Ok!');
// // }
// const num = 50;

// switch (num) {
//     case 49:
//         console.log('error');
//         break;
//     case 100:
//         console.log('error');
//         break;
//     case 50:
//         console.log('right');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }














// /* Задание на урок:

// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'

// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false

// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате: 
//     movies: {
//         'logan': '8.1'
//     }

// Проверить, чтобы все работало без ошибок в консоли */

// 'use strict';

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// }

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');


// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);












// // const vehicleBodyWidth = 5000;
// // const vehicleBodyLength = 4000;

// // console.log("Shirina kuzova avtomobilia :" + vehicleBodyWidth + ", dlina: " + vehicleBodyLength);


// const arr = [1, 2, 3];

// arr[10] = '3456'

// console.log(arr);

// const arrObj = {
//     a: 'a',
//     '1': 'b',
//     2: 'c',
//     abc : {
//         df:[{}, {}],
//         def : {

//         }
//     }
// }

// arrObj['b'] = '1234';
// arrObj[b] = {};

// console.log(arrObj['b'])
// console.log(arrObj.b)


// // const obj = {a: 1, b: 2};
// const obj = {
//     'Anna': 500,
//     'Alice': 800
// };




// const category = 'toys';
// // console.log('https://someurl.com/' + category + '/' + '4');
// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";
// alert(`Hello, ${user}`);
// // s


// // alert('Hello');

// // const result = confirm("Are you here?");
// // console.log(result);

// // const answer = +prompt("Are you 18 y.o.?", "18");
// // console.log(answer + 5);

// const answers = [];

// // answers[0] = prompt('What is your name?', '');
// // answers[1] = prompt('What is your lastname?', '');
// // answers[2] = prompt('How old are you?', '');

// console.log(typeof(answers));

// a = 15;
// console.log(a);

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log(obj);


// console.log(name);
// var name = 'Ivan';

// {
//     const result = 50;
// }

// console.log(result);


// // number
// let number = 4.6;

// console.log(4/0); //infinity
// console.log('string' * 9); //NaN Not a Number

// //strings

// const persone = "Alex";

// //boolean

// const bool = false;
// const boool = true;

// //null
// console.log(something);

// // undefined
// let und;
// console.log(und);

// // object
// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };
// // console.log(obj);
// console.log(obj["age"]);

// //massive

// let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
// console.log(arr[0]);


2