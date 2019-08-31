# EnhancedArray.js

## Introduction
A small lightweight javascript library that enhances native arrays

## What's the point from this ?
Nothing really, just wanted to provide some methods that may save time when dealing with arrays.

## Requirements
**EnhancedArray.js** has ZERO production depencdencies.

## Installation
First of all please make sure you have `npm` installed.

Now open your terminal and run this command:

`npm install enhanced-array.js`

## Tests
You can run a quick test to see available capabilities.

In your terminal, execute this command:
`npm run test`

## Usage
After installation you're ready to use the library:

```js
const EnhancedArray = require("enhanced-array.js");
```

**EnhancedArray.js** just extends the native **Array** class, therefore it inherits all its methods and properties which you can find at [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) .


## Supported Properties
In addition to the support of native **Array** properties, the following properties are supported:
- ASCENDING
- DESCENDING

#### ASCENDING
Used with array sorting in ascending mode.

Syntax:
```js
EnhancedArray.ASCENDING
```

#### DESCENDING
Used with array sorting in descending mode.

Syntax:
```js
EnhancedArray.DESCENDING
```

## Supported Methods
In addition to the support of native **Array** methods, the following methods are supported:
- constructor()
- intersect()
- union()
- difference()
- symmetric_difference()
- distinct()
- count()
- find_indices()
- range()
- pad()
- sum()
- product()
- random()
- shuffle()
- is_sorted()
- binary_search()
- generate_random()
- equals()
- min()
- max()
- get_range()
- get_median()
- get_average()


#### constructor()
Instantiate an object of `EnhancedArray` class.

Syntax:

```js
let arr = new EnhancedArray(init?);
```

Parameters:
- **init** (*optional*) : could be an array, a single integer value, you can also use the spread operator here.

Return:
- If empty, it returns a zero length unintialized instance of `EnhancedArray`.
- If a single positive integer value is passed, it returns uninitialized instance of `EnhancedArray` with the specified length.
- If multiple parameters are passed, it returns an instance of `EnhancedArray` that contains those parameters as elements.

Examples:

```js
let arr = new EnhancedArray(); // create an empty array
let arr = new EnhancedArray(7); // create an empty array of 7 elements
let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19); // create an array of elements [2, 4, 7, 11, 13, 16, 19]

let arr = [2, 4, 7, 11, 13, 16, 19]; // create an a normal native array
let enhanced_array = new EnhancedArray(...arr); // then use the spread operator to pass it into an EnhancedArray object
```

#### intersect()
Calculate all the shared elements between two arrays.

Syntax:
```js
let intersection = enhanced_array_instance.intersect(another_array);
```

Parameters:
- **another_array** : the array which you want to intersect with.

Return:
- An instance of `EnhancedArray` that contains the shared elements.

Examples:
```js
let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
let intersection = arr.intersect([4, 8, 16, 13, 17]); // outputs 4, 8, 16, 13
```

#### union()
Calculate all the shared and unshared elements between two arrays.

Syntax:

```js
let union = enhanced_array_instance.union(another_array);
```

Parameters:
- **another_array** : the array which you want to union with.

Return:
- An instance of `EnhancedArray` that contains the shared and unshared elements.

Examples:
```js
let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
let union = arr.union([1, 2, 3, 4, 5]); // outputs [2, 4, 7, 11, 13, 16, 19, 1, 3, 5]
```

#### difference()
Calculate all elements that belongs to the original array but not to the passed array.

Syntax:

```js
let difference = enhanced_array_instance.difference(another_array);
```

Parameters:
- **another_array** : the array which you want to differentiate with.

Return:
- An instance of `EnhancedArray` that contains all elements that belongs to the original array but not to the passed array.

Examples:
```js
let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
let difference = arr.difference([2, 11, 13, 16]); // outputs [4, 7, 19]
```

#### symmetric_difference()
Calculate all elements that belongs to the original array and all elements that belongs to the passed array, but not those elements which belongs to their intersection.

Syntax:

```js
let symmetric_difference = enhanced_array_instance.symmetric_difference(another_array);
```

Parameters:
- **another_array** : the array which you want to get the symmetric difference with.

Return:
- An instance of `EnhancedArray` that contains all elements that belongs to the original array and all elements that belongs to the passed array, but not those elements which belongs to their intersection.


Examples:
```js
let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
let difference = arr.symmetric_difference([1, 2, 4, 11, 13, 17]); // outputs [7, 16, 19, 1, 7]
```

#### distinct()
Calculate all the distinct elements in the original array.

Syntax:

```js
let distinct = enhanced_array_instance.distinct();
```

Parameters:
- None

Return:
- An instance of `EnhancedArray` that contains all distinct elements.

Examples:
```js
let arr = new EnhancedArray(2, 2, 2, 3, 3, 4);
let distinct = arr.distinct(); // outputs [2, 3, 4]
```

#### count()
Count all the elements in the original array that satisfies a specific predicate.

