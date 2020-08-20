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

const eqArrays = function (arrayOne, arrayTwo) {
  if (arrayOne.length === arrayTwo.length) {
    let trueArray = [];
    for (let i = 0; i < arrayOne.length; i++) {
      let j = i;
      arrayOne[i] === arrayTwo[j] ? trueArray.push(true) : null;
    }

    if (trueArray.length === arrayOne.length) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
}

const results1 = map(words, word => word[0]);

// test
eqArrays(map([words], word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
eqArrays(map(["I", "love", "coding"], word => word[0]), ["I", "l", "c"]);
eqArrays(map(["Lighthouse", "Labs", "Bootcamp"], word => word[0]), ["L", "L", "B"]);
eqArrays(map(["Lighthouse", "Labs", "Bootcamp"], word => word[0]), [1, 2, 3]);

// Test
assertArraysEqual(map([words], word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(["I", "love", "coding"], word => word[0]), ["I", "l", "c"]);
assertArraysEqual(map(["Lighthouse", "Labs", "Bootcamp"], word => word[0]), ["L", "L", "B"]);
assertArraysEqual(map(["Lighthouse", "Labs", "Bootcamp"], word => word[0]), [1, 2, 3]);
assertArraysEqual(map([], word => word[0]), [1]);