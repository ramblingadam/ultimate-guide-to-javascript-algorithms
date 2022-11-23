const arrayChunking = require('./index-START')


test('should chunk arrays when total elements are divisible by chunksize', () => {
  expect(arrayChunking([1,2,3,4,5,6], 2)).toEqual([[1,2],[3,4],[5,6]])
})

test('should chunk arrays when total elements are not divisible by chunksize', () => {
  expect(arrayChunking([1,2,3,4,5,6,7], 2)).toEqual([[1,2],[3,4],[5,6],[7]])
})