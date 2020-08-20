
const eqArrays = function(arrayOne, arrayTwo) {
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
console.log(eqArrays(keysArr, ['h', 'e', 'l', 'o']));
console.log(eqArrays(valuesArr[0], ["0"]));
console.log(eqArrays(valuesArr[1], "1"));
console.log(eqArrays(valuesArr[2], ["2", "3"]));
console.log(eqArrays(valuesArr[3], ["4"]));

assertArraysEqual(keysArr, ['h', 'e', 'l', 'o']);
assertArraysEqual(valuesArr[0], ["0"]);
assertArraysEqual(valuesArr[1], "1");
assertArraysEqual(valuesArr[2], ["2", "3"]);
assertArraysEqual(valuesArr[3], ["4"]);

assertArraysEqual(letterPositions("hello").e, ["1"]);
