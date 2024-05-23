// In this program we will find largest name from an array.

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let i = 0;
let ln = 0;
for (let index = 0; index < friends.length; index++) {
  const element = friends[index];
  if (element.length > ln) {
    ln = element.length;
    i = index;
  }
}
console.log(friends[i]);
