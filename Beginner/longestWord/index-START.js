/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


// string
// return the longest word, where a word is any group of 1 or more consecutive characters separated by spaces

// split string into array, copy that array and map words from copy to their lengths, math.max length, grab word at same index



function longestWord1(text) {
    const textArr = text.split(' ')
    const lengths = textArr.map(word => word.length)
    return textArr[lengths.indexOf(Math.max(...lengths))]
}

// split into array, use custom sorting algo based on length of each value, grab last in array

function longestWord2(text) {
    const textArr = text.split(' ')
    textArr.sort((a,b) => a.length - b.length)
    return textArr[textArr.length - 1]
}

// calculate length of each thing without using .length (silly but dooable)

function longestWord3(text) {
    const textArr = text.split(' ')
    const lengths = textArr.map(word => word.split('').reduce((acc, curr) => acc += 1, 0))
    return textArr[lengths.indexOf(Math.max(...lengths))] 
}

// for loop?

function longestWord4(text) {
    const textArr = text.split(' ')
    let longest = ''
    textArr.forEach(word => {
        if(word.length >= longest.length) longest = word
    })
    return longest
}


module.exports = longestWord