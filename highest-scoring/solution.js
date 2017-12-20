// // Given a string of words, you need to find the highest scoring word.
// // Each letter of a word scores points according to it's
//  position in the alphabet: a = 1, b = 2, c = 3 etc.
// // You need to return the highest scoring word as a string.
// // If two words score the same, return the word that appears earliest in the original string.
// // All letters will be lowercase and all inputs will be valid.

function high(x){
  let finalValues = [];
  let tempWords = x.split(' ');
  function Words(word, score) {
    this.word = word;
    this.score = score;
  }
  for(i=0; i < tempWords.length; i++) {
    let score = 0;
    let str = tempWords[i].split('');
    for(j=0; j < str.length; j++) {
      score += str[j].charCodeAt(0)-96;
    }
    finalValues.push(new Words(tempWords[i], score));
  }

  function compare(a,b) {
    if (a.score < b.score)return -1;
    if (a.score > b.score) return 1;
    return 0;
  }
  finalValues.sort(compare);
  return finalValues[finalValues.length-1].word;
}