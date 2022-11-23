// Given two or more arrays, write a function that combines their elements into one array without any repetition. E.g

// combineArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]

// 2 or mroe arrays as input
// return a single array containing all elements of input arrays with no repeats


// Set...
// concat all arrs with reduce, then use set

// function combineArrays(...arrs) {
//   return [...new Set(arrs.reduce((acc, curr) => acc.concat(curr), []))]
// }

// for loop with validation

// function combineArrays(...arrs) {
//   const result = []
//   arrs.forEach(arr => {
//     result.push(...arr.filter(el => !result.includes(el)))
//   })
//   return result
// }

// for loop with validation, with concat instwead of rest syntax

function combineArrays(...arrs) {
  let result = []
  arrs.forEach(arr => {
    result = result.concat(arr.filter(el => !result.includes(el)))
  })
  return result
}


module.exports = combineArrays