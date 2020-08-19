const assertArraysEqual = function (array1, array2) {
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

const without = function (array1, array2) {
  filteredArray = [];
  for (let i = 0; i < array1.length; i++) {
    let j = i;
    array1[i] !== array2[j] ? filteredArray.push(array1[i]) : null;
  }
  console.log(filteredArray);
};

// Test
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
without(["hello", "world", "lighthouse"], [1, 2, "lighthouse"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


