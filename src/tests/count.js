const EnhancedArray = require("../EnhancedArray");

function CountTest() {
    console.log("===== Start of count tests =====");
    
    let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
    console.log("Our array is: " + arr);
    let count = arr.count();
    console.log("Number of all elements: " + count);

    let count_even = arr.count(function(element) {
        return (element % 2 === 0);
    });
    console.log("Number of even elements: " + count_even);

    console.log("===== End of count tests =====");
    console.log("\n\n\n");
}

module.exports = CountTest;