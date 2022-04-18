//Built-In Js method, it sorts alphabatically, so we have to pass comparator in case of numeric array

let arr = [4, 5, 6, 1, 2, 9];

arr.sort((a, b) => a - b);

console.log(arr); //[1, 2, 4, 5, 6, 9]
