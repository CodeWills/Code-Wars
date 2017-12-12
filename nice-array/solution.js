// A Nice array is defined to be an array where for every value n in the array, 
// there is also an element n-1 or n+1 in the array.
// Write a function named isNice/IsNice that returns true if its array 
// argument is a Nice array, else false. You should also return false if 
// input array has no elements.


function isNice(arr){
  if (arr.length === 0) return false;
  return arr.every(item => arr.includes(item - 1) || arr.includes(item + 1))
}