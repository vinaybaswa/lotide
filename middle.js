const assertArraysEqual = require("./assertArraysEqual")

const middle = function(givenArr) {
  const catchArr = [];
  const magicNum = givenArr.length / 2;
  if (givenArr.length > 2) {
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





