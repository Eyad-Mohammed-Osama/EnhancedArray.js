const EnhancedArray = require("../EnhancedArray");

function ExponentTest() {
    console.log("===== Start of exponent tests =====");

    let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
    console.log("Our array is: " + arr);
    console.log("Array after raising all its elements to power 2: " + arr.exponent(2));
    console.log("Array after raising all its elements to the power of elements of [2, 4, 6, 8, 10, 12, 14]: " + arr.exponent([2, 4, 6, 8, 10, 12, 14]));

    console.log("===== End of exponent tests =====");
    console.log("\n\n\n");
}

module.exports = ExponentTest;