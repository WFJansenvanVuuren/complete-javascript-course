'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//----------------------------------------------
//Creating DOM Elements

//It is good practice to instead of working with global variables, to start passing the data that the function need into that function.
const displayMovements = function (movements,sort = false) {
  containerMovements.innerHTML = ''; //removed default movements

  const movs = sort ? movements.slice().sort((a,b) => a - b) : movements
 
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html); //Allows to insert HTML content into the DOM at a specific location relative to an element.
  });
};

// console.log(containerMovements.innerHTML);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${acc.balance}€`;
};
//----------------------------------------------
//Working with Chaining Methods:
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`; //Removes -symbol

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    }) //to check the array
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

//----------------------------------------------
//Computing Usernames

//With this we transformed the accounts object by adding the username property to it.
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  displayMovements(acc.movements);
  //Display balance
  calcDisplayBalance(acc);
  //Display summary
  calcDisplaySummary(acc);
};

//----------------------------------------------

//Event Handler
//Implementing Login
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  //Prevent form from submitting, see html - <form class="login">
  e.preventDefault(); //Stops from reloading the page because of form

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Disply UI and welcome message
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(' ')[0] //splits name and surname and only displays first element.
    }`;
    containerApp.style.opacity = 100;

    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    //Clear focus from pin field
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

//Implementing Transfers(Find Method)

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {//Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
  }
});

//Requesting a Loan (Some Method)

btnLoan.addEventListener('click', function () {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  //or amount * 0.1
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //Add movement
    currentAccount.movements.push(amount);
    //Apdate UI
    updateUI(currentAccount);
  }
  //Clear input field
  inputLoanAmount.value = '';
});

//Close Account(findIndex Method)

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log('delete');//To test if the connection works

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';

  labelWelcome.textContent = 'Account Deleted';
});

//Sort Movements(sortMethod)
let sorted = false

btnSort.addEventListener('click', function(e){
  e.preventDefault()
  // console.log('sort');
  displayMovements(currentAccount.movements, !sorted)// we do the opposite of sorted.
  sorted = !sorted
})


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//----------------------------------------------------------------
/*
/////////////////////////////////////////////////
//Simple Array Methods
//Methods are simply function that we can call on obects.
//This means that if we have array methods, that array is also an objects.
//These array methods are simply function attached to arrays.

let arr = ['a', 'b', 'c', 'd', 'e'];

//Slice Method:

// With the slice method method we can take out any part of an array, without changing thte original array.
//Like in strings the end parameter is not included.

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
//We can use the slice method tho create a shallow copy of the array.
//To do that we call it without any arguments at all:

console.log(arr.slice());
//We can do this same using the spread operator:
console.log([...arr]);

//Splice Method:

//The splice method work in almost the same way as the slice method, but the difference is that it changes the original array.
//Mutates the array
// console.log(arr.splice(2));
//Splice deleted the extracted elements

//Most of the time the value that the array returns is of no interest, we are usually more concerned with deleting the one or more elements from an array using splice.

//a Common use case is to remove the last element from an array:
arr.splice(-1);
console.log(arr);
//We can remove item between elements in an array:
arr.splice(1, 2); //Deletes 2 elements from position 1.
console.log(arr);

//Reverse Method:

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j,', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse());
//The reverse method does actually mutate the original array.
console.log(arr2);

///////////////////////////////////////////////////
//Concat Method

//Used to concatenate two arrays.

const letters = arr.concat(arr2);
//The first array will be the one on which the method is called and the second array is then passed into the concat method.
console.log(letters);
//We can do this same using the spread operator:
const lettersTwo = [...arr, ...arr2];
console.log(lettersTwo);
*/
/*
//////////////////////////////////////////////////
//The new AT Method:

const arr = [23, 11, 64];

console.log(arr[0]);
console.log(arr.at(0));

//Let say we want to get the last element from the array but we don't know the position.
//We use to do it like this:
console.log(arr[arr.length - 1]);
//With can also use the slice method which returns the last value as an array:
console.log(arr.slice(-1)[0]); //We then use the square [0] to take the value out of the array.

//With the new AT method we can do it like this:
console.log(arr.at(-1));

// The AT method is also used for Method Chaining.

//The AT method also works on strings:
console.log('jonas'.at(3));
*/
/*
//////////////////////////////////////////////////
//Looping Arrays: forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//For of Loop
for (const mov of movements) {
  if (mov > 0) {
    console.log(`You deposited ${mov}`);
  } else {
    console.log(`You withdrew ${Math.abs(mov)}`); //Math.abs removes the - sign
  }
}

console.log('----------forEach------------');

//The forEach is a higher order function that requires a call back function to tell it what to do.

movements.forEach(function (mov) {
  if (mov > 0) {
    console.log(`You deposited ${mov}`);
  } else {
    console.log(`You withdrew ${Math.abs(mov)}`); //Math.abs removes the - sign
  }
});
//Iterations:
//  0: function(200)
//  1: function(450)
//  2: function(400)
//  3: function(3000)

console.log('----------------------------------------------------------------');

//If we needed access to a counter variable(We need to access the index)

//For of Loop
for (const [i, mov] of movements.entries()) {
  if (mov > 0) {
    console.log(`${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`${i + 1}: You withdrew ${Math.abs(mov)}`); //Math.abs removes the - sign
  }
}

console.log('----------forEach------------');
//forEach Method
movements.forEach(function (mov, i, arr) {
  // First parameter: current element, Second: index, Third: array we are looping.
  if (mov > 0) {
    console.log(`${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`${i + 1}: You withdrew ${Math.abs(mov)}`); //Math.abs removes the - sign
  }
});

//You cannot break out of a forEach Loop.
//Continue and Break Statement do not work with the forEach loop.
//So if you need to break out of a loop use the For Of loop.
*/
/*
//////////////////////////////////////////////////
//forEach with Maps & Sets

//Maps

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//Sets
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${_}:${value}`);
});

//Sets do not have keys or indexes, so there is no need for it in the forEach method for sets but they kept it because otherwise it would not be the same signature.
//We can just use a _ which in JavaScript means a throw away variable(means, completely unnecessary)


///////////////////////////////////////
// Coding Challenge #1
*/
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrect = dogsJulia.slice(1, -2);

  const dogs = dogsJuliaCorrect.concat(dogsKate);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};

checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/
/*
//////////////////////////////////////////////////
//Filter:

//Filter returns a new array that only contain the elements with the conditions we specified.
//For the elements for which the specified condition is true will be included in the new array that the filter method return.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

//We return a boolean value, so only the conditions that are true will make it into the deposits array
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

//We can use the arrow function again.
const withdrawal = movements.filter(mov => mov < 0);
console.log(withdrawal);

//Doing this with the for of loop:
const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) depositsFor.push(mov);
}
console.log(depositsFor);
*/
/*
//////////////////////////////////////////////////
//Reduce:

//Reduce boils("reduces") all array elements down to one single value(e.g. adding all elements together).
//Reduced the array down to one single value.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
//By adding up all the deposits and withdrawals we end up with the global balance of the account.
//the first parameter in the reduce method is the accumulator and not the current element.
//Accumulor is like snow ball effect.

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0); //0 is the initial value of the accumulator in the first iteration.

//With an arrow function:
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

//Get the maximum value of the movements array:
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
*/
/*
//////////////////////////////////////////////////
//The Map Method

//a Method we can use to loop over arrays.
//Same as the forEach method but it creates a brand new array based on the original array.
//The Map Method multiplies every single element in the array by two and puts it into a new array.
//It maps the values of the original array into a new array.
//The maps method also get access to the index, value and array.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * euroToUsd;
// });

const movementsUSD = movements.map(mov => mov * euroToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * euroToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) => `${i + 1}: ${mov > 0 ? 'deposited' : 'withdrew'} ${mov}`
  //We can use the turnery operator instead of:
  // if (mov > 0) {
  //   return `${i + 1}: You deposited ${mov}`;
  // } else {
  //   return `${i + 1}: You withdrew ${Math.abs(mov)}`;
  // }
);
//We don't want to log to the console like in forEach loop, instead we want to return so that it creates the new array.
console.log(movementsDescriptions);
*/
///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/* 
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

const calcAverageHumanAge = function (ages) {
  // 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
  const humanAges = ages.map(dogAge =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );
  // const humanAges = ages.map(function (dogAge) {
  //   if (dogAge <= 2) {
  //     return 2 * dogAge;
  //   } else if (dogAge > 2) {
  //     return 16 + dogAge * 4;
  //   }
  // });

  // 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
  const adults = humanAges.filter(age => age >= 18);
  // const adults = humanAges.filter(function (age) {
  //   return age >= 18;
  // });

  // 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
  // const adultAverage =
  //   adults.reduce((acc, age) => acc + age, 0) / adults.length;
  // 0;
  const adultAverage = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length, //usefull to use current array parameter
    0
  );
  0;
  // const adultAverage = adults.reduce(function (acc, age) {
  //   return acc + age / adults.length;
  // }, 0);
  console.log(humanAges);
  console.log(adults);
  console.log(adultAverage);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
