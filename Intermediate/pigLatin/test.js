const pigLatin = require('./index-START')

test('should piglatinize words that starrt with consonant', () => {
  expect(pigLatin('good day')).toBe('oodgay ayday')
})

test('should piglatinize words that starrt with consonant clusters', () => {
  expect(pigLatin('glove string')).toBe('oveglay ingstray')
})

test('should piglatinize words that starrt with vowels', () => {
  expect(pigLatin('abracadabra alakazam')).toBe('abracadabraway alakazamway')
})

// test('should maintain punctuation positions', () => {
//   expect(pigLatin('hey, adam!')).toBe('eyhay, adamway!')
// })