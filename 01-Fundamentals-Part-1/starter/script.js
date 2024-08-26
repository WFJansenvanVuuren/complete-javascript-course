/*
let  js = 'amazing';
console.log( 40+8+23-10);


// If more than one word is used in a variable the first word is lower case and all following words start with uppercase.
// Variables cant start with numbers.

let firstName = 'Jonas';
let first = 'jonas'
let firstNamePerson

console.log(firstName)
let PI = 3.1415;

let myFirstJob = "Programmer"
let myCurrentJob = "Draughtsman"




//                          Data Types:

// The first time we declare a variable we need to use let

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 'jonas');
console.log(typeof 1);

// We do not use the let value when we redefine a value
javascriptIsFun = 'YES!'
console.log(typeof javascriptIsFun);
console.log(javascriptIsFun);


//                          Undefined:
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);


let age = 30;
age = 31;

const birthYear = 1991;

var job = 'programmer'
job = 'teacher'


// Arithmetic/Math Operators:
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);

const firstName = 'Joe'
const lastName = 'Doe'
console.log(firstName + ' ' + lastName);


//                  Assignment Operators:
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1989 > now - 2018);

console.log(25-10-5);

let x, y;
x = y = 25-10-5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas,ageSarah, averageAge);


//                      Challenge #1: (BMI Calculator)
const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);


//                  Strings and Template Literals:
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);


console.log(`Just a regular string...`);

// Old Way:
console.log('String with \n\
multiple \n\
lines');

//New Way:

console.log(`String with
multiple
lines`);
*/