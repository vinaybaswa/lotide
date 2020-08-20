const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};  

let copyArray;
let tailArray = [];

const tail = fullArray => {
  copyArray = [...fullArray];
  for (let i = 1; i < fullArray.length; i++) {
    tailArray.push(fullArray[i]);
  }
  return tailArray;
};

tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(tailArray.length, copyArray.length - 1);

for (let j = 1; j < copyArray.length; j++) {
  let k = j - 1;
  assertEqual(copyArray[j], tailArray[k]);
}