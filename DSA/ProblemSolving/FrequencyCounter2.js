/*
Write a function called sameFrequency .Given two positive integers , find out
if the two numbers have th same freqency of digits.
*/

function sameFrequency(num1, num2) {
  let s1 = num1.toString();
  let s2 = num2.toString();

  if (s1.length != s2.length) return false;
  let freqCounter1 = {};

  for (let val of s1) {
    freqCounter1[val] = (freqCounter1[val] || 0) + 1;
  }

  for (let val of s2) {
    if (freqCounter1[val]) freqCounter1[val]--;
    else return false;
  }
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
