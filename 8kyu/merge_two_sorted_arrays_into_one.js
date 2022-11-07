// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// my Solution
const arr1 = [1, 3, 5, 7];
const arr2 = [10, 6, 8];

function checkOrder(arr) {
  if (arr[0] > arr[1]) {
    return arr.sort((a, b) => {
      return a - b;
    });
  } else {
    return arr;
  }
}

function getUnique(array) {
  var uniqueArray = [];

  // Loop through array values, the function is for removing duplicates
  for (let i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}
function mergeArrays(arr1, arr2) {
  checkOrder(arr1);
  checkOrder(arr2);
  const merge = arr1.concat(arr2);
  const mergedUnique_array = getUnique(merge);
  mergedUnique_array.sort((a, b) => {
    return a - b;
  });
  return mergedUnique_array;
}

console.log(mergeArrays(arr1, arr2));
