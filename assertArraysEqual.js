const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length === arrTwo.length) {
    for (let i = 0; i < arrOne.length; i++) {
      if (arrOne[i] !== arrTwo[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
};


// Test
assertArraysEqual([1, 2, 3], [1, 2, 3]), true; // => should PASS
assertArraysEqual([1, 2, 3], [1, "2", 3]), true; // => should FAIL
assertArraysEqual(["Lighthouse", "Labs", "Bootcamp"], ["Lighthouse", "Labs", "Bootcamp"]), true; // => should PASS
assertArraysEqual([1, "Lighthouse", 3], [1, 2, 3]), true; // => should FAIL