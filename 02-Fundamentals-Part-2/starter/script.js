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
*/

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

