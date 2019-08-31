const PossibleMemoryCrash = require("./PossibleMemoryCrash");

class EnhancedArray extends Array {
    constructor(...parameters) {
        super(...parameters);
    }

    static get ASCENDING() {
        return 1;
    }

    static get DESCENDING() {
        return 2;
    }

    intersect(arr) {
        let result = [];
        let values1 = {};
        let values2 = {};
        let c = 0;

        for (let i = 0; i < this.length; i++) {
            if (values1[this[i]] === undefined) {
                values1[this[i]] = true;
            }
        }

        for (let i = 0; i < arr.length; i++) {
            if (values2[arr[i]] === undefined) {
                values2[arr[i]] = true;
            }
        }

        for (let value in values1) {
            if (values2[value] !== undefined) {
                result[c] = value;
                c++;
            }
        }

        if (result.length === 0) {
            return null;
        }
        return new EnhancedArray(...result);
    }

    union(arr) {
        let temp = this.concat(arr);
        let values = {};
        let c = 0;
        let result = [];

        for (let i = 0; i < temp.length; i++) {
            if (values[temp[i]] === undefined) {
                values[temp[i]] = true;
                result[c] = temp[i];
                c++;
            }
        }
        if (result.length === 0) {
            return null;
        }
        return new EnhancedArray(...result);
    }

    difference(arr) {
        let result = [];
        let values1 = {};
        let values2 = {};
        let c = 0;
        for (let i = 0; i < this.length; i++) {
            if (values1[this[i]] === undefined) {
                values1[this[i]] = true;
            }
        }

        for (let j = 0; j < arr.length; j++) {
            if (values2[arr[j]] === undefined) {
                values2[arr[j]] = true;
            }
        }


        for (let value in values1) {
            if (values2[value] === undefined) {
                result[c] = value;
                c++;
            }
        }
        if (result.length === 0) {
            return null;
        }
        return new EnhancedArray(...result);
    }

    symmetric_difference(arr) {
        let result = [];
        let values1 = {};
        let values2 = {};
        let c = 0;

        for (let i = 0; i < this.length; i++) {
            if (values1[this[i]] === undefined) {
                values1[this[i]] = true;
            }
        }

        for (let i = 0; i < arr.length; i++) {
            if (values2[arr[i]] === undefined) {
                values2[arr[i]] = true;
            }
        }

        for (let value in values1) {
            if (values2[value] === undefined) {
                result[c] = value;
                c++;
            }
        }

        for (let value in values2) {
            if (values1[value] === undefined) {
                result[c] = value;
                c++;
            }
        }

        if (result.length === 0) {
            return null;
        }
        return new EnhancedArray(...result);
    }

    distinct() {
        let result = [];
        let values = {};
        let c = 0;
        for (let i = 0; i < this.length; i++) {
            if (values[this[i]] === undefined) {
                values[this[i]] = true;
                result[c] = this[i];
                c++;
            }
        }
        if (result.length === 0) {
            return null;
        }
        return new EnhancedArray(...result);
    }

    count(predicate = null) {
        if (predicate === null) {
            return this.length;
        }
        let c = 0;
        for (let i = 0; i < this.length; i++) {
            if (predicate(this[i])) {
                c++;
            }
        }
        return c;
    }

    find_indices(predicate) {
        let result = [];
        let c = 0;
        for (let i = 0; i < this.length; i++) {
            if (predicate(this[i])) {
                result[c] = i;
                c++;
            }
        }
        if (result.length === 0) {
            return null;
        }
        return new EnhancedArray(...result);
    }

