const EnhancedArray = require("../EnhancedArray");

function GetRangeTest() {
    console.log("===== Start of get_range tests =====");
    
    let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
    console.log("Our array is: " + arr);

    let range = arr.get_range();
    console.log("The range is: " + range);

    console.log("===== End of get_range tests =====");
    console.log("\n\n\n");
}

module.exports = GetRangeTest;