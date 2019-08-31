"use strict";

var EnhancedArray = require("./EnhancedArray.js");

var arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
console.log("Our array is: " + arr);
console.log("------------------------------------------------------------------------------------------------------------------------------------------");
arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
var intersect = arr.intersect([4, 8, 16, 13]);
console.log("Intersect with [4, 8, 16, 13] is: " + intersect);
console.log("------------------------------------------------------------------------------------------------------------------------------------------");
arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
var union = arr.union([1, 2, 3, 4, 5]);
console.log("Union with [1, 2, 3, 4, 5] is: " + union);
console.log("------------------------------------------------------------------------------------------------------------------------------------------");
arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
var difference = arr.difference([2, 11, 13, 16]);
console.log("Elements that belong to the original array but not to [2, 11, 13, 16] are: " + difference);
console.log("------------------------------------------------------------------------------------------------------------------------------------------");
arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
var symmetric_difference = arr.symmetric_difference([1, 2, 4, 11, 13, 17]);
console.log("All elements that doesn't belong to the intersection of the original array and [1, 2, 4, 11, 13, 17] are: " + symmetric_difference);
console.log("------------------------------------------------------------------------------------------------------------------------------------------");
arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
var number_of_evens = arr.count(function (element) {
  return element % 2 === 0;
});
console.log("Number of even elements in the original array: " + number_of_evens);
console.log("------------------------------------------------------------------------------------------------------------------------------------------");
arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
var odds_indices = arr.find_indices(function (element) {
  return element % 2 === 1;
});
console.log("Indices of odd elements at the original array: " + odds_indices);
console.log("------------------------------------------------------------------------------------------------------------------------------------------");
arr = EnhancedArray.range(0, 10, 2);
console.log("An array that range from 0 to 10 with even steps: " + arr);
console.log("------------------------------------------------------------------------------------------------------------------------------------------");

try {
  arr = EnhancedArray.range(10, 20, -1);
} catch (e) {
  if (e.name === "PossibleMemoryCrash") {
    console.log("Becareful, the declaration inside (try) block caused a PossibleMemoryCrash error");
  }
}

console.log("------------------------------------------------------------------------------------------------------------------------------------------");
arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
var sum_of_numbers_less_than_13 = arr.sum(function (element) {
  return element < 13;
});
console.log("Sum of elements less than 13: " + sum_of_numbers_less_than_13);
console.log("------------------------------------------------------------------------------------------------------------------------------------------");
arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
var product_of_numbers_less_than_13 = arr.product(function (element) {
  return element < 13;
});
console.log("Product of elements less than 13: " + product_of_numbers_less_than_13);
console.log("------------------------------------------------------------------------------------------------------------------------------------------");
arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
var three_random_elements = arr.random(3);
console.log("Here's a three random elements: " + three_random_elements);
console.log("------------------------------------------------------------------------------------------------------------------------------------------");
arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
var shuffle = arr.shuffle();
console.log("Here's the array after it got shuffled: " + shuffle);
console.log("------------------------------------------------------------------------------------------------------------------------------------------");
arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
console.log("Is the original array sorted? " + arr.is_sorted());
console.log("------------------------------------------------------------------------------------------------------------------------------------------");
arr = EnhancedArray.generate_random(1, 10, 5, false, true);
console.log("An array with random numbers: " + arr);
console.log("------------------------------------------------------------------------------------------------------------------------------------------");
arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
console.log("The index of (11) is: " + arr.binary_search(11));
console.log("------------------------------------------------------------------------------------------------------------------------------------------");
arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
console.log("Is the array equal to ['2', 4, '7', 11, 13, '16', '19'] ? " + arr.equals([2, 4, 7, 11, 13, 16, 19], false));
console.log("------------------------------------------------------------------------------------------------------------------------------------------");
arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
arr = arr.pad(10, 1);
console.log("The original array after padding it to 10 elements with value 1 is: " + arr);
console.log("------------------------------------------------------------------------------------------------------------------------------------------");
arr = new EnhancedArray(2, 2, 2, 3, 3, 4);
var distinct = arr.distinct();
console.log("The distinct values in array [2, 2, 2, 3, 3, 4] are: " + distinct);
console.log("------------------------------------------------------------------------------------------------------------------------------------------");
arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
var min = arr.min(function (element) {
  return element % 2 === 1;
});
console.log("The smallest odd number is: " + min);
console.log("------------------------------------------------------------------------------------------------------------------------------------------");
arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
var max = arr.max(function (element) {
  return element % 2 === 0;
});
console.log("The biggest even number is: " + max);
console.log("------------------------------------------------------------------------------------------------------------------------------------------");
arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
console.log("The difference between the smallest and biggest number is: " + arr.get_range());
console.log("------------------------------------------------------------------------------------------------------------------------------------------");
arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
console.log("The median element is: " + arr.get_median());
console.log("------------------------------------------------------------------------------------------------------------------------------------------");
arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
console.log("The average is: " + arr.get_average());