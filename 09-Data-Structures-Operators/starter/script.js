'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  restaurantName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    // console.log(
    //   `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    // );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
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
