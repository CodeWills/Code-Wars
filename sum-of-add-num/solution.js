// Find the sum of the odd numbers within an array, after cubing the initial integers. 
// This function will return undefined (NULL in PHP) if any of the values aren't numbers.

// Note: There are ONLY integers in the JAVA and C# versions of this Kata.

function cubeOdd(arr) {
  for (let x = 0; x < arr.length; x += 1) {
    if (isNaN(arr[x])) return undefined;
  }
  let newArr = arr.filter((i) => i % 2 != 0);
  return newArr.map((j) => j*j*j).reduce((q,p) => q + p, 0);
}