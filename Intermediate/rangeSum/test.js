const rangeSum = require('./index-START')

test('should sum a range of positive ints', () => {
  expect(rangeSum([1,9])).toEqual(45)
})

test('should sum a range with negative ints and unsorted', () => {
  expect(rangeSum([-7,-10])).toEqual(-34)
})