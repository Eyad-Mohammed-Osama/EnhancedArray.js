const EnhancedArray = require("../EnhancedArray.js");


function ConstructorTest() {
    console.log("===== Start of constructor tests =====");

    let arr;
    arr = new EnhancedArray();  // Zero-length uninitialized array
    console.log("Our array is: " + arr);
    
    arr = new EnhancedArray(10); // Uninitialized array that contains 10 elements
    console.log("Our array is: " + arr);

    arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);   // An array built from [2, 4, 7, 11, 13, 16, 19]
    console.log("Our array is: " + arr);

    arr = new EnhancedArray(...[2, 4, 7, 11, 13, 16, 19]);
    console.log("Our array is: " + arr);

    console.log("===== End of constructor tests =====");
    console.log("\n\n\n");
}

module.exports = ConstructorTest;