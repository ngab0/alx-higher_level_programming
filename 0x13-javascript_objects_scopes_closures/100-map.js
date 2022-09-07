#!/usr/bin/node

/**
 * a script that imports an array and computes a new array
 * list is imported from the file '100-data.js'
 */

const list = require('./100-data.js').list;
console.log(list);
console.log(list.map((item, index) => item * index));
