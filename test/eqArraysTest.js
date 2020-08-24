const assertEqual = require("../assertEqual")
const eqArrays = require("../eqArrays")

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, "2", 3]), false);
assertEqual(eqArrays(["Lighthouse", "Labs", "Bootcamp"], ["Lighthouse", "Labs", "Bootcamp"]), true);
assertEqual(eqArrays([1, "Lighthouse", 3], [1, 2, 3]), false);
assertEqual(eqArrays([], [2]), false);
assertEqual(eqArrays([], ["1", "2", 3]), false);