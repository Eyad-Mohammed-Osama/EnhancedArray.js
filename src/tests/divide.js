const EnhancedArray = require("../EnhancedArray");

function DivideTest() {
    console.log("===== Start of divide tests =====");

    let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
    console.log("Our array is: " + arr);
    console.log("Array after dividing all its elements by 2: " + arr.divide(2));
    console.log("Array after dividing its elements with elements of [2, 4, 6, 8, 10, 12, 14]: " + arr.divide([2, 4, 6, 8, 10, 12, 14]));

    console.log("===== End of divide tests =====");
    console.log("\n\n\n");
}

module.exports = DivideTest;