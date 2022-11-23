// Receiving a sentence, a word in the sentence and a replacement for that word as arguments, perform a search and replace on the sentence using the arguments provided and return the new sentence



// string of words, a word to replace, and a word to replace that word with
// new string with word replaced

// replace() method


function searchReplace1(sent, target, replacement) {
  return sent.replace(target, replacement)
}

// map

function searchReplace2(sent, target, replacement) {
  return sent.split(' ').map(word => {
    if(word === target) return replacement
    else return word
  }).join(' ')
}

// for loop

function searchReplace3(sent, target, replacement) {
  let sentArr = sent.split(' ')
  let result = ''

  for(let i = 0; i < sentArr.length; i ++) {
    if(sentArr[i] === target) result += replacement + ' '
    else result += sentArr[i] + ' '
  }
  return result.trim()
}



module.exports = searchReplace