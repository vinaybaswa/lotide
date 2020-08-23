const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  // check if num of keys match
  const numOfMatches = [];
  if (Object.keys(object1).length === Object.keys(object2).length) {
    // iterate and check if values identical keys match
    for (const key1 in object1) {
      for (const key2 in object2) {
        if (key1 === key2 && object1[key1] === object2[key2]) {
          numOfMatches.push(true);
        }
      }
    }
    if (numOfMatches.length === Object.keys(object1).length) {
      return true;
    } 
  } else {
    return false;
  }
  
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => PASS

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), true); // => FAIL
console.log(eqObjects(ab, ba));
