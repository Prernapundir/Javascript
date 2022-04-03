/*Power of number */

function power(n, x) {
  if (x == 0) return 1;
  return n * power(n, x - 1);
}

console.log(power(2, 0)); //1
console.log(power(2, 2)); //4
console.log(power(2, 4)); //16
