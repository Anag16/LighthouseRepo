
/*const head = require('../head');
const assertEqual = require('../assertEqual');*/


/* TEST CODE " We will not longer use this, since we have our Chai Test Framework"

assertEqual(head([5,6,7]), 5)
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  */


const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(head([1, 2, 3]), 1);
  });
});


describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(head([1, 2, 3]), 1);
  });
});



