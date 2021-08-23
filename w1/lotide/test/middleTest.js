const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');

//test code//******* */

assertEqual(eqArrays(middle([2,5,4,7,7]), [4]), true);
assertEqual(eqArrays(middle(["A","B","C","E","F"]), ["C"]), true);
assertEqual(eqArrays(middle(["A","B","J","J","F", "Z"]), ["J", "J"]), true);
assertEqual(eqArrays(middle([2,"A"]), []), true);
assertEqual(eqArrays(middle([2,5,4]), [5]), true);