    static range(start, end, step = 1) {
        let result = [];
        let c = 0;
        if (start < end) {
            if (step <= 0) {
                throw new PossibleMemoryCrash("PossibleMemoryCrash at Array.range(): 'start'=" + start + " is smaller than 'end'=" + end + ", but 'step'=" + step + " is less than or equal to 0.\nthis could possibly cause memory crash, therefore execution was halted.");
            }
            for (let i = start; i <= end; i += step) {
                result[c] = i;
                c++;
            }
        } 
        else {
            if (step >= 0) {
                throw new PossibleMemoryCrash("PossibleMemoryCrash at Array.range(): 'start'=" + start + " is bigger than or equal to 'end' = " + end + ", but 'step' = " + step + " is bigger than or equal to 0.\nthis could possibly cause memory crash, therefore execution was halted.");
            }
            for (let i = start; i >= end; i += step) {
                result[c] = i;
                c++;
            }
        }
        if (result.length === 0) {
            return null;
        }
        return new EnhancedArray(...result);
    }

    pad(size, value) {
        let result = [];
        let c;
        if (size === 0) {
            return this;
        } 
        else if (size > 0) {
            result = this;
            c = this.length;
            for (let i = 0; i <= (size - this.length); i++) {
                result[c] = value;
                c++;
            }
        } 
        else {
            c = 0;
            let s = -size - this.length;
            for (let i = 0; i < s; i++) {
                result[c] = value;
                c++;
            }
            result = result.concat(this);
        }
        return new EnhancedArray(...result);
    }

    sum(predicate = null) {
        let s = 0;
        if (predicate === null) {
            for (let i = 0; i < this.length; i++) {
                s += this[i];
            }
        } 
        else {
            for (let i = 0; i < this.length; i++) {
                if (predicate(this[i])) {
                    s += this[i];
                }
            }
        }
        return s;
    }

    product(predicate = null) {
        let p = 1;
        if (predicate === null) {
            for (let i = 0; i < this.length; i++) {
                p *= this[i];
            }
        } 
        else {
            for (let i = 0; i < this.length; i++) {
                if (predicate(this[i])) {
                    p *= this[i];
                }
            }
        }
        return p;
    }

    random(count = 1) {
        if (count > this.length) {
            return null;
        }
        let picked;
        let random;
        if (count === 1) {
            random = Math.floor(Math.random() * this.length);
            picked = this[random];
        } 
        else {
            picked = [];
            let c = 0;
            let isPicked = new Array(this.length);
            isPicked.fill(false);
            while (c !== count) {
                random = Math.floor(Math.random() * this.length);
                if (isPicked[random] === true) {
                    continue;
                } else {
                    picked[c] = this[random];
                    isPicked[random] = true;
                    c++;
                }
            }
        }
        return new EnhancedArray(...picked);
    }

    shuffle() {
        let result = [];
        let isPicked = new Array(this.length);
        isPicked.fill(false);
        let c = 0;
        let random;
        while (c !== this.length) {
            random = Math.floor(Math.random() * this.length);
            if (isPicked[random] === true) {
                continue;
            } else {
                result[c] = this[random];
                isPicked[random] = true;
                c++;
            }
        }
        return new EnhancedArray(...result);
    }

    is_sorted(mode = EnhancedArray.ASCENDING) {
        let sorted = true;
        if (mode === EnhancedArray.ASCENDING) {
            for (let i = 0; i < this.length - 1; i++) {
                if (this[i] > this[i + 1]) {
                    sorted = false;
                    break;
                }
            }
        } 
        else if (mode === EnhancedArray.DESCENDING) {
            for (let i = 0; i < this.length - 1; i++) {
                if (this[i] < this[i + 1]) {
                    sorted = false;
                    break;
                }
            }
        }
        return sorted;
    }

