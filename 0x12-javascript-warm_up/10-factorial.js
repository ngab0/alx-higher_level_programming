#!/usr/bin/node
/* a script that computes and prints a factorial */
function factorial (a) {
  let factorial = 1;
  if (parseInt(a) === 'NaN' || parseInt(a) === 0) {
    factorial = 1;
    console.log(factorial);
  } else {
    for (let i = a; i > 0; i--) {
      factorial *= i;
    }
    console.log(factorial);
  }
}
factorial(process.argv[2]);
