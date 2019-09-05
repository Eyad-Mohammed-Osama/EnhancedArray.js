const EnhancedArray = require("../EnhancedArray");

function SubtractTest() {
    console.log("===== Start of subtract tests =====");

    let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
    console.log("Our array is: " + arr);
    console.log("Array after subtracting 2 from all its elements: " + arr.subtract(2));
    console.log("Array after subtracting its elements from elements of [2, 4, 6, 8, 10, 12, 14]: " + arr.subtract([2, 4, 6, 8, 10, 12, 14]));

    console.log("===== End of subtract tests =====");
    console.log("\n\n\n");
}

module.exports = SubtractTest;