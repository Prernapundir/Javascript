/* Binary Search */

function binarySearch(arr,val){
  let low=0,high=arr.length-1;
  
  while(low<=high){
      let mid=Math.floor((low+high)/2);
      if(arr[mid]>val){
          high=mid-1;
      }else if(arr[mid]<val){
          low=mid+1;
      }else{
          return mid;
      }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4], 1)) // 1
console.log(binarySearch([1, 2, 3, 5, 9], 4)) // -1
console.log(binarySearch([1, 2, 3, 4, 5], 5)) // 4
console.log(binarySearch([0, 3], 3)) // 1
