#!/usr/bin/node
/*
 * a class Rectangle with width and height as attributes
 * if w && h <= 0 create an empty object
 * method print() that prints the rectangle with Xs
 */
module.exports = class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    for (let i = 0; i < this.height; i++) {
      console.log('X'.repeat(this.width));
    }
  }
};
