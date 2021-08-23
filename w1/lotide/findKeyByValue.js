const findKey = require("./findKey");

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
    
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
};



const findKeyByValue = function(object,value) {

  let keysArray = Object.keys(object);

  let valuesArray = Object.values(object);

  /*console.log(keysArray);
console.log(valuesArray);*/

  let index = valuesArray.indexOf(value);
  return keysArray[index];
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
module.exports = findKeyByValue;