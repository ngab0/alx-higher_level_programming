#!/usr/bin/node
/* a script that searches the second biggest integer in the list of arguments */
if (process.argv.length <= 3) {
  console.log('0');
} else {
  const arr = [];
  for (let i = 2; i < process.argv.length; i++) {
    arr.push(parseInt(process.argv[i]));
  }
  arr.sort(function (a, b) {
    return a - b;
  }); // sort the array in ascending order
  console.log(arr[arr.length - 2]); // get the second last(second biggest number in the array)
}
