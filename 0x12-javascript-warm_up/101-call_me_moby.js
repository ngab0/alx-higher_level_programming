#!/usr/bin/node
/* an outside function that executes X times a function */
exports.callMeMoby = function (x, myFunction) {
  for (let i = 0; i < x; i++) {
    myFunction();
  }
};
