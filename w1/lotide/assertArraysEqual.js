// FUNCTION IMPLEMENTATION

const assertArraysEqual = function(actual, expected) {
  if (actual.length === expected.length) {
    for (let i = 0; i < expected.length; i++) {
      if (actual[i] !== expected[i]) {
        console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
        return false;
      }
    }
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
    return false;
  }
  console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  return true;
};

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], [1, "2", "3"]); // => false
