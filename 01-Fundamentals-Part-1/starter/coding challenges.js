/*

//                      Challenge #1: (BMI Calculator)
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

//                      Challenge #2: (If,Else Statement)

if (BMIJohn > BMIMark) {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})!`)
} else {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})!`)
}
    
  

//                      Challenge #3: (Logical Operators)

const scoreDolpins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95+ 106) / 3;
// const minimumScore = 101;
console.log(scoreDolpins, scoreKoalas);


//          My Way!!!
// if (scoreDolpins === scoreKoalas && scoreDolpins >= minimumScore && scoreKoalas >= minimumScore) {
//     console.log("Both win the trophy!");
// }else if (scoreDolpins >= minimumScore && scoreKoalas) {
//     console.log("Dolphins win the trophy!");
// } else if (scoreKoalas >= minimumScore && scoreDolpins) {
//     console.log("Koalas win the trophy");
// } else {
//     console.log("No one wins!");
// }

//          Course Way!!!


if (scoreDolpins > scoreKoalas && scoreDolpins >= 100) {
    console.log("Dolphins win the trophy!");
} else if (scoreKoalas > scoreDolpins && scoreKoalas >= 100) {
    console.log("Koalas win the trophy");
} else if(scoreDolpins === scoreKoalas && scoreDolpins >= 100 && scoreKoalas >= 100) {
    console.log("Both win the trophy!");
}else {
    console.log("No one wins");
}


//                      Challenge #4: (Conditional/Turnery Operator)

const bill = 430;

// if (bill >= 50 && bill <= 300) {
//     tip = bill * 0.15     
// } else {
//     tip = bill * 0.20
// }

const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.20 * bill;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`);
*/  
