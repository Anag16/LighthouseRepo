// FUNCTION IMPLEMENTATION
const middle = function(array) {

  let newArray = [];

  if (array.length < 3) {
  } else if (array.length % 2 === 0) {
    let index1 = (array.length / 2) - 1;
    let index2 = (array.length / 2);
       
    newArray.push(array[index1],array[index2]);
  } else {
    let index1 = Math.ceil(array.length / 2) - 1;
    newArray.push(array[index1]);
  }
  return newArray;
};
/*tEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], [1, "2", "3"]), true); // => false*/
module.exports = middle;
