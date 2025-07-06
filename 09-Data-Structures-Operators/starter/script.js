'use strict';
/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.toUpperCase().slice(0, 3); //arrow function

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(45);
  console.log(output);
}

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the new Airbus family');
// }


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


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


// Coding Challenge #1

// const { players1 = game.players[0], players2 = game.players[1] } = game;
// console.log('players1', players1, 'players2', players2);

//How he did it:
const [players1, players2] = game.players;
// console.log(players1, players2);

//////////////////////////////////////////
//2.
const [gk, ...fieldPlayers] = players1;
// console.log('gk', gk, 'fieldPlayers', fieldPlayers);

//////////////////////////////////////////
//3.
const allPlayers = [...players1, ...players2];
// console.log('allPlayers', allPlayers);

//////////////////////////////////////////
//4.
// const substitutePlayers = ['Thiago', 'Coutinho', 'Perisic'];
// const players1Final = [...players1, ...substitutePlayers];
// console.log('players1Final', players1Final);

//How he did it:
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log('players1Final', players1Final);

//////////////////////////////////////////
//5.
// const {
//   odds: { team1: team1, x: draw, team2: team2 },
// } = game;
// console.log('team1', team1, 'draw', draw, 'team2', team2);

//How he did it:
const {
  odds: { team1, x: draw, team2 },
} = game;
// console.log('team1', team1, 'draw', draw, 'team2', team2);

//////////////////////////////////////////
//6.
const printGoals = function (...players) {
  // console.log(`${players.length} goals were scores by ${game.scored}`);
};

printGoals(...game.scored);

// 7.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team2 < team1 && console.log('Team 2 is more likely to win');

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

///////////////////////////////////////
// Coding Challenge #2

 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀


// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for (const [goal, player] of game.scored.entries())
  console.log(`Goal ${goal + 1}: ${player}`);

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
const avgOdds = Object.values(game.odds);
let avg = 0;
for (const i of avgOdds) {
  avg += i / avgOdds.length;
}
console.log(avg);

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} Bayern Munich: ${odd}`);
}

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }

const scorers = {};
for (let player of Object.values(game.scored)) {
  scorers[player] = (scorers[player] || 0) + 1; //ensures each player's score is incremented, starting at 0 if they haven't been encountered before.
}
console.log(scorers);

His answer:
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}


///////////////////////////////////////
// Coding Challenge #3

// Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

// GOOD LUCK 😀

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1.
const events = [...new Set(gameEvents.values())];
console.log(events);

//2.
gameEvents.delete(64);
console.log(gameEvents);

//3.
let totalTime;
for (let i of gameEvents.keys()) {
  totalTime = i;
}
console.log(
  `An event happened, on average, every ${totalTime / gameEvents.size} minutes`
);

//How he did it.
const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

//4.
for (const [key, value] of gameEvents) {
  if (key <= 45) console.log(`[FIRST HALF] ${key}: ${value}`);
  else console.log(`[SECOND HALF] ${key}: ${value}`);
}
//How he did it.
for (const [key, value] of gameEvents) {
  const half = key <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${key}: ${value}`);
}

///////////////////////////////////////
// Coding Challenge #4


Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toLocaleUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////
//Working with Strings - Part 3

//Split & Join Method
//Split allows us to split a string into multiple parts based on a divider string.

console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedt'.split(' '));

const [firstName, lastName] = 'Jonas Schmedt'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase())); //Different Way
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jesicca ann smith davis');
capitalizeName('Jonas Schmedt');

//Padding
//This means adding a certain amount of characters to a string until a string has a desired length.
const message = 'Go to gate 23';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

//Real worlds example of padding:
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4335123477351232));
console.log(maskCreditCard('2344886413251129'));
//Repeat Method:
//Allows us to repeat the same string multiple times:
const message2 = 'Bad weather... All departures delayed!... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛬'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);


//////////////////////////////////////////////
//Working with Strings - Part 2

const airline = 'TAP Air Portugal';

//Changing the case of a string:
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('jonas'.toUpperCase());

