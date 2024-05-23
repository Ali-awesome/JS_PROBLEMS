// In this program we will find biggest number from an array

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let biggest = 0
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element > biggest){
        biggest = element;
    }
}
console.log(biggest)