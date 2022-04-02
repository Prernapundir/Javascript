/*1. Write a function called same, which accepts two arrays.
The function should return true if every value in the array
has it's corresponding value stored in the second array. The requency values must 
be same
*/

// Naive Approach - O(n^2)
function same(arr1, arr2) {
  let n1 = arr1.length,
    n2 = arr2.length;

  if (n1 != n2) return false;

  for (let i = 0; i < n1; i++) {
    let index = arr2.indexOf(arr1[i] ** 2);
    if (index == -1) return false;
    arr2.splice(index, 1);
  }
  return true;
}

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 1], [4, 4, 1])); // false

//Best Approach - Use frequency object instead of two nested loops - O(n)
function same(arr1, arr2) {
  let n1 = arr1.length,
    n2 = arr2.length;

  if (n1 !== n2) return false;
  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let val of arr1) {
    freqCounter1[val] = (freqCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    freqCounter2[val] = (freqCounter2[val] || 0) + 1;
  }
  console.log(freqCounter1);
  console.log(freqCounter2);

  for (let key in freqCounter1) {
    let key2 = key ** 2;

    if (!(key2 in freqCounter2)) return false;
    if (freqCounter1[key] !== freqCounter2[key2]) return false;
  }
  return true;
}

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 1], [4, 4, 1])); // false
