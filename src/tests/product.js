const EnhancedArray = require("../EnhancedArray");

function ProductTest() {
    console.log("===== Start of product tests =====");
    
    let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
    console.log("Our array is: " + arr);
    let product = arr.product();
    console.log("Product of all elements: " + product);

    let product_odd = arr.product(function(element) {
        return (element % 2 === 1);
    });
    console.log("Product of odd elements: " + product_odd);

    console.log("===== End of product tests =====");
    console.log("\n\n\n");
}

module.exports = ProductTest;