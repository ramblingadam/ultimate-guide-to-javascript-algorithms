const customFilter = require('./index-START')


test('should filter nums', () => {
  expect(customFilter([1,2,3,4,5], (val) => {
    return val > 3
  }))
    .toEqual([4,5])
})

test('should filter strings', () => {
  expect(customFilter(['turkey', 'stuffing', 'pie', 'potatoes', 'frog legs'], (val) => {
    return val.length > 6
  }))
    .toEqual(['stuffing', 'potatoes', 'frog legs'])
})