"use strict";

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var EnhancedArray = require("../EnhancedArray.js");

function ConstructorTest() {
  console.log("===== Start of constructor tests =====");
  var arr;
  arr = new EnhancedArray(); // Zero-length uninitialized array

  console.log("Our array is: " + arr);
  arr = new EnhancedArray(10); // Uninitialized array that contains 10 elements

  console.log("Our array is: " + arr);
  arr = new EnhancedArray(2, 4, 7, 11, 13, 16, 19); // An array built from [2, 4, 7, 11, 13, 16, 19]

  console.log("Our array is: " + arr);
  arr = _construct(EnhancedArray, [2, 4, 7, 11, 13, 16, 19]);
  console.log("Our array is: " + arr);
  console.log("===== End of constructor tests =====");
  console.log("\n\n\n");
}

module.exports = ConstructorTest;