const arr = [1, 2];
let index = 1;
let newSum = 0;
let finalSum = 0;

while (newSum < 4000000) {
  newSum = arr[index-1] + arr[index];
  arr.push(newSum);
  index++;
}

if (newSum > 4000000) {
  arr.pop();
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    finalSum += arr[i];
  }
}

console.log("The final sum of all even numbers in the sequence is " + finalSum + ".");