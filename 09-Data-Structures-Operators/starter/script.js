'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
//ES6 Enchanced Object Literals
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
//we can take the property names out of this object with the above array
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  restaurantName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours, //adding this object to another object

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  //ES6 New Syntax - We can leave out the function keyword
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    // console.log(
    //   `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    // );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//////////////////////////////////////////////
//Working with Strings - Part 2

const airline = 'TAP Air Portugal';

/*
//////////////////////////////////////////////
//Working with Strings - Part 1

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log('B736'[0]);
console.log(airline.length);
console.log('B737'.length);

//Strings also have methods
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal')); //This is case sensitive

//Indexes can be used to extract part of a string using the slice method:
//The slice method needs indexes as arguments.
console.log(airline.slice(4)); //The result we get here is called a substring.
console.log(airline.slice(4, 7)); //The end value is not included in the string.

//Extracting a word from a string without knowing any of the indexes:
console.log(airline.slice(0, airline.indexOf(' '))); //For extracting the first word we want everything up until the space.
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //For extracting the last word.(+1 to move up one space)

console.log(airline.slice(-2)); //Start extracting from the end
console.log(airline.slice(1, -1)); //Slice beginning and end

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

//Note: Whenever we call a method on a string, JavaScript will automatically behind the scenes convert the string primitive to a string object with the same content. It is on that object that the methods are called. This process is called boxing, because it takes our string and puts it into a box which is the object.When the operation is done the object is converted back to a regular string primitive.
// This is basically what happends:
console.log(new String('jonas'));
console.log(typeof new String('jonas'));


//////////////////////////////////////////////
//Summary: Which data structure to use.

//Where does data come from?
//Three Sources of Data:
//1. From the programm itself: Data written directly in source code(e.g. status messages)
//2. From the UI(Webpage): Data input from a user or data written in DOM(e.g tasks in todo app)
//3. From external sources: Data fetched for example from a web API(Application Programming Interface)(e.g recipe objects)
//                  👇
// All this is collections of data.
//                  👇
//Which is stored in data structures
//                  👇
//The first decision is this:
//                  👇
//If we need a simple list of values:______If we need key value pairs:
//              👇                                    👇
//       Array or a Set_________________________Object or a Map

//Data from web API's come in a special format called JSON

// ARRAYS vs. SETS:
//
//1. ARRAYS:
// 👉 Use when you need to work with unique values
// 👉 Use when high-performance is really important
// 👉 Use to remove duplicates from arrays
//
//1. SETS:
// 👉 Use when you need ordered list of values
// 👉 Use when they might contain duplicates, searching for or deleting an item from a set can be up to 10x faster than in arrays.
// 👉 Use when you need to manipulate data because there are a ton of userful array methods.

// OBJECTS vs. MAPS:
//
//1. OBJECTS:
// 👉 Object have been the traditional KEY:VALUE data structure because we did not have maps before ES6.
// 👉 Objects are easier to write and access data values with . and [] operator.
// 👉 Use to remove duplicates from arrays.
// 👉 Use objects when you need to include functions(methods). You can use to this keyword to access properties of the same object which is impossible in maps.
// 👉 Use objects when working with JSON data.
//
//1. MAPS:
// 👉 Are better suited for simple KEY:VALUE stores because they offer better performance.
// 👉 Maps keys can have any data type and are easy to iterate.
// 👉 Easy to compute the size of a map.
// 👉 Use maps when you simple need to map keys to values.
// 👉 Use maps when you need keys that are not strings.


//////////////////////////////////////////////
//Maps: Iterations

//Another way of populating a new map:
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try Again!'],
])
// console.log(question);
//Convert object to map
// console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

//Iteration eg.:
//Quiz App
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//Convert map to an array:
console.log([...question]);
//We also have these methods:
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);


//////////////////////////////////////////////
//Maps Fundementals
//a Map is data structure we can use to map values to keys.
//The diffence between objects and maps are that in maps the keys can have any type, instead of just strings it can be objects, arrays or other maps.

//Create a new map
const rest = new Map();
//Fill up the map with the set method:
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
// The fact that the set method returns the updated map allows us to change the set method like this.
//Now you can chain the next set:
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, ' We are open')
  .set(false, 'We are closed');

//In order to read data from a map we use the get method.
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
//Check if map contains a certain key:
console.log(rest.has('categories'));
//Delete elements from the map
rest.delete(2);
//Maps size property
console.log(rest.size);
//Remove all elements from the map:
// rest.clear;
//Use arrays or objects as map keys:
//In order to get data based on an array set as a key we would need to create an variable for the array and use the variable in the key's place eg.:
const arr = [1, 2];
rest.set(arr, 'Test');
//This can be very useful with DOM elements which are nothing more than a special type of object
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
//How to get the data based on the array:
console.log(rest.get(arr));
//This can be very useful with Dom elements which are nothing more than a special type of object


//////////////////////////////////////////////
//Sets
//a Set is a collection of unique values. I set cen never have any duplicates.
//Sets are itterables

//Sets are different from arrays because:
//1.Each item is unique
//2.The order of elements are irrelevant.

//Sets are not intended to replace arrays.

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

//Get size of a set:
console.log(ordersSet.size); //Sets use size and not length
//Check if a certain element is in a set:
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
//Adding new elements to a set:
ordersSet.add('Garlic Bread');
console.log(ordersSet);
//Delete elements from a set:
ordersSet.delete('Risotto');
console.log(ordersSet);
//Delete all of the elements of the set:
// ordersSet.clear();

for (const order of ordersSet) console.log(order);

//Use Case Example:
//The main use case of sets is to remove dulpicate values of arrays.

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
//Creating a set with an existing array
const staffUnique = [...new Set(staff)]; //Converting Set to Array using the Spread Operator
console.log(staffUnique);
//To know how many unique positions there are in a array:
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
//Counting how many different letters there are in a string:
console.log(new Set('jonas').size);


//////////////////////////////////////////////
//Looping Objects: Object Keys, Values and Entries

//Looping over Property Names(Keys)
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//Property Values
const values = Object.values(openingHours);
console.log(values);

//Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

//////////////////////////////////////////////
//Optional Chaining (?.)

//we can check if this exists, but this is not a good way
// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//So we use optional chaining, in option chaining if a certain property does not exist then undefined is returned.
// only if the property before ?. exist then the property after will be read, and if not undefined will be returned. a Property exist if it is not null or undefined. So 0 and '' still exists.
console.log(restaurant.openingHours.mon?.open);
//we can if multiple properties exist:
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
//What we are going to do is loop over this array and check if the restaurant is open or closed on each of the days:
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day} we open at ${open}`);
}

//Optional Chaining on calling Method:
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
//if we try call a method that does not exist:
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//Option Chaining on Arrays:
//We can use it to check if an array is empty:
const users = [{ username: 'jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.username ?? 'user array empty');
z;

//////////////////////////////////////////////
//Looping Arrays: The for-of Loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}:${el}`);
}

// console.log([...menu.entries()]);

//////////////////////////////////////////////
//Logical Assignment Operators

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};


// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// OR Assignment Operator
// Assigns a value to a variable if that variable is currently falsy.
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//Nulish Assignment Operator (null or undefined)
// Assigns a value to a variable if that variable is currently nullish.
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//AND Assignment Operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);


//////////////////////////////////////////////
//The Nullish Coalescing Operator (??)

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//Nulish: null and undefined (Does not include 0 or '')
//For the Nullish Coalescing Operator 0 and '' are not falsy value but truthy values.
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);


//////////////////////////////////////////////
//Short Circuiting (&& and ||)
//Three Properties of Logical Operators:
//1. They can use any data type
//2. They can return any data type
//3. They do short-circuiting, or short-circuit evaluation

// OR || Operator
// Short-circuits if the first value is a truthy value, it will immediately return the first value and not even look at the other values.

console.log('------OR------');

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

//Easier method to set default values than using turnery operator or if/else statement
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// AND && Operator
// Short-circuits if the first value is a Falsy value, it will immediately return the first value and not even look at the other values.

console.log('------AND------');

console.log(0 && 'Jonas');
//If it is truthy the evaluation continues and then the last value is returned.
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'Spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');


//////////////////////////////////////////////
//The Rest Pattern & Rest Parameters

//Uses the exact same syntax as the Spread Operator.
//But the collect multiple elements and condence them into an array.
//Spread operator unpacks an array and the Rest Operator packs elements into an array.
//Rest Pattern is on the left hand side of the =

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

//The Rest Syntax collects all the elements after the last variable, it does not collect skipped elements.
//The Rest Element must be the last element

//1) Destructuring
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//2) Functions

//Packing mutliple values into an array(Compress)
const pack = function (...numbers) {
  console.log(numbers);
};

pack(2, 3);
pack(5, 3, 7, 2);
pack(8, 2, 5, 3, 2, 1, 4);

//Adding all the numbers together
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');

restaurant.orderPizza('mushrooms');


//////////////////////////////////////////////
//The Spread Operator(...)
//Spread operator is on the right hand side of the =
/Spread operator unpacks an array 
// The Spread Operator is a bit similar to destructuring, it helps to get elements out of arrays.
// The difference is the spread operator takes all the elements out of the arrays and it does not create new variables.
//We can only use it in places where we can write values separated byu commas,
//The spread operator works on all so called iterables(arrays,strings, maps, set but NOT objects)
//We can only use the Spread Operator when building an array or when we pass values into a function.
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr); //Logging individual elements of an array

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy Array(Shallow)
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 Arrays or more
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Strings
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

//Real world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

//Objects
const newrestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newrestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.restaurantName = 'Ristorante Roma';

console.log(restaurantCopy.restaurantName);
console.log(restaurant.restaurantName);

////////////////////////////////////////////////////
//Destructuring Objects
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sol, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sol, 21',
  starterIndex: 2,
});



const { restaurantName, openingHours, categories } = restaurant;
// console.log(restaurantName);
// console.log(openingHours);
// console.log(categories);

const {
  restaurantName: newrestaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(newrestaurantName);
// console.log(hours);
// console.log(tags);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
// console.log(a, b);

//Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
// console.log(o, c);

///////////////////////////////////////////////////
//Destructuring an array
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];


const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

//Select the first and second element of the array
// const [first, second] = restaurant.categories;
// console.log(first, second);

//Select the first and third element of the array, skip an element
// const [first, , second] = restaurant.categories;
// console.log(first, second);

//Lets say for eg. the owner wants to switch the categories, so that vegetarian is main and italian second
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching Variables (create a temporary variable)
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//Using Destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested Destucturing (Destructuring inside of desctructuring)
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
