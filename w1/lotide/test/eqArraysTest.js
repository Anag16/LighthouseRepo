
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');



// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], [1, "2", "3"]), true); // => false
