#!/usr/bin/node
/* a class Rectangles with width and height attributes
 * creates an empty object if w or h <= 0
 */
module.exports = class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }
};
