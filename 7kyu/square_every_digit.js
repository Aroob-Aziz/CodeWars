// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// Solution:
function squareDigits(num) {
  let numToDigits = num.toString().split("");
  let sq_digits = [];
  for (let i = 0; i < numToDigits.length; i++) {
    sq_digits.push(Number(numToDigits[i] * numToDigits[i]));
  }
  let str = "";
  for (let i = 0; i < sq_digits.length; i++) {
    str += `${sq_digits[i]}`;
  }
  return Number(str);
}

console.log(squareDigits(2112));
