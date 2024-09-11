'use strict';

/*
//                        Coding Challenge 1:

const calcAverage = scores => scores / 3;



function checkWinner (avgDolphins, avgKoalas){

  const scoreDolphins = calcAverage(avgDolphins);
  const scoreKoalas = calcAverage(avgKoalas);
    
  if (avgDolphins >= 2 * avgKoalas) {
  return `Dolphins win (${scoreDolphins} vs ${scoreKoalas})`;
  } else if (scoreKoalas >= 2 * scoreDolphins) {
  return `Koalas win (${scoreKoalas} vs ${scoreDolphins})`;
  } else 
  return 'No team wins...'
}
console.log(checkWinner([44 + 23 + 71], [65 + 54 + 49]));

//His Solution

const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas){
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`); 
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...')
  }
}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);


//                        Coding Challenge 2:

const calcTip = function (bill) {
return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.20 * bill;
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])]

console.log(bills, tips, totals);



//                        Coding Challenge 3:  

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

john.calcBMI();
mark.calcBMI();

if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi}) BMI!`);
} else {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi}) BMI!`);
}

*/














// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// // const markHigherBMI = BMIMark > BMIJohn;

// // console.log(BMIMark, BMIJohn, markHigherBMI);

// //                      Challenge #2: (If,Else Statement)

// if (BMIJohn > BMIMark) {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})!`)
// } else {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})!`)
// }


