// Given an integer, return an integer that has the reverse ordering of that which was received. E.g

// reverseInteger(-123) // should return -321

// detect if pos or negative, store that fact
// convert to string, remove any signs
// split reverse join => back to int
// if neg, subtract int from 0. else return int

// function integerReversal(int) {
//   const neg = int < 0 ? true : false

//   const reversed = int.toString().split('').filter(char => !isNaN(+char)).reverse().join('')
  
//   return neg ? 0 - +reversed : +reversed

// }


// for loop counting down

function integerReversal(int) {
  let str = int.toString()
  let result = ''
  if(str[0] === '-') {
    result += '-'
    str = str.slice(1)
  }

  for(let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  return +result
}

module.exports = integerReversal