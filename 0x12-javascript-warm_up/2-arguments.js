#!/usr/bin/node
/* a script that prints a message depending on the number of arguments passed */
if (process.argv.length >= 3) {
  console.log('Argument found');
} else {
  console.log('No argument');
}
