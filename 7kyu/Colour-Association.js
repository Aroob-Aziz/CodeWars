// DESCRIPTION:
// Colour plays an important role in our lifes. Most of us like this colour better then another. User experience specialists believe that certain colours have certain psychological meanings for us.

// You are given a 2D array, composed of a colour and its 'common' association in each array element. The function you will write needs to return the colour as 'key' and association as its 'value'.

//My Solution:

const arr = [
  ["white", "goodness"],
  ["red", "energy"],
  ["blue", "tranquility"],
  ["yellow", "creativity"],
];

const newArr = [];

const arrTobject = function (array) {
  for (let i = 0; i < array.length; i++) {
    const arr = array[i];
    const key = arr[0];
    const value = arr[1];
    newArr.push({
      [key]: value,
    });
  }
  return newArr;
};

console.log(arrTobject(arr));
