const EnhancedArray = require("../EnhancedArray.js");


function UnionTest() {
    console.log("===== Start of union tests =====");

    let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
    console.log("Our array is: " + arr);
    let another_array = [1, 2, 3, 4, 5];
    console.log("Array to union with is: " + arr);
    let union = arr.union(another_array);
    console.log("Intersection array is: " + union);
    
    console.log("===== End of union tests =====");
    console.log("\n\n\n");
}

module.exports = UnionTest;