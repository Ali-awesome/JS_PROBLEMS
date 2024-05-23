// In this program we will output all the number that are divisible by 3 and 5 within 50

const arr = [];
for (let index = 1; index < 50; index++) {
  if (index % 3 == 0 && index % 5 == 0) {
    arr.push(index);
  }
}
console.log(arr);
