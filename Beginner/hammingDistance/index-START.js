/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/

// input: 2 strings of equal length
// return: the min num of changes needed to turn one string into the other

// find the number of differences
// count the differences


// function hammingDistance(stringA, stringB) {
//     let count = 0
//     for(let i = 0; i <= stringA.length - 1; i ++) {
//         if(stringA[i] !== stringB[i]) count += 1
//     }
//     return count
// }

function hammingDistance(stringA, stringB) {
    return stringA.split('').reduce((acc, curr, i, arr) => {
        if(arr[i] !== stringB[i]) return acc += 1
        else return acc
    }, 0)
}



module.exports = hammingDistance