    binary_search(value) {
        if (!this.is_sorted(EnhancedArray.ASCENDING) && !this.is_sorted(EnhancedArray.DESCENDING)) {
            return null;
        }
        let sortingMode;
        if (this.is_sorted(EnhancedArray.ASCENDING)) {
            sortingMode = EnhancedArray.ASCENDING;
        } else if (this.is_sorted(EnhancedArray.DESCENDING)) {
            sortingMode = EnhancedArray.DESCENDING;
        }

        let low = 0;
        let high = this.length - 1;
        let mid;
        while (true) {
            if (low > high) {
                break;
            }
            mid = (low + high) / 2;
            if (this[mid] === value) {
                return mid;
            }
            if (sortingMode === EnhancedArray.ASCENDING) {
                if (this[mid] > value) {
                    high = mid - 1;
                }
                if (this[mid] < value) {
                    low = mid + 1;
                }
            } else if (sortingMode === EnhancedArray.DESCENDING) {
                if (this[mid] < value) {
                    high = mid - 1;
                }
                if (this[mid] > value) {
                    low = mid + 1;
                }
            }
        }
        return -1;
    }

    static generate_random(min, max, count, isInteger = false, containsNegative = false) {
        let result = [];
        let element;
        for (let i = 0; i < count; i++) {
            element = Math.random() * (max - min) + min;
            if (isInteger) {
                element = Math.floor(element);
            }
            if (containsNegative) {
                let signThreshold = Math.random();
                if (signThreshold < 0.5) {
                    element = -element;
                }
            }
            result[i] = element;
        }
        return new EnhancedArray(...result);
    }

    equals(arr, strict = false) {
        if (arr.length !== this.length) {
            return false;
        }
        let flag = true;
        if (strict === true) {
            for (let i = 0; i < this.length; i++) {
                if (this[i] === arr[i]) {
                    flag = flag && true;
                }
                else if (this[i] !== arr[i]) {
                    flag = flag && false;
                    break;
                }
            }
        }
        else {
            for (let i = 0; i < this.length; i++) {
                if (this[i] == arr[i]) {
                    flag = flag && true;
                }
                else if (this[i] != arr[i]) {
                    flag = flag && false;
                    break;
                }
            }
        }
        return flag;
    }

    min(predicate = null) {
        let min;
        if (predicate === null) {
            min = this[0];
            for (let i = 1; i < this.length; i++) {
                min = this[i] ^ ((min ^ this[i]) & -(min < this[i]));
            }
        } 
        else {
            for (let i = 0; i < this.length; i++) {
                if (predicate(this[i])) {
                    min = this[i];
                    break;
                }
            }

            for (let i = 0; i < this.length; i++) {
                if (predicate(this[i])) {
                    min = this[i] ^ ((min ^ this[i]) & -(min < this[i]));
                }
            }
        }
        return min;
    }

    max(predicate = null) {
        let max;
        if (predicate === null) {
            max = this[0];
            for (let i = 1; i < this.length; i++) {
                max = max ^ ((max ^ this[i]) & -(max < this[i]));
            }
        } 
        else {
            for (let i = 0; i < this.length; i++) {
                if (predicate(this[i])) {
                    max = this[i];
                    break;
                }
            }

            for (let i = 0; i < this.length; i++) {
                if (predicate(this[i])) {
                    max = max ^ ((max ^ this[i]) & -(max < this[i]));
                }
            }
        }
        return max;
    }

    get_range() {
        let min = this.min();
        let max = this.max();
        return (max - min);
    }

    get_median() {
        let copy = this.sort(function(a, b) {
            return a - b;
        });

        let n = Math.floor(copy.length / 2);
        if (copy.length % 2 === 0) {
            return (copy[n] + copy[n + 1]) / 2;
        } 
        else {
            return copy[n];
        }
    }

    get_average(weights = null, unspecified = 0) {
        let s = 0;
        let sw = 0;
        if (weights === null) {
            sw = this.length;
            for (let i = 0; i < this.length; i++) {
                s += this[i];
            }
        } 
        else {
            for (let i = 0; i < this.length; i++) {
                if (typeof(weights[this[i]]) === "undefined") {
                    s += this[i] * unspecified;
                    sw += unspecified;
                }
                else {
                    s += (this[i] * weights[this[i]]);
                    sw += weights[this[i]];
                }
            }
        }
        return (s / sw);
    }
}

module.exports = EnhancedArray;