*/
/* 
//////////////////////////////////////////////////
//The Magic of Chaining Methods:

//Do not overuse chaining, can cause performance issues when working with large arrays.
//It is bad practice to chain methods that mutate the original array. Eg. Splice & reverse method.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;

//Pipeline
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  // .map((mov, i, arr) => {//we can use the array parameter in the map method to check the current array of filter, we create a code block.
  //   console.log(arr);
  //   return mov * euroToUsd;
  // })
  .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);

*/
///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/* 
const calcAverageHumanAge = function (ages) {
  const adultAverage = ages
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  console.log(adultAverage);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
*/
/*
//////////////////////////////////////////////////
//The find Method:
//We can use the find method to retreive one element of an array based on a condition.
//Unlike the filter method, find method will not return an array but only the first element in the array that meets this condition. The first element in the array for which the operation is true.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

//We can use  the find method to find an object in the array based on a property of the object
console.log(accounts);

//Let say we want to get the account where the owner is Jessica Davis
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
//Use this method using the for of loop:
*/
/* 
//////////////////////////////////////////////////
//The findLast and findLastIndex Methods:

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

const lastWithdrawals = movements.findLast(mov => mov < 0);
console.log(lastWithdrawals);

const latestLargeMovementIndex = movements.findLastIndex(
  mov => Math.abs(mov) > 2000
);
console.log(latestLargeMovementIndex);
console.log(
  `Your latest large movement was ${
    movements.length - latestLargeMovementIndex
  } movements ago`
);
*/
/*
//////////////////////////////////////////////////
//The some & every Methods:

//

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

//Checks for Equality .Returns a boolean
console.log(movements.includes(-130)); //Test if it includes a certain value.

//The some Method:
//Checks for a Condition .Returns a boolean
console.log(movements.some(mov => mov === -130)); //Here we would rather use includes method.

const anyDesposits = movements.some(mov => mov > 0); //Returns a boolean
console.log(anyDesposits);

//The every Method:
//every only returns true if all the elements in the array meet the condition we passed in.

console.log(movements.every(mov => mov > 0));

//Separate Call Back
//This way we can reuse the same function for different methods.
const deposit = mov => mov > 0;

console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/
/*
//////////////////////////////////////////////////
//The flat & flatMap Methods:

//flat Method:
//Removes nested arrays and flattens the array
//For working with nested arrays.

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

//flat Method only goes one level deep when flattening the array
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());

console.log(arrDeep.flat(2)); //We can fix this when we go 2 levels deep

//Getting all the accounts movements and adding them together:
const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

//We can do this with chainng:
const overallBalance2 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);

//To use map and then flat is a very common method so they create the flatMap Method.

//flatMap Method:
//flatMap can only go one level deep.
const overallBalance3 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance3);
*/



///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const checkDogs = function(dogsJulia, dogsKate){
  const dogsJuliaCorrect =  dogsJulia.slice(1,-2)
  const allDogs = [...dogsJuliaCorrect,...dogsKate]

  console.log(dogsJuliaCorrect);;
  console.log(dogsKate)
  console.log(allDogs);

allDogs.forEach(function(dog,i,arr){
  dog >= 3 ? console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`) : console.log(`Dog number ${i+1} is still a puppy 🐶`)
})
  
}

checkDogs([9, 16, 6, 8, 3],[10, 5, 6, 1, 4])

*/
///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const calcAverageHumanAge = function(ages){
  const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4) 
  console.log('humanAges:',humanAges);

  const olderDogs = humanAges.filter(age => age >= 18 )
  console.log('olderDogs:', olderDogs);

  const averageAge = olderDogs.reduce(function(acc,cur,i,arr){
   return acc + cur / olderDogs.length
  },0)
  console.log('averageAge:',averageAge);
}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])


///////////////////////////////////////
// Coding Challenge #3
*/
/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const calcAverageHumanAge2 = function(ages){
  const result = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4)
  .filter(age => age >= 18 )
  .reduce(function(acc,cur,i,arr){
   return acc + cur / arr.length
  },0)
  console.log('averageAge:',result);
}

calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3])
*/

///////////////////////////////////////
// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/
/*

const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];


// 1. Store the the average weight of a "Husky" in a variable "huskyWeight"
const Huskey = breeds.find(breed => breed.breed === 'Husky')
const huskyWeight = Huskey.averageWeight
console.log(huskyWeight);

// 2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
const dogBothActivities = breeds.find(breed => breed.activities.includes('running') && breed.activities.includes('fetch'))

console.log(dogBothActivities);
console.log(dogBothActivities.breed);

// 3. Create an array "allActivities" of all the activities of all the dog breeds

const allActivities = breeds.map(dog => dog.activities).flat()
console.log(allActivities);



// 4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.

const uniqueActivities = [...new Set(allActivities)]
console.log(uniqueActivities);

// 5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".

const swimmingAdjacent = allActivities.filter(dog => dog !== 'swimming')
console.log(swimmingAdjacent);

// 6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".

console.log(breeds.every(dog => dog.averageWeight >= 10))


// 7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

console.log(breeds.some(dog => dog.activities.length >= 3))
*/
/*
//////////////////////////////////////////////////
//Sorting Arrays


//Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha']
//Sorts alphabetically
//It mutates 

//Sorts alphabetically
console.log(owners.sort());

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements)
console.log(movements.sort());//This does not work because it reads strings


//We do a comparison
// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

//Ascending
// movements.sort((a,b) => {
//   if (a > b) return 1
//   if (b > a) return -1
// })

movements.sort((a, b) => a - b); 

//Descending
// movements.sort((a,b) => {
//   if (a > b) return -1
//   if (b > a) return 1
// })

movements.sort((a, b) => b - a); // descending

console.log(movements); 
*/