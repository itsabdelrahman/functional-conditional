import conditional from '../src';

test('Matches literals', () => {
  const match = conditional<number, string>([
    { if: 0, then: 'zero' },
    { if: 1, then: 'one' },
    { if: 2, then: 'two' },
  ]);

  expect(match(0)).toBe('zero');
  expect(match(1)).toBe('one');
  expect(match(2)).toBe('two');
  expect(match(3)).toBeUndefined();
});
