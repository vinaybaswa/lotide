const assertArraysEqual = function(array1, array2) {
  if (array1.length === array2.length) {
    let trueArray = [];
    for (let i = 0; i < array1.length; i++) {
      let j = i;
      array1[i] === array2[j] ? trueArray.push(true) : null;
    }
    if (trueArray.length === array1.length) {
      console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
    }
  }
};
  

// Test
assertArraysEqual([1, 2, 3], [1, 2, 3]), true; // => should PASS
assertArraysEqual([1, 2, 3], [1, "2", 3]), true; // => should FAIL
assertArraysEqual(["Lighthouse", "Labs", "Bootcamp"], ["Lighthouse", "Labs", "Bootcamp"]), true; // => should PASS
assertArraysEqual([1, "Lighthouse", 3], [1, 2, 3]), true; // => should FAIL