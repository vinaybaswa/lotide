const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([4, 9, 6]), 4); // pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //pass
assertEqual(head([]), 0); //fail
assertEqual(head(["milk"]), "coffee"); //fail