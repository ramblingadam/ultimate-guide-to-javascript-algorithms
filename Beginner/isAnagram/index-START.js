/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/


// input: 2 strings
// return true if anagram, false if not

// can the letters from one word be rearranged to form the other word
// base case testing length, if lengths don't match, exit


// make a cache for each string, compare caches

function isAnagram(stringA, stringB) {
    if(stringA.length !== stringB.length) return false

    const cacheA = {}
    const cacheB = {}

    for(let char of stringA) {
        if(cacheA[char]) cacheA[char] += 1
        else cacheA[char] = 1
    }

    for(let char of stringB) {
        if(cacheB[char]) cacheB[char] += 1
        else cacheB[char] = 1
    }

    for(let char in cacheA) {
        if(cacheA[char] !== cacheB[char]) return false
    }

    return true

}

// sort both strings and compare

function isAnagram(stringA, stringB) {
    const sortedA = stringA.split('').sort().join('')
    const sortedB = stringB.split('').sort().join('')
    if(sortedA === sortedB) return true
    else return false
}


module.exports = isAnagram