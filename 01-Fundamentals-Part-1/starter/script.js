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


//                  If/Else Statements
const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah has ${yearsLeft} years left before she can start driving license 😞`);
}

//Control Structure
// if(bollean){
//   true
// } else {
//   false
// }

const birthYear = 1998;

let century;
if (birthYear <= 2000) {
    century = 20;    
} else {
    century = 21;
}
console.log(century);


//                  Type Conversion and Coercion
// - Type conversion is when we manually convert from one type to another.
// - Type coercion is when javascript automatically converts types behind the scenes for us.

//                  Type Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas')); // NaN (Not a number)
console.log(typeof NaN); // is still a number but an invalid number

console.log(String(23), 23);

//We can convert to a number, string of boolean

//                  Type Coercion
console.log('I am ' + 23 + ' years old');// the + operator triggered coercion to strings, converts numbers to strings

console.log('23' - '10' - 3); // the - operator triggers the opposite coversion
console.log('23' + '10' + 3); // + operator will convert to  a string = 23103
console.log('23' * '2');// * and / operators can only convert to numbers

let n = '1' + 1;//coverts to string '11'
n = n - 1;//converts to a number = 10
console.log(n);



//              Truthy and Falsy Values
// Falsy values are values that become false when we try to convert them into a boolean.
// There are 5 falsy values:
// 0, '', undefined, null , NaN

//Everything else is a truthy value

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('Jonas')); //true
console.log(Boolean({})); //true
console.log(Boolean(10)); //true
console.log(Boolean('')); //false

const money = 0;
if (money) {
    console.log("Don't spend it all!");
} else{
    console.log("Get a job!");
}

let height;
if (height) {
    console.log('Yay! Height is defined!');
} else {
    console.log('Height is undefined!');
}


//              Equality Operators: == vs. ===

// === Strict Equality Operator, only returns true if both values are exactly the same. Does not do type coercion.
//'18' === 18 Returns False. The string is not equal to a number. 

// ==  Loose Equality Operator, does do type coercion.
//'18' == 18 // Returns True. The string will be converted to a number. 

//As a general rule for clean code avoid the equality operator as much as possible.

const age = 18; //if '18' only loose operator will return in console.
if (age === 18) console.log('You just became an adult! (strict)');

if (age == 18) console.log('You just became an adult! (loose)');

//Getting a value from any web page.👇 Using the prompt function.
// Prompt function will return a string.
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number!');
} else if (favourite === 13) {
    console.log('13 is also a cool number!');
} else {
    console.log('Number is not 23 or 7 or 13!');
}

//              Operator for different
// !== Strict version
// !=  Loose version

if (favourite !== 23) console.log('Why not 23?');


//              Logical Operators
const hasDriverslicense = true;
const hasGoodVision = true;

console.log(hasDriverslicense && hasGoodVision); // and operator
console.log(hasDriverslicense || hasGoodVision); // or operator
console.log(!hasDriverslicense); // not operator


// if (hasDriverslicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive!');
// }

const isTired = true;
console.log(hasDriverslicense || hasGoodVision || isTired);
console.log(hasDriverslicense && hasGoodVision && isTired);

if (hasDriverslicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive!');
}


//                  The Switch Statement

const day = 'monday';

switch(day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;        
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend'); 
    break;
  default:
    console.log('Not a valid day!');
}


if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend');
} else {
  console.log('Not a valid day!');
}


//                        Statements and Expressions
// An expression is a peace of code that produces a value.
3 + 4 //this is an expression because it will produce a value.
1991 // this will also produce a value
true && false && !false

// a Statement is a bigger peice of code that is executed that does not produce a value of itself. Statement are like full sentences that translate our actions. The actions that we want the program to perform.
  



//                       The Conditional(Ternary) Operator

const age = 23;
// age >= 18 ? console.log('I like to drink wine🍷') : console.log('I like to drink water💧');

const drink = age >= 18 ? 'wine🍷' : 'water💧'
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine🍷';
} else {
  drink2 = 'water💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine🍷' : 'water💧'}`);

*/

















