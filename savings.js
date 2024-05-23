// In this program we will device a savings function for Sahed

const prompt = require("prompt-sync")();
const array = prompt(
  "Enter all transections and cost of living as [100,200,300],400: "
);

const parts = array.split("],");

if (parts.length !== 2) {
  console.log("invalid input");
} else {
  const arrayString = parts[0].replace("[", "");
  const costString = parts[1];
  const payments = arrayString.split(",").map(Number);
  const cost = parseInt(costString);

  payments.forEach(function (element, index, array) {
    let payment = parseInt(element);
    if (payment >= 3000) {
      const tax = payment * 0.2;
      payment -= tax;
      array[index] = payment;
    } else {
      array[index] = payment;
    }
  });
  monthlySavings = (payments, cost) => {
    let earning = 0;
    let savings = 0;
    for (let index = 0; index < payments.length; index++) {
      const element = payments[index];
      earning += element;
    }
    if (earning >= cost) {
      savings = earning - cost;
      return savings;
    } else {
      return "earn more";
    }
  };
  const result = monthlySavings(payments, cost);
  console.log(result);
}
