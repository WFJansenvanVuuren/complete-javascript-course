'use strict';

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 1: [12, 5, -5, 0, 4]
*/

// 1) Understanding the problem
// Create a function that turns an array of data into a string.
// What is the number before days

// 2) Break up into sub problems
//  Turn the data inside the array into a string
//  The number before days should be, lets say X(0) + 1
//  Add ... before each array item and ... at the end of the string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// console.log(
//   `... ${data1[0]}°C in 1 days ... ${data1[1]}°C in 2 days ... ${data1[2]}°C in 3 days ...`
// );

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log('... ' + str);
};

printForecast(data1);
