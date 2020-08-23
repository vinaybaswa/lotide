const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = array => { return array.shift(0) };

// Test
assertEqual(head([4, 9, 6]), 4); // pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //pass
assertEqual(head([]), 0); //fail
assertEqual(head(["milk"]), "coffee"); //fail
