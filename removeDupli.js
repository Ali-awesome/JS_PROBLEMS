// In this program we will be removing duplicate values from an array

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
const arr = [];
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  for (let j = 1; j < numbers.length; j++) {
    const element1 = numbers[j];
    if (element != element1 && !arr.includes(element)) {
      arr.push(element);
    }
  }
}
console.log(arr);
