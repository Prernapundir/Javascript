/*
Write a function called sumZero which accepts a sorted arrays of integers
.The function should return first pair wher sum is 0
*/

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum == 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) right--;
    else left--;
  }
}

console.log(sumZero([-1, -3, -2, -1, 0, 1, 2, 3, 10]));
