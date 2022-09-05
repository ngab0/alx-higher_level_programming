#!/usr/bin/node
/* a script that prints x times 'C is fun' */
if (!parseInt(process.argv[2])) {
  console.log('Missing number of occurences');
} else {
  for (let i = 0; i < parseInt(process.argv[2]); i++) {
    console.log('C is fun');
  }
}
