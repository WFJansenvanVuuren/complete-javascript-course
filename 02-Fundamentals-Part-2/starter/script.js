'use strict';
/*

//                        Functions Declarations

function logger() {
  console.log('My name is Jonas');
}


//calling/logging/invoking function
logger()
logger()
logger()
      // this is the parameter👇
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
            // this is the argument👇
const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice);
//console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice);


//                  Function Declarations vs. Epressions

//                  Function Declaration:
// We can call function declarations before they are defined in the code.
//this is the parameter👇
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
        //👇this is the argument
const age1 = calcAge1(1991);


//                  Function Epression:
// We don't give the function a name, this is also called an anonoumous function.
// All of this 👇 is an expresion
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


//                  Arrow Function:

//This is much faster because we do not need the curly braces as in above code block.
//The return happens implicitly. Will automatically return.
const calcAge3 = birthYear => 2037- birthYear;
const age3 = calcAge3(1991);
console.log(age3);

//We can only omit the Return if we have one liner function as in above.
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, 'Jonas')); 
console.log(yearsUntilRetirement(1980, 'Bob')); 



//                  Functions Calling other Functions:

function cutFruitPieces(fruit){
  return fruit * 4;
};

function fruitProcessor(apples, oranges) {

  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
};

console.log(fruitProcessor(2, 3));



//                  Functions Review:

const calcAge = function(birthYear) {
  return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
//return will immediatly exist the function after it has returned
  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }

// return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

//                  Arrays:
//Array is a data structure.
//An array is like a big container in which we can throw variables and later reference them.
//Any position of the arays simply needs to be an expression(Something that produces a value).

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

//Literal Syntax👇
const friends = ['Michael','Steven','Peter'];
console.log(friends);

// const years = new Array(1991, 1984, 2004, 2020);

console.log(friends[0]);
console.log(friends[2]);

//Get the numbers of elements in the Array👇
console.log(friends.length);
console.log(friends[friends.length - 1]);

//Mutating elements in an Array👇
friends[2] = 'Jay'
console.log(friends);
//You cannot replace the entire Array eg.:
//friend = ['Bob', 'Alice']

const firstName = 'Jonas'
const jonas = [firstName, 'Schmedt', 2037 - 1991, 'teacher', friends];

console.log(jonas);


//                    Array Exercise:

const calcAge = function(birthYear) {
  return 2037 - birthYear;
}
const years = [1991, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);


const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);