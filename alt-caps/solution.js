// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

function capitalize(s){
  var arr = ['', ''];
  s.split('').forEach((l, i) => {
    if (i % 2 === 0) {
      arr[0] += l.toUpperCase();
      arr[1] += l;
    } else {
      arr[0] += l;
      arr[1] += l.toUpperCase();
    }
  });
  return arr;
};