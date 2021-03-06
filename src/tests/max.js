const EnhancedArray = require("../EnhancedArray");

function MaxTest() {
    console.log("===== Start of max tests =====");
    
    let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
    console.log("Our array is: " + arr);

    let max = arr.max();
    console.log("The biggest element is: " + max);

    let max_even = arr.max(function(element) {
        return (element % 2 === 0);
    });
    console.log("The biggest even element is: " + max_even);

    console.log("===== End of max tests =====");
    console.log("\n\n\n");
}

module.exports = MaxTest;