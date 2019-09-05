"use strict";

var EnhancedArray = require("../EnhancedArray");

function AddTest() {
  console.log("===== Start of add tests =====");
  var arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
  console.log("Our array is: " + arr);
  console.log("Array after adding 2 to all its elements: " + arr.add(2));
  console.log("Array after adding its elements to [2, 4, 6, 8, 10, 12, 14]: " + arr.add([2, 4, 6, 8, 10, 12, 14]));
  console.log("===== End of add tests =====");
  console.log("\n\n\n");
}

module.exports = AddTest;