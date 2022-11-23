const integerReversal = require('./index-START')

test('should reverse positive nums', () => {
  expect(integerReversal(147)).toEqual(741)
})

test('should reverse negative nums', () => {
  expect(integerReversal(-2037)).toEqual(-7302)
})

test('should remove insig 0s', () => {
  expect(integerReversal(200)).toEqual(2)
})