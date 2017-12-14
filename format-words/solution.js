// Complete the method so that it formats the words into a single comma 
// separated value. The last word should be separated by 
// the word 'and' instead of a comma. 
// The method takes in an array of strings and returns a single 
// formatted string. Empty string values should be ignored. 
// Empty arrays or null/nil values being passed into the method 
// should result in an empty string being returned.

// formatWords(['ninja', 'samurai', 'ronin']) // should return "ninja, samurai and ronin"
// formatWords(['ninja', '', 'ronin']) // should return "ninja and ronin"
// formatWords([]) // should return ""

function formatWords(words){
  if(!words) return ''
  words = words.filter(v=> v != '')
  if(words.length === 1) return words.join('')
  let end = ''
  for (let i = 0; i < words.length; i++) {
    i >= words.length-2? words[i] = `${words[i]} and ${words.pop()}` : words.splice(i,1,`${words[i]},`)
  }
  end += words.join(' ')
  return end
}