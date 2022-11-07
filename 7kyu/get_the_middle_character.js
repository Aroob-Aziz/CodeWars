// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// my solution
function getMiddle(str) {
  let middle = str.length / 2; // finding the middle index of the string
  let a = Math.floor(middle); // rounding it off and storing it in a variable

  if (str.length % 2 == 0) {
    // if string length is even
    return str[a - 1] + str[a];
  } else {
    // if odd
    return str[a];
  }
}
