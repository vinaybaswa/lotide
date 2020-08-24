const tail = require("../tail");
const assertEqual = require("../assertEqual")


const fullArray = ["lighthouse", "Labs", "bootcamp"];
assertEqual(tail(fullArray).length, fullArray.length - 1);

for (let j = 1; j < fullArray.length; j++) {
  assertEqual(fullArray[j], tail(fullArray)[j - 1]);
}