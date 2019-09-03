"use strict";

var EnhancedArray = require("../EnhancedArray");

function CountTest() {
  console.log("===== Start of count tests =====");
  var arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
  console.log("Our array is: " + arr);
  var count = arr.count();
  console.log("Number of all elements: " + count);
  var count_even = arr.count(function (element) {
    return element % 2 === 0;
  });
  console.log("Number of even elements: " + count_even);
  console.log("===== End of count tests =====");
  console.log("\n\n\n");
}

module.exports = CountTest;