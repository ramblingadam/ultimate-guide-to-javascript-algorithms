const combineArrays = require('./index-START')

test('should combine rrays with no duplicates', () => {
  expect(combineArrays([1,2], [2,3], [1,2,3,4], [3,4,5])).toEqual([1,2,3,4,5])
})