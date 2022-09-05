#!/usr/bin/node
/* a script that prints the addition of 2 integers[in a function] */
function add (a, b) {
  let sum = 0;
  sum = parseInt(a) + parseInt(b);
  console.log(sum);
}
add(process.argv[2], process.argv[3]);
