import { test, expect } from 'vitest';
import TwoSum from './TwoSum';

test('Test1', () => {
  expect(TwoSum(1)).toEqual(2);
});

test('Test2', () => {
  expect(TwoSum(5)).toEqual(6);
});

test('Test3', () => {
  expect(TwoSum(3)).toEqual(4);
});
