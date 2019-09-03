const EnhancedArray = require("../EnhancedArray.js");


function IntersectTest() {
    console.log("===== Start of intersect tests =====");

    let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
    console.log("Our array is: " + arr);
    let another_array = [4, 8, 16, 13];
    console.log("Array to intersect with is: " + another_array);
    let intersect = arr.intersect(another_array);
    console.log("Intersection array is: " + intersect);
    
    console.log("===== End of intersect tests =====");
    console.log("\n\n\n");
}

module.exports = IntersectTest;