// Translate the provided string to Pig Latin by following the rules below:

// For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. E.g
//     "pig" = "igpay"
// For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g
//     "glove" = "oveglay"
// For words that begin with vowel sounds, simply add "way" to the end of the word. E.g
//     "explain" = "explainway”


// take in a string
// return piglatinized version based on rules above


// split up words, map words
// within map, check how string starts, apply transformations based on that

function pigLatin(str) {
  const vowels = 'aeiou'
  const abc = 'abcdefghijklmnopqrstuvwxyz'

  const arr = str.toLowerCase().split(' ')

  return arr.map(word => {
    if(vowels.includes(word[0])) {
      return word + 'way'
    }
    else {
      let prefix = ''
      for(let i = 0; i < word.length; i ++) {
        if(!vowels.includes(word[i])) prefix += word[i]
        else {
          prefixLength = i
          break
        }
      }
      return word.slice(prefixLength) + prefix + 'ay'
    }
  }).join(' ')
}


module.exports = pigLatin