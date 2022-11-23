const falsyBouncer = require('./index-START')

test('should remove falsy values', () => {
  expect(falsyBouncer(['yes', '', null, 'null', undefined, 'defined', 0, 2, 3, false, true]))
    .toEqual(['yes', 'null', 'defined', 2, 3, true])
})