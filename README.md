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
let arr = new EnhancedArray(); // create an empty array
let arr = new EnhancedArray(length : number?); // create an empty array of specified length
let arr = new EnhancedArray(...items : any); // create an array of elements
```

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
let arr = new EnhancedArray(...elements);
let intersection = arr.intersect(another_array);
```

Examples:
```js
let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
let intersection = arr.intersect([4, 8, 16, 13, 17]); // outputs 4, 8, 16, 13
```

#### union()
Calculate all the shared and unshared elements between two arrays.

Syntax:

```js
let arr = new EnhancedArray(...elements);
let union = arr.union(another_array);
```

Examples:
```js
let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
let union = arr.union([1, 2, 3, 4, 5]); // outputs [2, 4, 7, 11, 13, 16, 19, 1, 3, 5]
```

#### difference()
Calculate all elements that belongs to the original array but not to the passed array.

Syntax:

```js
let arr = new EnhancedArray(...elements);
let difference = arr.difference(another_array);
```

Examples:
```js
let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
let difference = arr.difference([2, 11, 13, 16]); // outputs [4, 7, 19]
```

#### symmetric_difference()
Calculate all elements that belongs to the original array and all elements that belongs to the passed array, but not those elements which belongs to their intersection.

Syntax:

```js
let arr = new EnhancedArray(...elements);
let symmetric_difference = arr.symmetric_difference(another_array);
```

Examples:
```js
let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
let difference = arr.difference([1, 2, 4, 11, 13, 17]); // outputs [7, 16, 19, 1, 7]
```

#### distinct()
Calculate all the distinct elements in the original array.

Syntax:

```js
let arr = new EnhancedArray(...elements);
let distinct = arr.distinct();
```

Examples:
```js
let arr = new EnhancedArray(2, 2, 2, 3, 3, 4);
let distinct = arr.distinct(); // outputs [2, 3, 4]
```

#### count()
Count all the elements in the original array that satisfies a specific predicate.

Syntax:
```js
let arr = new EnhancedArray(...elements);

let count;
count= arr.count(); // count all elements (returns this.length)
count = arr.count(predicate); // count all elements that satisfies the predicate
```

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
let arr = new EnhancedArray(...elements);

let count;
count = arr.find_indices(predicate); // return the indices of all elements that satisfies the predicate
```

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
let arr = EnhancedArray.range(start, end);  // builds up an array of range [start, end] (inclusive) with a step of 1
let arr = EnhancedArray.range(start, end, step); // builds up an array of range [start, end] (inclusive) with a custom step
```

Examples:
```js
let arr = EnhancedArray.range(0, 10); // output [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arr = arr = EnhancedArray.range(0, 10, 2); // output [0, 2, 4, 6, 8, 10]
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
let arr = new EnhancedArray(...elements);

let padded;
padded = arr.pad(size, value);
```

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
let arr = new EnhancedArray(...elements);

let sum;
sum = arr.sum(); // sum all elements 
sum = arr.sum(predicate); // sum of all elements that satisfies the predicate
```

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
let arr = new EnhancedArray(...elements);

let product;
product = arr.product(); // multiply all elements 
product = arr.product(predicate); // product of all elements that satisfies the predicate
```

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
let arr = new EnhancedArray(...elements);

let random_elements;
random_elements = arr.random(); // Get a random element from the array
random_elements = arr.random(n); // Get (n) random elements from the array (where n <= array length)
```

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
let arr = new EnhancedArray(...elements);
let shuffled = arr.shuffle();
```

Examples:
```js
let arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19);
let shuffled = arr.shuffle(); // Outputs something like [4, 16, 7, 13, 19, 11, 2]
```

