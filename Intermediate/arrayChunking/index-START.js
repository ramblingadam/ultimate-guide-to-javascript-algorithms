// Given an array and a chunk size, divide the array into many sub-arrays where each sub-array has the specified length. E.g


//take in an array and chunk size
// return an array of subarrays, where each subarray is the length of the chunk size.

// while loop on OG array
// shift first chunksize elements into subarray, push subarray into result array


// function arrayChunking(arr, chunksize) {
//   let result = []
//   while(arr.length) {
//     let chunk = []
//     for(let i = 0; i < chunksize; i ++) {
//       chunk.push(arr.shift())
//       if(!arr.length) break
//     }
//     result.push(chunk)
//   }
//   return result
// }

// splice

function arrayChunking(arr, chunksize) {
  let result = []
  const master = arr.slice()
  while(arr.length) {
    result.push(arr.splice(0, chunksize))
  }
  return result
}



module.exports = arrayChunking