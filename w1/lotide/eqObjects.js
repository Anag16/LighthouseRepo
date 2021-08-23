// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
    
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  
  let keysArray1 = Object.keys(object1); //Extracting keys from object and creating an array of keys.
  let valuesArray1 = Object.values(object1);//Extracting values from object and creating an array of values.
  let keysArray2 = Object.keys(object2);//Extracting keys from object and creating an array of keys.
  let valuesArray2 = Object.values(object2);//Extracting values from object and creating an array of values.

  if (keysArray1.length === keysArray2.length) { //Comparing size of the objects
    for (let key of keysArray1) {
    // console.log(`Comparing ${object1[key]} with ${object2[key]}`);
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {    //If the two values are arrays, use the eqArrays function and pass the two arrays as arguments. The eqArrays function returns true if they are equal or false otherwise.
      // console.log("Comparing two arrays");
        return eqArrays(object1[key], object2[key]);
      } else if (!Array.isArray(object1[key]) && !Array.isArray(object2[key])) { //If they are not array, check if BOTH are not arrays.
        if (object1[key] !== object2[key]) { //Comparing values from objects using the keys. Only if they are BOTH NOT ARRAYS.
        // console.log("Comparing two primitive values");
          return false;
        }
      } else { //This means one is an array and the other isn't. They are not equal, return false.
        return false;
      }
    
    }
  } else {
    return false; //Return false if objects do not have the same number of keys. They are obviously different.
  }

  return true; //Return true. If the function gets to this point, the objects are equal.
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false); // => false









//RECURSION EXAMPLE
function counttoZero(number) {
  if (number == 0) {
  	console.log(number);
  	console.log("We found the 0");
  } else {
    console.log(number);
    console.log("Still looking for 0");
    number--;
    counttoZero(number);
  }
}
 
//Uncomment to run
// counttoZero(3);


module.exports = eqObjects;