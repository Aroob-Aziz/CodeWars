// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

//My Solution

function addBinary(a, b) {
  const sum = a + b;
  // toString([radix]) => returns a string value in a specified radix(base)
  const result = sum.toString(2);
  return result;
}

console.log(addBinary(2, 5));
// result = 111 => desired result
