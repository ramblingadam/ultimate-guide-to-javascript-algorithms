/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




// function palindromeChecker(text) {
//     const reversed = text.split('').reverse().join('')
//     return text === reversed
// }

// function palindromeChecker(text) {
//     let reversed = ''
//     for(let i = text.length - 1; i >= 0; i --) {
//         reversed += text[i]
//     }
//     return text === reversed
// }



function palindromeChecker(text) {
    let result = true
    for(let i = 0; i <= Math.floor(text.length) / 2; i ++) {
        if(text[i] !== text[text.length - i - 1]) {
            result = false
            break
        }
    }
    return result
}

function palindromeChecker(text) {
    let charArray = text.toLowerCase().split('')

    let result = charArray.every((letter, index) => {
        return letter === charArray[charArray.length - index - 1];
    })

    return result
}



module.exports = palindromeChecker;