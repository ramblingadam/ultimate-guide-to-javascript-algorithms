const belongWhere = require('./index-START');

test('belongWhere is a function', () => {
  expect(typeof belongWhere).toEqual('function');
});

test('returns the appropriate index', () => {
  expect(belongWhere([1,2,3,4], 1.5)).toEqual(1);
});


test('returns the index of the specified number', () => {
  expect(belongWhere([10, 20, 30, 40, 50], 30)).toEqual(2);
});

test('returns the index even with an empty array', () => {
  expect(belongWhere([], 1)).toEqual(0);
});

