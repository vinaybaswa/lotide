const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function (array1, array2) {
  if (array1.length === array2.length) {
    let trueArray = [];
    for (let i = 0; i < array1.length; i++) {
      let j = i;
      array1[i] === array2[j] ? trueArray.push(true) : null;
    }
    return trueArray.length === array1.length;
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