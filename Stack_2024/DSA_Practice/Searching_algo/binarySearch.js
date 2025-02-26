// Binary Search is defined as a searching algorithm used in a sorted array
// by repeatedly dividing the search interval in half.The idea of binary
// search is to use the information that the array is sorted
// and reduce the time complexity to O(log N).


function binarySearch(lo, hi, arr, k) {
        
    while (lo <= hi) {
     
         let mid = lo + Math.floor((hi - lo) / 2);
         
         if (arr[mid] === k) {
             return mid;
         }
         else if (arr[mid] < k) {
             lo = mid + 1;
         }
         else {
             hi = mid - 1;
         }
        
     }
     
     return -1;
 }


//inputs
let arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
let k = 56;

let lo = 0;
let hi = arr.length - 1;

console.log(binarySearch(lo, hi, arr, k));
