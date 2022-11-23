// Return the first element from the given array that passes the test specified by the provided function. Both the array and function are passed into the function as arguments as shown below:

// arrayFilter(arr, func)



// takes in an array and a function. the function will return true or falsefor a particular element


// build new array + for loop

// function customFilter(arr, func) {
//   const result = []
//   for(let i = 0; i < arr.length; i++) {
//     if(func(arr[i])) result.push(arr[i])
//   }
//   return result
// }

// many splices

function customFilter(arr, func) {
  const result = []
  const master = arr.slice()

  while(arr.length) {
    if(func(arr[0])) result.push(...arr.splice(0, 1))
    else arr.splice(0,1)
  }

  return result

}



module.exports = customFilter