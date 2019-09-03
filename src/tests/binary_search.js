const EnhancedArray = require("../EnhancedArray");

function BinarySearchTest() {
    console.log("===== Start of binary_search tests =====");

    let arr;
    let index;

    arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
    console.log("Our array is: " + arr);
    index = arr.binary_search(13);
    console.log("Index of (13) is: " + index);

    arr = new EnhancedArray(4, 2, 19, 16, 11, 7, 13);
    console.log("Our unsorted array is: " + arr);
    index = arr.binary_search(13);
    console.log("Index of 13 is: " + index);

    console.log("===== End of binary_search tests =====");
    console.log("\n\n\n");
}

module.exports = BinarySearchTest;