"use strict";

var EnhancedArray = require("../EnhancedArray");

function MinTest() {
  console.log("===== Start of min tests =====");
  var arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
  console.log("Our array is: " + arr);
  var min = arr.min();
  console.log("The smallest element is: " + min);
  var min_odd = arr.min(function (element) {
    return element % 2 === 1;
  });
  console.log("The smallest odd element is: " + min_odd);
  console.log("===== End of min tests =====");
  console.log("\n\n\n");
}

module.exports = MinTest;