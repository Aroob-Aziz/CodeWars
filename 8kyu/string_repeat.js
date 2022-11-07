// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

//my solution
function repeatStr(n, s) {
  let str = "";
  while (n > 0) {
    str += `${s}`;
    n--;
  }
  return str;
}
