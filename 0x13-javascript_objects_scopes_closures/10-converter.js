#!/usr/bin/node

/**
 * a function that converts a number from base10 to another base passed as argument
 */

exports.converter = function (base) {
  return num => num.toString(base);
};
