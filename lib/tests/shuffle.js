"use strict";

var EnhancedArray = require("../EnhancedArray");

function ShuffleTest() {
  console.log("===== Start of shuffle tests =====");
  var arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
  console.log("Our array is: " + arr);
  var shuffled = arr.shuffle();
  console.log("The new array after shuffling: " + shuffled);
  console.log("===== End of shuffle tests =====");
  console.log("\n\n\n");
}

module.exports = ShuffleTest;