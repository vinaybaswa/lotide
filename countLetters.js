const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (givenStr) {
  givenStr = givenStr.trim();
  givenStr = givenStr.replace(/\s/g, '');
  const countObj = {};
  for (const charac of givenStr) {
    if (countObj[charac] === undefined) {
      countObj[charac] = 1
    } else {
      countObj[charac]++
    }
  }
  return countObj;
};

const finalCount = countLetters("lighthouse in the house");

// Test
assertEqual(finalCount["h"], 4);
assertEqual(finalCount["l"], 1);
assertEqual(finalCount["g"], 1);
assertEqual(finalCount["e"], 3);