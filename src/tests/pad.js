const EnhancedArray = require("../EnhancedArray.js");

function PadTest() {
    console.log("===== Start of pad tests =====");

    let arr;

    arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
    console.log("Our array is: " + arr);
    
    let right_padded = arr.pad(12, 0);
    console.log("Our array after padding it to length 12 with zeros on the right: " + right_padded);

    let left_padded = arr.pad(-12, 0);
    console.log("Our array after padding it to length 12 with zeros on the left: " + left_padded);

    console.log("===== End of pad tests =====");
    console.log("\n\n\n");
}

module.exports = PadTest;