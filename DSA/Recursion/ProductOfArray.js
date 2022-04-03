/* Write a function called ProductOfArray which takes in an 
array of numbers and returns the product of them all*/

//First Approach
function helper(arr, i) {
  if (i >= arr.length) return 1;
  return arr[i] * helper(arr, i + 1);
}

function productOfArray(arr) {
  return helper(arr, 0);
}

console.log(productOfArray([1, 2, 3])); //6

//Second Approach
function productOfArray(arr) {
  if (arr.length == 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}
