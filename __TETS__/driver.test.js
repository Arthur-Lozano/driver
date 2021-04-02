'use strict';

const pickUp = require('../driver');

describe('Test the delivered function within vendor', () => {
  test('It should return a console log', () => {
    expect(pickUp).toBeDefined();
  })
})