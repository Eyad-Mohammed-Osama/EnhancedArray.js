const EnhancedArray = require("../EnhancedArray");

function IsSortedTest() {
    console.log("===== Start of is_sorted tests =====");

    let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
    console.log("Our array is: " + arr);

    let is_sorted_ascending = arr.is_sorted();
    console.log("Is the array sorted in ascending order: " + is_sorted_ascending);

    let is_sorted_descending = arr.is_sorted(EnhancedArray.DESCENDING);
    console.log("Is the array sorted in descending order: " + is_sorted_descending);


    console.log("===== End of is_sorted tests =====");
    console.log("\n\n\n");
}

module.exports = IsSortedTest;