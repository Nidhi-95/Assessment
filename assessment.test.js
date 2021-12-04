
const {add, subtract, product} = require('./app');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});


test('subtract 5 - 2 to equal 3', () => {
  expect(subtract(5, 2)).toBe(3);
});

test('subtract 10 - 8 to equal 2', () => {
  expect(subtract(10, 8)).toBe(2);
});

test('product 5 * 4 to equal 20', () => {
  expect(product(5, 4)).toBe(20);
});