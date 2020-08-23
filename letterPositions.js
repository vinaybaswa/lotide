
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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  for (const indX in sentence) {
    if (results[sentence[indX]] === undefined) {
      results[sentence[indX]] = [indX];
    } else {
      results[sentence[indX]].push(indX);
    }
  }
  delete results[" "];
  return results;
};

// test
//letterPositions("lighthouse in the house");
const resultCopy = letterPositions("hello");
const keysArr = Object.keys(resultCopy);
const valuesArr = Object.values(resultCopy);


// Asssertion
assertArraysEqual(keysArr, ['h', 'e', 'l', 'o']);
assertArraysEqual(valuesArr[0], ["0"]);
assertArraysEqual(valuesArr[1], "1");
assertArraysEqual(valuesArr[2], ["2", "3"]);
assertArraysEqual(valuesArr[3], ["4"]);

assertArraysEqual(letterPositions("hello").e, ["1"]);
