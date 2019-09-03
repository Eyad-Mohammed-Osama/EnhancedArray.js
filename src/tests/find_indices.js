const EnhancedArray = require("../EnhancedArray");

function FindIndicesTest() {
    console.log("===== Start of find_indices tests =====");

    let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
    console.log("Our array is: " + arr);
    let odd_indices = arr.find_indices(function(element) {
        return (element % 2 === 1);
    });
    console.log("Indices of odd elements: " + odd_indices);

    console.log("===== End of find_indices tests =====");
    console.log("\n\n\n");
}

module.exports = FindIndicesTest;