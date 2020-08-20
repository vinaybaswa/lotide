const assertArraysEqual = function(source, result) {
  if (source.length === result.length) {
    let trueArray = [];
    for (let i = 0; i < source.length; i++) {
      let j = i;
      source[i] === result[j] ? trueArray.push(true) : null;
    }
    if (trueArray.length === source.length) {
      console.log(`✅✅✅ Assertion Passed: ${source} === ${result}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${source} !== ${result}`);
    }
  }
};
  

// Test
assertArraysEqual([1, 2, 3], [1, 2, 3]), true; // => should PASS
assertArraysEqual([1, 2, 3], [1, "2", 3]), true; // => should FAIL
assertArraysEqual(["Lighthouse", "Labs", "Bootcamp"], ["Lighthouse", "Labs", "Bootcamp"]), true; // => should PASS
assertArraysEqual([1, "Lighthouse", 3], [1, 2, 3]), true; // => should FAIL