
const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');

/*test cod

assertEqual(eqArrays(middle([2,5,4,7,7]), [4]), true);
assertEqual(eqArrays(middle(["A","B","C","E","F"]), ["C"]), true);
assertEqual(eqArrays(middle(["A","B","J","J","F", "Z"]), ["J", "J"]), true);
assertEqual(eqArrays(middle([2,"A"]), []), true);
assertEqual(eqArrays(middle([2,5,4]), [5]), true);*/




describe("#middle", () => {
  it("returns true for [2,5,4,7,7]), [4]", () => {
    assert.deepEqual(assertEqual(eqArrays(middle([2,5,4,7,7]), [4]), true));
  });

  it("returns true for ['A','B','C','E','F']), ['C']", () => {
    assert.deepEqual(assertEqual(eqArrays(middle(['A','B','C','E','F']), ['C']), true));
  });

  it("returns true for([2,5,4]), [5])", () => {
    assert.deepEqual(assertEqual(eqArrays(middle([2,5,4]), [5]), true));
  });



});
