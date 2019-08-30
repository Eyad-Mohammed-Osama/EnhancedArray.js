let EnhancedArray = null;
const VersionInfo = process.versions.node.split(".", 3);
const major = VersionInfo[0];
const minor = VersionInfo[1];
const patch = VersionInfo[2];

if (major >= "6" && minor >= "4" && patch >= "0") { // The minimum version of node that support ES6 classes and spread is 6.4.0
    EnhancedArray = require("./src/EnhancedArray");
}
else {
    EnhancedArray = require("./lib/EnhancedArray");
}

module.exports = EnhancedArray;