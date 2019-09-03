const EnhancedArray = require("../EnhancedArray.js");

function RangeTest() {
    console.log("===== Start of range tests =====");

    let arr;
    arr = EnhancedArray.range(0, 10);
    console.log("An array within range [0, 10] using a step of 1: " + arr);

    arr = EnhancedArray.range(0, 10, 2);
    console.log("An array within range [0, 10] using a step of 2: " + arr);

    arr = EnhancedArray.range(10, 0, -2);
    console.log("An array within range [10, 0] using a step of -2: " + arr);

    try {
        arr = EnhancedArray.range(10, 0, 5);
    }
    catch(error) {
        if (error.name === "PossibleMemoryCrash") {
            console.log("Tried to create an array within range [10, 0] using a step of 5, but it has caused a PossibleMemoryCrash error, but it has been caught.");
        }
    }

    console.log("===== End of range tests =====");
    console.log("\n\n\n");
}

module.exports = RangeTest;