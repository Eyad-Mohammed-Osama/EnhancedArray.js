"use strict";

var EnhancedArray = require("../EnhancedArray");

function DistinctTest() {
  console.log("===== Start of distinct tests =====");
  var arr = new EnhancedArray(2, 2, 2, 3, 3, 4);
  console.log("Our array is: " + arr);
  var distinct = arr.distinct();
  console.log("Distinct elements are: " + distinct);
  console.log("===== End of distinct tests =====");
  console.log("\n\n\n");
}

module.exports = DistinctTest;