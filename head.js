const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const head = array => {
  return array.shift(0);
};

// Test
assertEqual(head([4, 9, 6]), 4);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 0);
assertEqual(head(["milk"]), "coffee");