Syntax:
```js
let count = enhanced_array_instance.count(predicate?);
```

Parameters:
- **predicate** (*optional*) : function to apply when counting elements.

Return:
- An integer represents the number of elements.

Examples:
```js
let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
let count;
count = arr.count(); // count all elements, output 7
count = arr.count(function(element) {
  return (element % 2 === 0);
}); // count even elements, return3
```

#### find_indices()
Calculate the indices of all elements that satisfies a specific predicate.

Syntax:
```js
let indices = enhanced_array_instance.find_indices(predicate);
```

Parameters:
- **predicate** : function to apply when iterating over elements.

Return:
- An instance of `EnhancedArray` that contains the indices of the elements.

Examples:
```js
let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
let odd_elements_indices = arr.count(function(element) {
  return (element % 2 === 1);
}); // calculate indices of all odd elements, output [2, 3, 4, 6]
```

#### range() `static`
Returns an array built up from a specific range.

Syntax:
```js
let arr = EnhancedArray.range(start, end, step?); // builds up an array of range [start, end] (inclusive) with a custom step
```

Parameters:
- **start** : a number that specifies the starting point.
- **end** : a number that specifies the ending point.
- **step** (*optional*) : a number that specifies the step, defaults to 1.

Return:
- An instance of `EnhancedArray` that contains the built array.

Examples:
```js
let arr = EnhancedArray.range(0, 10); // output [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arr = EnhancedArray.range(0, 10, 2); // output [0, 2, 4, 6, 8, 10]
```

**Notice** that if `start < end` and `step <= 0` or `start >= end` and `step >= 0`, then this method would throw a `PossibleMemoryCrash` exception to prevent going into infinite loop.

Here's a portion of code to handle such case:
```js
try {
    arr = EnhancedArray.range(0, 10, -1);
}
catch(e) {
    if (e.name === "PossibleMemoryCrash") {
        console.log("Becareful, the declaration inside (try) block caused a PossibleMemoryCrash error");
    }
}
```

#### pad()
Pads an array to the specified length with a specific value.

