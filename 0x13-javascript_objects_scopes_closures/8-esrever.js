#!/usr/bin/node

/**
 * a function that returns the reversed version of a list
 * prototype: exports.esrever = function (list)
 */

exports.esrever = function (list) {
  const reverse = [];
  let j = 0;
  for (let i = list.length - 1; i >= 0; i--) {
    reverse[j] = list[i];
    j++;
  }
  return reverse;
};
