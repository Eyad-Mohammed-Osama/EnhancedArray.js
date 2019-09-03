const EnhancedArray = require("../EnhancedArray");

function GenerateRandomTest() {
    console.log("===== Start of generate_random tests =====");

    let arr;

    arr = EnhancedArray.generate_random(1, 10, 5);
    console.log("An array of 5 random numbers between 1 and 10: " + arr);
    arr = EnhancedArray.generate_random(1, 10, 5, true);
    console.log("An array of 5 random integers between 1 and 10: " + arr);
    arr = EnhancedArray.generate_random(1, 10, 5, true, true);
    console.log("An array of 5 random numbers between 1 and 10 with negative variants: " + arr);

    console.log("===== End of generate_random tests =====");
    console.log("\n\n\n");
}

module.exports = GenerateRandomTest;