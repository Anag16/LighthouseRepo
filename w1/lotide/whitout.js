// FUNCTION IMPLEMENTATION

const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array2.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

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

const without = function(source,itemsToRemove) {

  let remainingItems = [];

  //Checking each of the elements from the source array.
  for (let i = 0; i < source.length; i++) {
    //Variable to keep control of elements being found.
    let found = false;
    //Looping each element of the itemsToRemove array.
    for (let j = 0; j < itemsToRemove.length; j++) {
      // console.log(`Comparing ${source[i]} with ${itemsToRemove[j]}`);
      if (source[i] === itemsToRemove[j]) {
        //If an element from source is equal to an element from itemsToRemove, set found to TRUE.
        //If not found, nothing changes and found will remain set to FALSE until the end of the for loop.
        found = true;
      }
    }
    // If found is still false after the inner for loop, then it means that it should not be removed. We are still inside the for loop for the source array.
    if (found === false) {
      remainingItems.push(source[i]); //Add the element to the new array.
    }
  }
  return remainingItems; //Return the new array.
};


assertArraysEqual(without(["1", "2", "3"], [4, "5", "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "4"]), ["1", "2", "3"]); // => ["1", "2", "3"]
assertArraysEqual(without(["A", "B", "C"], ["C", 2, "4"]), ["A", "B"]); // => A & B
assertArraysEqual(without(["DOG", "CAT", "MOUSE"], ["CAT", "DOG", "mouse"]), ["MOUSE"]); // => mouse;
