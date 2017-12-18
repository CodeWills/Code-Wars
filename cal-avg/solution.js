// Write function avg which calculates average of numbers in given list.

function find_average(array) {
  let arr = (acc, curr) => acc + curr;
  return (array.reduce(arr)/array.length); 
  return arr;
}