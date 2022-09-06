#!/usr/bin/node

/**
 * a function that returns the number of occurences in a list
 */

exports.nbOccurences = function (list, searchElement) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === searchElement) { count += 1; }
  }
  return count;
};
