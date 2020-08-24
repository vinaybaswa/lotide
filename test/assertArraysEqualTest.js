const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1, 2, 3], [1, 2, 3]), true; // => should PASS
assertArraysEqual([1, 2, 3], [1, "2", 3]), true; // => should FAIL
assertArraysEqual(["Lighthouse", "Labs", "Bootcamp"], ["Lighthouse", "Labs", "Bootcamp"]), true; // => should PASS
assertArraysEqual([1, "Lighthouse", 3], [1, 2, 3]), true; // => should FAIL