#!/usr/bin/node

/**
 * a class Square that defines a square and inherits from '5-square.js'
 * method charPrint(c) that prints the rectangle using character 'c'
 * if 'c' is undefined use the character 'x'
 */

module.exports = class Square extends require('./5-square.js') {
  charPrint (c) {
    if (c) {
      for (let i = 0; i < this.height; i++) {
        console.log('C'.repeat(this.width));
      }
    } else {
      this.print();
    }
  }
};
