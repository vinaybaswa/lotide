const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const middle = function(givenArr) {
  //catch array[]
  const catchArr = [];
  const arrlength = givenArr.length;
  // determine if array length is "even" or "odd"
  const magicNum = arrlength / 2;
  if (arrlength > 2) {
    //if givenArr length is "even"
    if (magicNum === Math.floor(magicNum)) {
      catchArr.push(givenArr[magicNum - 1]);
      catchArr.push(givenArr[magicNum]);
      //if givenArr length is "odd"
    } else if (magicNum > Math.floor(magicNum)) {
      catchArr.push(givenArr[Math.floor(magicNum)]);
    }
  }
  return catchArr;
};

// Assertion
assertArraysEqual(middle([1]), []); // => ✅✅✅
assertArraysEqual(middle([1, 2]), []); // => ✅✅✅
assertArraysEqual(middle([1, 2, 3]), [2]); // => ✅✅✅
assertArraysEqual(middle([1, 2, 3, 4, 5]), [4]); // => 🛑🛑🛑
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [1, 4]); // => 🛑🛑🛑







