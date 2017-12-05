function abbrevName(name){
  var name = name;

  var res = name.split(" ", 2);
  var first = res[0].split("");
  console.log(res, first);
  var second = res[1].split("");
  var initials = (`${first[0]}.${second[0]}`).toUpperCase();
  console.log(initials);
  return initials;
}