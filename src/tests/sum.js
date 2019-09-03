const EnhancedArray = require("../EnhancedArray");

function SumTest() {
    console.log("===== Start of sum tests =====");
    
    let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
    console.log("Our array is: " + arr);
    let sum = arr.sum();
    console.log("Sum of all elements: " + sum);

    let sum_even = arr.sum(function(element) {
        return (element % 2 === 0);
    });
    console.log("Sum of even elements: " + sum_even);

    console.log("===== End of sum tests =====");
    console.log("\n\n\n");
}

module.exports = SumTest;