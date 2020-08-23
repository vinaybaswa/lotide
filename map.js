const assertArraysEqual = function(actual, expected) {
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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// test
assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]); // should PASS
assertArraysEqual(map(["I", "love", "coding"], word => word[0]), ["I", "l", "c"]); // should PASS
assertArraysEqual(map(["Lighthouse", "Labs", "Bootcamp"], word => word[0]), ["L", "L", "B"]); // should PASS
assertArraysEqual(map(["Lighthouse", "Labs", "Bootcamp"], word => word[0]), [1, 2, 3]); // should FAIL
assertArraysEqual(map([], word => word[0]), [1]);// Should FAIL