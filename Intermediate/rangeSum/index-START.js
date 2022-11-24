// Given an array of two numbers, return the cummulative sum of the two numbers and all the numbers between them. E.g

// rangeSum([1,9]) 
// // Should return 45 i.e 1+2+3+4+5+6+7+8+9

// input: array of two ints
// output: a sum of all ints between the two given ints, inclusive


// for loop i at first, ends at 2nd

// function rangeSum1(range) {
//   let sum = 0

//   range.sort((a,b) => a - b)

//   for(let i = range[0]; i <= range[1]; i++) {
//     sum += i
//   }

//   return sum
// }

// fill array out then reduce

// function rangeSum2(range) {
//   let filled = [...range.sort()]
//   for(let i = range[0] + 1; i < range[1]; i++) {
//     filled.push(i)
//   }
//   return filled.reduce((acc, curr) => acc + curr)
// }

// recursion

function rangeSum(range) {
  range.sort()
  function recurs(ranger) {
    if(ranger[0] > ranger[1]) return 0
    else return ranger[0] + recurs([ranger[0] + 1, ranger[1]])
  }
  return recurs(range)
}

// [1, 3]
// arr[0] + arr[0] + 1                  = 1 + 2
// set array to [arr[0] + 1, arr[1]]    = [2, 3]
// arr[0] + arr[0] + 1                  = 2 + 3
// set array to [arr[0] + 1, arr[1]]    = [3, 3]
// base case when arr[0] and arr[1] are the same. here, return 0


module.exports = rangeSum