//Fix the capitalization in a name:
const passenger = 'jOnAS'; //
//The first step is to put everything into lowercase:
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);
// You can create a function with this that can take any passenger name and returns the correct one:
//Figure this function out:
const fixName = function () {
  const passengerLower = passenger.toLowerCase();
  const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
  console.log(passengerCorrect);
};
fixName('jOnAS');

//Example, Comparing Emails:
const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.Io \n';

const loweremail = loginEmail.toLowerCase();
const trimmedEmail = loweremail.trim(); //There is also trimstart and trimend
console.log(trimmedEmail);
//We could do this all in one step
const noramlizedEmail = loginEmail.toLowerCase().trim();
console.log(noramlizedEmail);
console.log(email === noramlizedEmail);

//Replace parts of strings
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcemnet =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcemnet.replaceAll('door', 'gate'));

//We used to use regular expression to do this before replaceAll was implemented:
console.log(announcemnet.replace(/door/g, 'gate')); //g stands for global

//Three methods that include booleans:
//includes
//startsWith
//endsWith

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new Airbus family');
}

//Practice Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed to board!');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a Laptop, some Food and a Pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

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
// 👉 Use when you need to manipulate data because there are a ton of useful array methods.

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
]);
//console.log(question);
//Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Iteration eg.:
//Quiz App
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(
  prompt(
    `${question.get('question')}\n${question.get(1)}, ${question.get(
      2
    )} or ${question.get(3)}`
  )
);
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//Convert map to an array:2
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

//////////////////////////
//New operations to make sets useful:
//In ES2025 sets got 7 more methods.

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

//Create a set where only the elements of that are the same in both sets:
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection:', commonFoods);
console.log([...commonFoods]); //Make it an array.

//Get all the elemets of both sets but without any duplicates:
const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log(italianMexicanFusion);
//You can also create a new set with both foods using the spread operator.
console.log(new Set([...italianFoods, ...mexicanFoods]));

//Will give you all the elements that are unique to the specific set.
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Difference italian', uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('Difference mexican', uniqueMexicanFoods);

//Gives us all the elements of both sets that are not the same:
const uniqueFoods = italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueFoods);

//Check if sets are the same:
console.log(italianFoods.isDisjointFrom(mexicanFoods));

//There are two other methods:


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
//We can only use it in places where we can write values separated by commas,
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

///////////////////////////////////////
// Coding Challenge #1

/*
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

*/
/*
const players1 = game.players[0];
const players2 = game.players[1];
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log('gk', gk, 'fieldPlayers', fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1];
console.log(players1Final);

const { team1: team1, x: draw, team2: team2 } = game.odds;
console.log(team1, draw, team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

const printGoals = function (...players) {
  console.log(`${players.length} goals were scores by ${game.scored}`);
};

printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');



///////////////////////////////////////
// Coding Challenge #2

// Let's continue with our football betting app!

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

for (const [i, el] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${el}`);
}

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

const avgOdds = Object.values(game.odds);
let avg = 0;
for (const i of avgOdds) {
  avg += i / avgOdds.length;
}
console.log(avg);

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }

//Take an array and push the values into an object, with the values as keys and the amounts of duplicates as values
//Use a for of loop

const scorers = {};

for (const scorer of game.scored.values()) {
  if (scorers[scorer]) {
    scorers[scorer]++;
  } else {
    scorers[scorer] = 1;
  }
}

console.log(scorers);
*/
///////////////////////////////////////
// Coding Challenge #3

// Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

// GOOD LUCK 😀
/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)

const events = [...new Set(gameEvents.values())];
console.log(events);


// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.

const removeEvent = gameEvents.delete(64)
console.log(gameEvents);

// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

for (const [minutes, events] of gameEvents){
  minutes <= 45 
  ? console.log(`[FIRST HALF] ${minutes}: ${events} `) 
  : console.log(`[SECOND HALF] ${minutes}: ${events} `)
}
*/
///////////////////////////////////////
// Coding Challenge #4

// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

// THIS TEST DATA (pasted to textarea)
// underscore_case
//  first_name
// Some_Variable 
//   calculate_AGE
// delayed_departure

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// HINT 1: Remember which character defines a new line in the textarea 😉
// HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
// HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

// Afterwards, test with your own test data!

// GOOD LUCK 😀
