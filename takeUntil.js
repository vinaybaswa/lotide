const takeUntil = function(array, callback) {
  const sliced = [];
  for (const elem of array) {
    if (callback(elem) === false) {
      sliced.push(elem);
    } else if (callback(elem) === true) {
      return sliced;
    }
  }
};

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
 

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log(takeUntil(["Lighthouse", " ", "Labs"], x => x === " "))

/* Results
[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/

// Test
assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
assertArraysEqual(takeUntil(["Lighthouse", " ", "Labs"], x => x === " "), ["labs"]);
assertArraysEqual(takeUntil([1, "Lighthouse", 3], x => x === 3), [1, "Lighthouse"]);