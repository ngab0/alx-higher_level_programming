#!/usr/bin/node

/**
 * a class Square that defines a square and inherits from Rectangle
 * constructor must take 1 argument
 */

module.exports = class Square extends require('./4-rectangle.js') {
  constructor (size) {
    super(size, size);
  }
};
