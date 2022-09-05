#!/usr/bin/node
/* a script that prints the first argument converted to an integer */
if (parseInt(process.argv[2])) {
  console.log('My number: ' + parseInt(process.argv[2]));
} else {
  console.log('Not a number');
}
