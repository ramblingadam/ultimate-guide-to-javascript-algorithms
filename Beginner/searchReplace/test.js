const searchReplace = require('./index-START')

test('searchReplace is a function', () => {
  expect(typeof searchReplace).toEqual('function');
});

test('replace letters', () => {
  expect(searchReplace('frogs are cool', 'frogs', 'dogs')).toEqual('dogs are cool');
});

test('replace nums', () => {
  expect(searchReplace('1 234 56789', '234', '666')).toEqual('1 666 56789');
});

test('replace special chars', () => {
  expect(searchReplace('$%^ & &$', '&','*')).toEqual('$%^ * &$');
});