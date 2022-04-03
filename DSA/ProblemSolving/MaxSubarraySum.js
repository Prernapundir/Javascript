/*
Write a function called maxSubarraySum which accepts an array of integers
and a number called n.The function should calculate the maximum sum of n 
consecutive elements in the array.
*/ 


// Sliding-window approach
function maxSubarraySum(arr, n) {
  if (!arr.length) return null;

  let maxSum = -Infinity;
  let currSum = 0;
  let i = 0,
    j = 0;

  for (; i < n; i++) {
    currSum += arr[i];
  }
  maxSum = currSum;
  while (i < arr.length) {
    currSum -= arr[j];
    currSum += arr[i];
    j++;
    i++;
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5, 2], 2)); //10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5, 2], 4)); //17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); //6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); //13
console.log(maxSubarraySum([], 4)); //null
