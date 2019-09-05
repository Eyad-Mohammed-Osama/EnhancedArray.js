const EnhancedArray = require("../EnhancedArray");

function MultiplyTest() {
    console.log("===== Start of multiply tests =====");

    let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
    console.log("Our array is: " + arr);
    console.log("Array after multiplying all its elements by 2: " + arr.multiply(2));
    console.log("Array after multiplying its elements with elements of [2, 4, 6, 8, 10, 12, 14]: " + arr.multiply([2, 4, 6, 8, 10, 12, 14]));

    console.log("===== End of multiply tests =====");
    console.log("\n\n\n");
}

module.exports = MultiplyTest;