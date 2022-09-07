#!/usr/bin/node

/**
 * a script that imports an array and computes a new array
 * list is imported from the file '100-data.js'
 */

const newList = [];
const list = require('./100-data.js').list;
for (let i = 0; i < list.length; i++) {
  newList.push(i * list[i]);
}
console.log(list);
console.log(newList);
