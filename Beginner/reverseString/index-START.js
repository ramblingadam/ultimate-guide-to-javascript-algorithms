/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function reverseString(text, i = 0) {
    // Code goes here
    // console.log('iteration', i)
    // console.log(text)
    // console.log('----')


    //// Solution 1: Method chain
    // return text.split('').reverse().join('')

    //// Solution 2: for-Loop
    let result = ''
    for(let i = text.length - 1; i >=0; i --) {
      result += text[i]
    }
    return result

    //// Solution 3: for-of loop
    // let result = ''
    // for(let char of text) {
    //   result = char + result
    // }
    // return result

    //// Solution 4: recursion
    // if(text.length === 0) return text
    // else return reverseString(text.slice(1)) + text[0]

    //// Solution 5: reduce
    return text.split('').reduce((acc, curr) => curr + acc)

}



module.exports = reverseString