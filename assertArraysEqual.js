const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arrayOne, arrayTwo) {
  if (arrayOne.length === arrayTwo.length) {
    let trueArray = [];
    for (let i = 0; i < arrayOne.length; i++) {
      let j = i;
      arrayOne[i] === arrayTwo[j] ? trueArray.push(true) : null;
    }

    if (trueArray.length === arrayOne.length) {
      return true;
    }
  }
  return false;
};


// Test
assertArraysEqual([1, 2, 3], [1, 2, 3]), true; // => should PASS
assertArraysEqual([1, 2, 3], [1, "2", 3]), true; // => should FAIL
assertArraysEqual(["Lighthouse", "Labs", "Bootcamp"], ["Lighthouse", "Labs", "Bootcamp"]), true; // => should PASS
assertArraysEqual([1, "Lighthouse", 3], [1, 2, 3]), true; // => should FAIL