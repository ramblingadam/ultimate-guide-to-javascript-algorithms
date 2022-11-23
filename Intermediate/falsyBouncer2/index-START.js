// Given an array, remove all falsy values from the array and return an array of only truthy values. E.g


//  input: an array of values. values can be anything!
//  return: an array with all falsy values removed

// filter...


function falsyBouncer(arr) {
  const falsy = [null, undefined, 0, '', false]
  return arr.filter(val => !falsy.includes(val))
}


module.exports = falsyBouncer