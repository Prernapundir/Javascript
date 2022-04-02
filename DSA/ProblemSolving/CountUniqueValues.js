/*
Implement a function countUniqueValues which accepts a sorted array,
and counts the unique values in the array. There can be negative numbers in the array
,but it will always be sorted.
*/


// Use Two pointer approach

function countUniqueValues(arr) {
  if (arr.length == 0) return 0;

  let i = 0,
    j = 0;

  while (j < arr.length) {
    if (arr[i] == arr[j]) j++;
    else {
      arr[i + 1] = arr[j];
      i++;
      j++;
    }
  }
  console.log(arr);
  return i + 1;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
