"use strict";

var EnhancedArray = require("../EnhancedArray");

function GetMedianTest() {
  console.log("===== Start of get_median tests =====");
  var arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
  console.log("Our array is: " + arr);
  var median = arr.get_median();
  console.log("The range is: " + median);
  console.log("===== End of get_median tests =====");
  console.log("\n\n\n");
}

module.exports = GetMedianTest;