import sum from './sum';

// MATCHER TESTS
// exact equality
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// object value
test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// test for the opposite of a matcher
test('adding positive numbers DOES NOT equal zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

// Truthiness
test('test for null/undefined value(s)', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero values', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

// Numbers
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are EQUIVELENT for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

// Floating point equality
test('floating point numbers are as expected', () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3); THIS WONT WORK DUE TO ROUNDING NOT BEING EXACT
  expect(value).toBeCloseTo(0.3); //this however will work  
});

// Strings
// you can check string against one another using 'toMatch'

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('But there is a "stop" in Christopher.', () => {
  expect('Christopher').toMatch(/stop/);
});

//Arrays

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer'
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
});

// FULL LIST OF EXPECT METHODS

// expect.extend(matchers)
// expect.anything()
// expect(value)
// expect.any(constructor)
// expect.arrayContaining(array)
// expect.assertions(number)
// expect.hasAssertions()
// expect.not.arrayContaining(array)
// expect.not.objectContaining(object)
// expect.not.stringContaining(string)
// expect.not.stringMatching(string | regexp)
// expect.objectContaining(object)
// expect.stringContaining(string)
// expect.stringMatching(string | regexp)
// expect.addSnapshotSerializer(serializer)
// .not
// .resolves
// .rejects
// .toBe(value)
// .toHaveBeenCalled()
// .toHaveBeenCalledTimes(number)
// .toHaveBeenCalledWith(arg1, arg2, ...)
// .toHaveBeenLastCalledWith(arg1, arg2, ...)
// .toHaveBeenNthCalledWith(nthCall, arg1, arg2, ....)
// .toHaveReturned()
// .toHaveReturnedTimes(number)
// .toHaveReturnedWith(value)
// .toHaveLastReturnedWith(value)
// .toHaveNthReturnedWith(nthCall, value)
// .toBeCloseTo(number, numDigits)
// .toBeDefined()
// .toBeFalsy()
// .toBeGreaterThan(number)
// .toBeGreaterThanOrEqual(number)
// .toBeLessThan(number)
// .toBeLessThanOrEqual(number)
// .toBeInstanceOf(Class)
// .toBeNull()
// .toBeTruthy()
// .toBeUndefined()
// .toBeNaN()
// .toContain(item)
// .toContainEqual(item)
// .toEqual(value)
// .toHaveLength(number)
// .toMatch(regexpOrString)
// .toMatchObject(object)
// .toHaveProperty(keyPath, value)
// .toMatchSnapshot(propertyMatchers, snapshotName)
// .toMatchInlineSnapshot(propertyMatchers, inlineSnapshot)
// .toStrictEqual(value)
// .toThrow(error)
// .toThrowErrorMatchingSnapshot()
// .toThrowErrorMatchingInlineSnapshot()

// Spying on constructor() etc