The behavior of this method is the same of PHP [https://www.php.net/manual/en/function.array-pad.php](array_pad()) function.

Syntax:
```js
let padded = enhanced_array_instance.pad(size, value);
```

Parameters:
- **size** : an integer that specifies the size of the array after padding.
- **value** : the value being used to fill the array after padding it.

Return:
- An instance of `EnhancedArray` that contains the padded array.

Examples:
```js
let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);

let padded;
padded = arr.pad(10, 1); // pad the array to size 10 and append 1 on the right
padded = arr.pad(-20, 4); // pad the array to size 20 and append 4 on the left
```

#### sum()
Calculates the sum of all the elements in the original array that satisfies a specific predicate.

Syntax:
```js
let sum = enhanced_array_instance.sum(predicate?);
```

Parameters:
- **predicate** (*optional*) : a function to apply when calculating the sum.

Return:
- The sum of the elements.

Examples:
```js
let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);

let sum;
sum = arr.sum(); // sum of all elements, output 72
sum = arr.sum(function(element) {
  return (element < 13);
}); // sum of all elements less than 13, return 24
```

#### product()
Calculates the product of all the elements in the original array that satisfies a specific predicate.

Syntax:
```js
let product = enhanced_array_instance.product(predicate?);
```

Parameters:
- **predicate** (*optional*) : a function to apply when calculating the product.

Return:
- The product of the elements.

Examples:
```js
let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);

let product;
product = arr.product(); // product of all elements, output 2434432
product = arr.product(function(element) {
  return (element < 13);
}); // product of all elements less than 13, return 616
```

#### random()
Get an array of random elements from the original array.

Syntax:
```js
let random_elements = enhanced_array_instance.random(count?);
```

Parameters:
- **count** (*optional*) : the number of random elements to retrieve, defaults to 1.

Return:
- If **count** is equal to 1, it returns a single random element.
- If **count** is bigger than 1, it returns an instance of `EnhancedArray` that contains random elements.

Examples:
```js
let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);

let random_elements;
random_elements = arr.random(); // It might output 4, or 13, or something else
random_elements = arr.random(3); // Get 3 random elements, maybe [13, 7, 11] or something else
```

#### shuffle()
Returns a shuffled copy of the original array.

Syntax:
```js
let shuffled = enhanced_array_instance.shuffle();
```

Parameters:
- None.

Return:
- An instance of `EnhancedArray` that contains a shuffled copy of the array.

Examples:
```js
let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
let shuffled = arr.shuffle(); // Outputs something like [4, 16, 7, 13, 19, 11, 2]
```

#### is_sorted()
Checks whether the original array is sorted, either in ascending or descending order.

Syntax:
```js
let is_sorted = enhanced_array_instance.is_sorted(mode?);
```

Parameters:
- **mode** (*optional*) : specifies the sorting mode to check, the following two modes are supported:
  - `EnhancedArray.ASCENDING` : used with ascending sorting, this is the default mode.
  - `EnhancedArray.DESCENDING` : used with descending sorting.

Return:
- Returns `true` if the array is sorted in any of the previous modes, `false` otherwise.

Examples:
```js
let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);

arr.is_sorted(); // output true
arr.is_sorted(EnhancedArray.DESCENDING); // output false
```

#### binary_search()
Performs an iterative binary search on the original array ONLY IF it's sorted.

Syntax:
```js
let index = enhanced_array_instance.binary_search(some_value);
```

Parameters:
- **some_value** : the value to search for.

Return:
- If the array isn't sorted in neither ascending order nor descending order, it returns `null`.
- If the search value doesn't exist, it returns -1.
- If the search value has been found, it returns its index.

Examples:
```js
let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
let index;

index = arr.binary_search(11); // outputs 3
index = arr.binary_search(15); // output -1
```

#### generate_random() `static`
Generate an array of pseudo-random real numbers with approximately uniform distribution.

**Warning:** this method, since it's built using `Math.random()`, **SHOULD NOT** be used to generate cryptographically secure random numbers.

Syntax:
```js
let arr = EnhancedArray.generate_random(min, max, count, isInteger?, containsNegative?);
```

Parameters:
- **min** : a number that denotes the lower limit for the generated numbers, a random number might possibly get this value.
- **max** : a number that denotes the upper limit for the generated numbers, a random number can never get this value.
- **count** : an integer that denotes the length of the array.
- **isInteger** (*optional*) : a boolean value specifies whether the array should only contain integer numbers, defaults to `false`.
- **containsNegative** (*optional*) : a boolean value that specifies whether you want to see some negative numbers, defaults to `false`.

Return:
- An instance of `EnhancedArray` that contains the generated random numbers.

Examples:
```js
let arr;
arr = EnhancedArray.generate_random(1, 10, 5, false, true); // output something like: [-8.852227833260299, -7.19788578197682, 5.868836151370331, -9.651857686957921, -8.999403386571933]
```

#### equals()
Performs a comparison between the original array and the passed array.

Syntax:
```js
let equals = enhanced_array_instance.equals(another_array, strict?);
```

Parameters:
- **another_array** : the array you would like to compare with.
- **strict** (*optional*) : a boolean value that specifies whether strict comparison should happen or not, if you set it to `false` it will compare the elements only using value, if you set it to `true` (default) it will compare the elements using value and type.

Examples:
```js
let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
arr.equals([2, "4", "7", 11, 13, "16", 19]); // output true
arr.equals([2, "4", "7", 11, 13, "16", 19], true); // output false
```

#### min()
Calculates the smallest element in the original array that satisfies a specific predicate.

Syntax:
```js
let min = enhanced_array_instance.min(predicate?);
```

Parameters:
- **predicate** (*optional*) : the function to apply when calculating the smallest element.

Return:
- The smallest element in the array.

Examples:
```js
let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);

arr.min(); // output 2
arr.min(function(element) {
  return (element % 2 === 1);
}); // get the smallest odd number, output 7
```

#### max()
Calculates the biggest element in the original array that satisfies a specific predicate.

Syntax:
```js
let max = enhanced_array_instance.max(predicate?);
```

Parameters:
- **predicate** (*optional*) : the function to apply when calculating the biggest element.

Return:
- The biggest element in the array.

Examples:
```js
let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);

arr.max(); // output 2
arr.max(function(element) {
  return (element % 2 === 0);
}); // get the biggest even number, output 16
```

#### get_range()
Calculates the difference between the biggest and smallest elements in the original array.

Parameters:
- None.

Return:
- A numeric value that represents the range.

Syntax:
```js
let range = enhanced_array_instance.get_range();
```

Example:
```js
let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
arr.get_range(); // outputs 19 - 2 = 17
```

#### get_median()
Calculates the median element in the original array after sorting it.

Syntax:
```js
let median = enhanced_array_instance.get_median();
```

Parameters:
- None.

Return:
- The median element in the array.

Example:
```js
let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
arr.get_median(); // outputs 11
```

#### get_average()
Calculates the average of array elements.

Syntax:
```js
let average = enhanced_array_instance.get_average(weights?, unspecified?);
```

Parameters:
- **weights** (*optional*) : a key-value object that specifies the weight for each entry.
- **unspecified** (*optional*) : a numeric value that will be used as a weight for entries which doesn't have their weights specified in the weights parameter.

Return:
- A numeric value that denotes the average of array elements, if weights parameters was specified then this numeric value denotes the statistical average, otherwise it denotes the arithmetic average.

Examples:
```js
let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
arr.get_average(); // output 10.285714285714286

let weights = {
  2 : 5,
  4 : 1,
  16 : 2
};

arr.get_average(weights, 0); // give (2) weight of (5), and (4) weight of (1), and (16) weight of (2), and give all te others weight of (0), output 5.75
```