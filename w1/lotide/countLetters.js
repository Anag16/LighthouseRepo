// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
    
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const countOnly = function(allItems) {
  const results = {};
  for (const item of allItems) {     // for .. of is used for arrays and objects.
      // results[item] is undefined if the key does not exist. Undefined is a falsy value. True if it exists.
      if (results[item]) {         // item is the key of the object . objects is results {}
        results[item] += 1;
      } else {
        results[item] = 1;
      }
  }
  return results;
};

let countLetters = function(text){
let numberOfCharacters = text.length;
let letters = [];
/* let uniqueLetters = []; */

for (let i = 0; i < numberOfCharacters; i++){
	if(text.charAt(i) !== " "){    // charAt extracts letters from a string
  	letters.push(text.charAt(i));  // push adds an element to an array
  }
}

let result = countOnly(letters);
return result;

}
console.log(countLetters("Moons and mornings"));
console.log(countLetters("Milkshakes are better than smoothies"));
/* console.log(countLetters("Ana is eating chips ")); */