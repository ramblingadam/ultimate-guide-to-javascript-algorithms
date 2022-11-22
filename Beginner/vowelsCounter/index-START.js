/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


function vowelsCounter(text) {
    const vowels = 'aeiouAEIOU'
    let result = 0
    for(let char of text) {
        if(vowels.includes(char)) result += 1
    }
    return result
}





module.exports = vowelsCounter;
