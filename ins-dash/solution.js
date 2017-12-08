// Write a function insertDash(num)/InsertDash(int num) that will insert dashes ('-') 
// between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

function insertDash(num) {
  var n = num.toString().split('');
  for (var x = 0; x < n.length; x ++){
    if(n[x] % 2 && n[x -1] % 2)n.splice(x,0, '-');
  }
  return n.join("");
}