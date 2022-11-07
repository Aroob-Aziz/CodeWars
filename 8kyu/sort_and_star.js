// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// My Solution

function twoSort(s) {
  const sorted_array = s.sort();
  console.log(sorted_array);
  let first = sorted_array[0].split("");
  let str = "";
  for (let i = 0; i < first.length; i++) {
    if (first[i] === first[first.length - 1]) {
      str += `${first[i]}`;
    } else {
      str += `${first[i]}***`;
    }
  }
  return str;
}
console.log(twoSort(arr2));
