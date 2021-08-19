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


let letterPosiitions = function(sentence){
let results = {};
let numberOfCharacters = sentence.length;
let letters = [];


for (let i = 0; i < numberOfCharacters; i++){
	if(sentence.charAt(i) !== " "){    // charAt extracts letters from a string
  	letters.push(sentence.charAt(i));  // push adds an element to an array
  }
}

let counter = 0;
for (let letter of letters){
  //Check if key [letter] exists in results object. 
  if (results[letter]){
    results[letter].push(counter); //If it already exists, push a value to the array.
  }
  else{
    results[letter] = [counter] //If it does not exist, create an array for that key with one element.
  }
  counter++; // Increase the counter before the next loop.
}


return results;

}
assertArraysEqual(letterPosiitions("Moons and mornings").o , [1,2,9]); //The same as results.o   ///     o is the key 
assertArraysEqual(letterPosiitions("Milkshakes are better than smoothies").k, [3,7]);