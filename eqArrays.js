const assertEqual = (actual, expected) => {
  if (actual === expected) {
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

// test
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

// Asssertion
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, "2", 3]), true); // => should FAIL
assertEqual(eqArrays(["Lighthouse", "Labs", "Bootcamp"], ["Lighthouse", "Labs", "Bootcamp"]), true); // => should PASS
assertEqual(eqArrays([1, "Lighthouse", 3], [1, 2, 3]), true); // => should FAIL