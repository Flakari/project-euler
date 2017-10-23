const targetCount = 1000;
let startCount = 0;
let num = 0;

function addThreeAddFive() {
  while (startCount < targetCount) {
    if (startCount % 5 === 0 || startCount % 3 === 0) {
      num += startCount;
    }
    startCount++;
  }
  return num;
}

console.log("The sum of all multiples of three and five below 1000 is " + addThreeAddFive() + ".");