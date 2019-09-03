"use strict";

var EnhancedArray = require("../EnhancedArray.js");

function SymmetricDifferenceTest() {
  console.log("===== Start of symmetric difference tests =====");
  var arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
  console.log("Our array is: " + arr);
  var another_array = [1, 2, 4, 11, 13, 17];
  console.log("Array to symmertic differentiate with is: " + another_array);
  var symmetric_difference = arr.difference(another_array);
  console.log("symmetric difference array is: " + symmetric_difference);
  console.log("===== End of symmetric difference tests =====");
  console.log("\n\n\n");
}

module.exports = SymmetricDifferenceTest;