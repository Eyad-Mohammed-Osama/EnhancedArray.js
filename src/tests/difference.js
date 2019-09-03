const EnhancedArray = require("../EnhancedArray.js");


function DifferenceTest() {
    console.log("===== Start of difference tests =====");

    let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
    console.log("Our array is: " + arr);
    let another_array = [2, 11, 13, 16];
    console.log("Array to differentiate with is: " + another_array);
    let difference = arr.difference(another_array);
    console.log("differentiation array is: " + difference);
    
    console.log("===== End of difference tests =====");
    console.log("\n\n\n");
}

module.exports = DifferenceTest;