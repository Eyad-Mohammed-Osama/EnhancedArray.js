"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PossibleMemoryCrash = require("./PossibleMemoryCrash");

var EnhancedArray =
/*#__PURE__*/
function (_Array) {
  _inherits(EnhancedArray, _Array);

  function EnhancedArray() {
    var _getPrototypeOf2;

    _classCallCheck(this, EnhancedArray);

    for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
      parameters[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EnhancedArray)).call.apply(_getPrototypeOf2, [this].concat(parameters)));
  }

  _createClass(EnhancedArray, [{
    key: "intersect",
    value: function intersect(arr) {
      if (!(arr instanceof Array)) {
        return null;
      }

      var result = [];
      var values1 = {};
      var values2 = {};
      var c = 0;

      for (var i = 0; i < this.length; i++) {
        if (values1[this[i]] === undefined) {
          values1[this[i]] = true;
        }
      }

      for (var _i = 0; _i < arr.length; _i++) {
        if (values2[arr[_i]] === undefined) {
          values2[arr[_i]] = true;
        }
      }

      for (var value in values1) {
        if (values2[value] !== undefined) {
          result[c] = value;
          c++;
        }
      }

      if (result.length === 0) {
        return null;
      }

      return _construct(EnhancedArray, result);
    }
  }, {
    key: "union",
    value: function union(arr) {
      if (!(arr instanceof Array)) {
        return null;
      }

      var temp = this.concat(arr);
      var values = {};
      var c = 0;
      var result = [];

      for (var i = 0; i < temp.length; i++) {
        if (values[temp[i]] === undefined) {
          values[temp[i]] = true;
          result[c] = temp[i];
          c++;
        }
      }

      if (result.length === 0) {
        return null;
      }

      return _construct(EnhancedArray, result);
    }
  }, {
    key: "difference",
    value: function difference(arr) {
      if (!(arr instanceof Array)) {
        return null;
      }

      var result = [];
      var values1 = {};
      var values2 = {};
      var c = 0;

      for (var i = 0; i < this.length; i++) {
        if (values1[this[i]] === undefined) {
          values1[this[i]] = true;
        }
      }

      for (var j = 0; j < arr.length; j++) {
        if (values2[arr[j]] === undefined) {
          values2[arr[j]] = true;
        }
      }

      for (var value in values1) {
        if (values2[value] === undefined) {
          result[c] = value;
          c++;
        }
      }

      if (result.length === 0) {
        return null;
      }

      return _construct(EnhancedArray, result);
    }
  }, {
    key: "symmetric_difference",
    value: function symmetric_difference(arr) {
      if (!(arr instanceof Array)) {
        return null;
      }

      var result = [];
      var values1 = {};
      var values2 = {};
      var c = 0;

      for (var i = 0; i < this.length; i++) {
        if (values1[this[i]] === undefined) {
          values1[this[i]] = true;
        }
      }

      for (var _i2 = 0; _i2 < arr.length; _i2++) {
        if (values2[arr[_i2]] === undefined) {
          values2[arr[_i2]] = true;
        }
      }

      for (var value in values1) {
        if (values2[value] === undefined) {
          result[c] = value;
          c++;
        }
      }

      for (var _value in values2) {
        if (values1[_value] === undefined) {
          result[c] = _value;
          c++;
        }
      }

      if (result.length === 0) {
        return null;
      }

      return _construct(EnhancedArray, result);
    }
  }, {
    key: "distinct",
    value: function distinct() {
      var result = [];
      var values = {};
      var c = 0;

      for (var i = 0; i < this.length; i++) {
        if (values[this[i]] === undefined) {
          values[this[i]] = true;
          result[c] = this[i];
          c++;
        }
      }

      if (result.length === 0) {
        return null;
      }

      return _construct(EnhancedArray, result);
    }
  }, {
    key: "count",
    value: function count() {
      var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (predicate === null) {
        return this.length;
      }

      if (typeof predicate !== "function" && !(predicate instanceof Function)) {
        return null;
      }

      var c = 0;

      for (var i = 0; i < this.length; i++) {
        if (predicate(this[i])) {
          c++;
        }
      }

      return c;
    }
  }, {
    key: "find_indices",
    value: function find_indices(predicate) {
      if (typeof predicate !== "function" && !(predicate instanceof Function)) {
        return null;
      }

      var result = [];
      var c = 0;

      for (var i = 0; i < this.length; i++) {
        if (predicate(this[i])) {
          result[c] = i;
          c++;
        }
      }

      if (result.length === 0) {
        return null;
      }

      return _construct(EnhancedArray, result);
    }
  }, {
    key: "pad",
    value: function pad(size, value) {
      if (typeof size !== "number" && !(size instanceof Number) || !Number.isInteger(size)) {
        return null;
      }

      var result = [];
      var c;

      if (size === 0) {
        return this;
      } else if (size > 0) {
        result = this;
        c = this.length;

        for (var i = 0; i <= size - this.length; i++) {
          result[c] = value;
          c++;
        }
      } else {
        c = 0;
        var s = -size - this.length;

        for (var _i3 = 0; _i3 < s; _i3++) {
          result[c] = value;
          c++;
        }

        result = result.concat(this);
      }

      return _construct(EnhancedArray, _toConsumableArray(result));
    }
  }, {
    key: "sum",
    value: function sum() {
      var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var s = 0;

      if (predicate === null) {
        for (var i = 0; i < this.length; i++) {
          s += this[i];
        }
      } else if (typeof predicate !== "function" && !(predicate instanceof Function)) {
        return null;
      } else {
        for (var _i4 = 0; _i4 < this.length; _i4++) {
          if (predicate(this[_i4])) {
            s += this[_i4];
          }
        }
      }

      return s;
    }
  }, {
    key: "product",
    value: function product() {
      var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var p = 1;

      if (predicate === null) {
        for (var i = 0; i < this.length; i++) {
          p *= this[i];
        }
      } else if (typeof predicate !== "function" && !(predicate instanceof Function)) {
        return null;
      } else {
        for (var _i5 = 0; _i5 < this.length; _i5++) {
          if (predicate(this[_i5])) {
            p *= this[_i5];
          }
        }
      }

      return p;
    }
  }, {
    key: "random",
    value: function random() {
      var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      if (count > this.length || count <= 0 || typeof count !== "number" && !(count instanceof Number) && !Number.isInteger(count)) {
        return null;
      }

      var picked;
      var random;

      if (count === 1) {
        random = Math.floor(Math.random() * this.length);
        picked = this[random];
      } else {
        picked = [];
        var c = 0;
        var isPicked = new Array(this.length);
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

      return _construct(EnhancedArray, _toConsumableArray(picked));
    }
  }, {
    key: "shuffle",
    value: function shuffle() {
      var result = [];
      var isPicked = new Array(this.length);
      isPicked.fill(false);
      var c = 0;
      var random;

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

      return _construct(EnhancedArray, result);
    }
  }, {
    key: "is_sorted",
    value: function is_sorted() {
      var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : EnhancedArray.ASCENDING;

      if (mode !== EnhancedArray.ASCENDING && mode !== EnhancedArray.DESCENDING) {
        return null;
      }

      var sorted = true;

      if (mode === EnhancedArray.ASCENDING) {
        for (var i = 0; i < this.length - 1; i++) {
          if (this[i] > this[i + 1]) {
            sorted = false;
            break;
          }
        }
      } else if (mode === EnhancedArray.DESCENDING) {
        for (var _i6 = 0; _i6 < this.length - 1; _i6++) {
          if (this[_i6] < this[_i6 + 1]) {
            sorted = false;
            break;
          }
        }
      }

      return sorted;
    }
  }, {
    key: "binary_search",
    value: function binary_search(value) {
      if (!this.is_sorted(EnhancedArray.ASCENDING) && !this.is_sorted(EnhancedArray.DESCENDING)) {
        return null;
      }

      var sortingMode;

      if (this.is_sorted(EnhancedArray.ASCENDING)) {
        sortingMode = EnhancedArray.ASCENDING;
      } else if (this.is_sorted(EnhancedArray.DESCENDING)) {
        sortingMode = EnhancedArray.DESCENDING;
      }

      var low = 0;
      var high = this.length - 1;
      var mid;

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
  }, {
    key: "equals",
    value: function equals(arr) {
      var strict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!(arr instanceof Array) || typeof strict !== "boolean" && !(strict instanceof Boolean)) {
        return null;
      }

      if (arr.length !== this.length) {
        return false;
      }

      var flag = true;

      if (strict === true) {
        for (var i = 0; i < this.length; i++) {
          if (this[i] === arr[i]) {
            flag = flag && true;
          } else if (this[i] !== arr[i]) {
            flag = flag && false;
            break;
          }
        }
      } else {
        for (var _i7 = 0; _i7 < this.length; _i7++) {
          if (this[_i7] == arr[_i7]) {
            flag = flag && true;
          } else if (this[_i7] != arr[_i7]) {
            flag = flag && false;
            break;
          }
        }
      }

      return flag;
    }
  }, {
    key: "min",
    value: function min() {
      var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var min;

      if (predicate === null) {
        min = this[0];

        for (var i = 1; i < this.length; i++) {
          min = this[i] ^ (min ^ this[i]) & -(min < this[i]);
        }
      } else if (typeof predicate !== "function" && !(predicate instanceof Function)) {
        return null;
      } else {
        for (var _i8 = 0; _i8 < this.length; _i8++) {
          if (predicate(this[_i8])) {
            min = this[_i8];
            break;
          }
        }

        for (var _i9 = 0; _i9 < this.length; _i9++) {
          if (predicate(this[_i9])) {
            min = this[_i9] ^ (min ^ this[_i9]) & -(min < this[_i9]);
          }
        }
      }

      return min;
    }
  }, {
    key: "max",
    value: function max() {
      var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var max;

      if (predicate === null) {
        max = this[0];

        for (var i = 1; i < this.length; i++) {
          max = max ^ (max ^ this[i]) & -(max < this[i]);
        }
      } else if (typeof predicate !== "function" && !(predicate instanceof Function)) {
        return null;
      } else {
        for (var _i10 = 0; _i10 < this.length; _i10++) {
          if (predicate(this[_i10])) {
            max = this[_i10];
            break;
          }
        }

        for (var _i11 = 0; _i11 < this.length; _i11++) {
          if (predicate(this[_i11])) {
            max = max ^ (max ^ this[_i11]) & -(max < this[_i11]);
          }
        }
      }

      return max;
    }
  }, {
    key: "get_range",
    value: function get_range() {
      var min = this.min();
      var max = this.max();
      return max - min;
    }
  }, {
    key: "get_median",
    value: function get_median() {
      var copy = this.sort(function (a, b) {
        return a - b;
      });
      var n = Math.floor(copy.length / 2);

      if (copy.length % 2 === 0) {
        return (copy[n] + copy[n + 1]) / 2;
      } else {
        return copy[n];
      }
    }
  }, {
    key: "get_average",
    value: function get_average() {
      var weights = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var unspecified = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (_typeof(weights) !== "object" || typeof unspecified !== "number" && !(unspecified instanceof Number)) {
        return null;
      }

      var s = 0;
      var sw = 0;

      if (weights === null) {
        sw = this.length;

        for (var i = 0; i < this.length; i++) {
          s += this[i];
        }
      } else {
        for (var _i12 = 0; _i12 < this.length; _i12++) {
          if (typeof weights[this[_i12]] === "undefined") {
            s += this[_i12] * unspecified;
            sw += unspecified;
          } else {
            s += this[_i12] * weights[this[_i12]];
            sw += weights[this[_i12]];
          }
        }
      }

      return s / sw;
    }
  }], [{
    key: "range",
    value: function range(start, end) {
      var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

      if (typeof start !== "number" && !(start instanceof Number) || typeof end !== "number" && !(end instanceof Number) || typeof step !== "number" && !(step instanceof Number)) {
        return null;
      }

      var result = [];
      var c = 0;

      if (start < end) {
        if (step <= 0) {
          throw new PossibleMemoryCrash("PossibleMemoryCrash at Array.range(): 'start'=" + start + " is smaller than 'end'=" + end + ", but 'step'=" + step + " is less than or equal to 0.\nthis could possibly cause memory crash, therefore execution was halted.");
        }

        for (var i = start; i <= end; i += step) {
          result[c] = i;
          c++;
        }
      } else {
        if (step >= 0) {
          throw new PossibleMemoryCrash("PossibleMemoryCrash at Array.range(): 'start'=" + start + " is bigger than or equal to 'end' = " + end + ", but 'step' = " + step + " is bigger than or equal to 0.\nthis could possibly cause memory crash, therefore execution was halted.");
        }

        for (var _i13 = start; _i13 >= end; _i13 += step) {
          result[c] = _i13;
          c++;
        }
      }

      if (result.length === 0) {
        return null;
      }

      return _construct(EnhancedArray, result);
    }
  }, {
    key: "generate_random",
    value: function generate_random(min, max, count) {
      var isInteger = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var containsNegative = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      if (typeof min !== "number" && !(min instanceof Number) || typeof max !== "number" && !(max instanceof Number) || typeof count !== "number" && !(count instanceof Number) && (!Number.isInteger(count) || count <= 0) || typeof isInteger !== "boolean" && !(isInteger instanceof Boolean) || typeof containsNegative !== "boolean" && !(containsNegative instanceof Boolean)) {
        return null;
      }

      var result = [];
      var element;

      for (var i = 0; i < count; i++) {
        element = Math.random() * (max - min) + min;

        if (isInteger) {
          element = Math.floor(element);
        }

        if (containsNegative) {
          var signThreshold = Math.random();

          if (signThreshold < 0.5) {
            element = -element;
          }
        }

        result[i] = element;
      }

      return _construct(EnhancedArray, result);
    }
  }, {
    key: "ASCENDING",
    get: function get() {
      return 1;
    }
  }, {
    key: "DESCENDING",
    get: function get() {
      return 2;
    }
  }]);

  return EnhancedArray;
}(_wrapNativeSuper(Array));

module.exports = EnhancedArray;