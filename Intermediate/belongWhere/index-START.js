// Return the lowest index at which a value (second argument) i.e **num** should be inserted into an array (first argument) i.e **arr** once it has been sorted. The returned value should be a number. E.g

// whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater than 1(index 0), but less than 2(index 1).

// an array and a number

// the index at which the number should be inserted in the sorted array

// concat and sort then get indexOf num

function belongWhere1(arr, lost) {
  return arr.concat(lost).sort((a,b) => a - b).indexOf(lost)
}

// sort OG array and loop until we reach insertion point, break loop and return index

function belongWhere2(arr, lost) {
  arr.sort((a,b) => a - b)

  for(let i = 0; i < arr.length; i ++) {
    if(arr[i] >= lost) return i
  }

  return arr.length
}

// count smaller values, this count willbe index

function belongWhere3(arr, lost) {
  return arr.reduce((acc, curr) => curr < lost ? acc + 1 : acc, 0)
}

// filter smaller values, then get length

function belongWhere4(arr, lost) {
  const smaller = arr.filter(num => num < lost)
  return smaller.length
}

module.exports = belongWhere
