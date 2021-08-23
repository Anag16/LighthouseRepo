const assert = require('chai').assert;
const tail = require('../tail');
const assertEqual = require('../assertEqual');




//Test code//
const result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result, ['Lighthouse', 'Labs']);


describe('#Tail', () => {
  it("returns true for,['Hello', 'Lighthouse', 'Labs'] , ['Lighthouse', 'Labs']", () => {
    assert.strictEqual(assertEqual(tail(['Hello', 'Lighthouse', 'Labs']), true));
  });
});