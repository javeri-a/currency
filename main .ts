import inquirer from "inquirer";
import chalk from "chalk";

const currency: any = {
  USD: 1, // base currency
  EUR: 0.92,
  GBP: 0.79,
  INR: 83.30,
  PKR: 278,
  ZAR: 18.73,
  YUAN: 7.23,
  AUD: 1.52,
  BRL: 5.07,
  CAD: 1.36
};

let currencyAnswer = await inquirer.prompt([
  {
    name:     "from",
    message:  "Enter From Currency:",
    type:      "list",
    choices:   ["USD", "EUR=", "GBP", "INR", "PKR", "ZAR", "YUAN", "AUD", "BRL","CAD"],
  },
  {
    name: "to",
    message: "Enter To Currency:",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR","ZAR", "YUAN", "AUD", "BRL","CAD"],
  },
  {
    name: "amount",
    message: "Enter Your Amount:",
    type: "number",
  },
]);

// console.log(currencyAnswer);

let fromAmount = currency[currencyAnswer.from]; // exchange rate
let toAmount = currency[currencyAnswer.to];  // exchange rate
let amount = currencyAnswer.amount;
let baseAmount = amount / fromAmount // USD base currency
let convertedAmount  = baseAmount * toAmount
console.log(convertedAmount);

// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);
