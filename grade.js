// In this file we made a system to convert marks to grade

// 0-32 = f
// 33-39 = c
// 40-49 = b
// 50-59 = a-
// 70-79 = a
// 80-100 = a+

const prompt = require("prompt-sync")();
const marks = prompt("How much marks did you get: ");

if (marks < 33) {
  console.log("You have failed!");
} else if (marks >= 33 && marks < 40) {
  console.log("You have got 'C'");
} else if (marks >= 33 && marks < 40) {
  console.log("You have got 'C'");
} else if (marks >= 40 && marks < 60) {
  console.log("You have got 'B'");
} else if (marks >= 60 && marks < 70) {
  console.log("You have got 'A-'");
} else if (marks >= 70 && marks < 80) {
  console.log("You have got 'A'");
} else if (marks >= 80 && marks <= 100) {
  console.log("You have got 'A+'");
} else {
  console.log("Please enter valid marks.");
}
