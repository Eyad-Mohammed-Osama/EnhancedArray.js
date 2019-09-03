const EnhancedArray = require("../EnhancedArray");

function GetAverageTest() {
    console.log("===== Start of get_average tests =====");
    
    let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
    console.log("Our array is: " + arr);

    let arithmetic_average = arr.get_average();
    console.log("The arithmetic average is: " + arithmetic_average);

    let weighted_average;
    weighted_average = arr.get_average({
        2 : 18,
        11 : 3,
        16 : 1
    });
    console.log("The statistical average (where weight of 2 is 18, 11 is 3, 16 is 1, and the rest are 0) is: " + weighted_average);

    weighted_average = arr.get_average({
        2 : 18,
        11 : 3,
        16 : 1
    }, 1);
    console.log("The statistical average (where weight of 2 is 18, 11 is 3, 16 is 1, and the rest are 1) is: " + weighted_average);

    console.log("===== End of get_average tests =====");
    console.log("\n\n\n");
}

module.exports = GetAverageTest;