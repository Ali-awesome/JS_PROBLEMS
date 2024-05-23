// In this program we will find a year if that is leap year or Not.

const prompt = require("prompt-sync")();
const year = prompt("What year is it?: ");

if (
  (year % 400 == 0 && year % 100 == 0) ||
  (year % 4 == 0 && year % 100 != 0)
) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}
