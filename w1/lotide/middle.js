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


const middle = function(array) {

  let newArray = []; 

    if (array.length < 3){
    }
    else if(array.length % 2 == 0){
       let index1 = (array.length/2) - 1;
       let index2 = (array.length/2);
       
      newArray.push(array[index1],array[index2]);
  }
  else { let index1 = Math.ceil(array.length/2) - 1;
    newArray.push(array[index1]);
  }
     return newArray;
}
/*tEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], [1, "2", "3"]), true); // => false*/

assertEqual(eqArrays(middle([2,5,4,7,7]), [4]), true);
assertEqual(eqArrays(middle(["A","B","C","E","F"]), ["C"]), true);
assertEqual(eqArrays(middle(["A","B","J","J","F", "Z"]), ["J", "J"]), true);
assertEqual(eqArrays(middle([2,"A"]), []), true);
assertEqual(eqArrays(middle([2,5,4]), [5]), true);
