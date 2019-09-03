"use strict";

var EnhancedArray = require("../EnhancedArray");

function RandomTest() {
  console.log("===== Start of random tests =====");
  var arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
  console.log("Our array is: " + arr);
  var random_element = arr.random();
  console.log("Here's a random element from the array: " + random_element);
  var random_elements = arr.random(4);
  console.log("Here's an array of 4 random elements from the original array: " + random_elements);
  console.log("===== End of random tests =====");
  console.log("\n\n\n");
}

module.exports = RandomTest;