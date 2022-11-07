// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// My Solution
const arr = [100, 70, 5, 9];

const minElement = function (arr) {
  return Math.min(...arr);
};

function sumTwoSmallestNumbers(numbers) {
  const first_minimum = minElement(numbers);
  const arr2 = numbers.splice(numbers.indexOf(first_minimum), 1);
  const second_minimum = minElement(numbers);
  return first_minimum + second_minimum;
}

// console.log(sumTwoSmallestNumbers(arr));
