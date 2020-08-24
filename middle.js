const assertArraysEqual = require("./assertArraysEqual")

const middle = function(givenArr) {
  const catchArr = [];
  const arrlength = givenArr.length;
  const magicNum = arrlength / 2;
  if (arrlength > 2) {
    if (magicNum === Math.floor(magicNum)) {
      catchArr.push(givenArr[magicNum - 1]);
      catchArr.push(givenArr[magicNum]);
    } else if (magicNum > Math.floor(magicNum)) {
      catchArr.push(givenArr[Math.floor(magicNum)]);
    }
  }
  return catchArr;
};

module.exports = middle;





