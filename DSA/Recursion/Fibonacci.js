/*
Write a recursive function called fib which acceptsa number and returns the nth number
in the fibonacci series.Recall Fibonacci series is the sequence of whole numbers
1,1,2,3,5,8,....*/

function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

console.log(fib(4)); //3
console.log(fib(10)); //55
console.log(fib(28)); //317811
