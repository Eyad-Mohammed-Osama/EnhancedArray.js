"use strict";

var EnhancedArray = require("../EnhancedArray");

function EqualsTest() {
  console.log("===== Start of equals tests =====");
  var arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
  console.log("Our array is: " + arr);
  var equals = arr.equals([2, "4", "7", 11, 13, "16", 19]);
  console.log("Is it equal in value to [2, \"4\", \"7\", 11, 13, \"16\", 19] : " + equals);
  var strict_equals = arr.equals([2, "4", "7", 11, 13, "16", 19], true);
  console.log("Is it equal in value and type to [2, \"4\", \"7\", 11, 13, \"16\", 19] : " + strict_equals);
  console.log("===== End of equals tests =====");
  console.log("\n\n\n");
}

module.exports = EqualsTest;