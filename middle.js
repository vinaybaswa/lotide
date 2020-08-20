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

const middle = function (givenArr) {
  //catch array[]
  const catchArr = [];
  const arrlength = givenArr.length;
  // determine if array length is "even" or "odd"
  const magicNum = arrlength / 2;
  if ( arrlength > 2) {
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

// Test
console.log(eqArrays(middle([1]), []));
console.log(eqArrays(middle([1, 2]), []));
console.log(eqArrays(middle([1, 2, 3]), [2]));
console.log(eqArrays(middle([1, 2, 3, 4, 5]), [3]));
console.log(eqArrays(middle([1, 2, 3, 4]), [2, 3]));
console.log(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]));

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);







