// In cryptanalysis, words patterns can be a useful tool in cracking simple ciphers.

// A word pattern is a description of the patterns of letters occurring in a word, where each letter is given an integer code in order of appearance. So the first letter is given the code 0, and second is then assigned 1 if it is different to the first letter or 0 otherwise, and so on.

// As an example, the word "hello" would become "0.1.2.2.3". For this task case-sensitivity is ignored, so "hello", "helLo" and "heLlo" will all return the same word pattern.

// Your task is to return the word pattern for a given word. All words provided will be non-empty strings of alphabetic characters only, i.e. matching the regex "[a-zA-Z]+".

// My Solution:
function wordPattern(words) {
  const arr = words.split("");
  let counter = 0;
  const result = {};
  const arr2 = [];

  for (let i = 0; i < words.length; i++) {
    if (
      words[i] in result ||
      words[i].toLowerCase() in result ||
      words[i].toUpperCase() in result
    ) {
    } else {
      arr[i] = counter;
      result[words[i]] = arr[i];
      counter++;
    }
  }
  for (let i = 0; i < words.length; i++) {
    let value;
    if (words[i] in result) {
      value = result[words[i]];
      arr2.push(value);
    } else if (words[i].toLowerCase() in result) {
      value = result[words[i].toLowerCase()];
      arr2.push(value);
    } else if (words[i].toUpperCase() in result) {
      value = result[words[i].toUpperCase()];
      arr2.push(value);
    }
  }
  return arr2.join(".");
}

console.log(wordPattern("aBbroobBcdC"));
