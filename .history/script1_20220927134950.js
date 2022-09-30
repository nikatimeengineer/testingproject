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