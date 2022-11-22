/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

// input is sstring
// return the mose recurring character

// use a cache object to count each letter
// get number with biggest count

// function maxRecurringChar(text) {
//     const cache = {}

//     for(let char of text) {
//         if(cache[char]) cache[char] += 1
//         else cache[char] = 1
//     }

//     let max = -Infinity
//     let maxChar = null
//     for(let char in cache) {
//         if(cache[char] > max) {
//             max = cache[char] 
//             maxChar = char
//         }
//     }
//     return maxChar
// }

function maxRecurringChar(text) {
    const cache = {}

    for(let char of text) {
        if(cache[char]) cache[char] += 1
        else cache[char] = 1
    }

    const chars = Object.keys(cache)
    const counts = Object.values(cache)
    return chars[counts.indexOf(Math.max(...counts))]

}



module.exports = maxRecurringChar;