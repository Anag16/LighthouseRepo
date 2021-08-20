const takeUntil = function(array, callback) {
  let result = [];

  //Check each element in the array.
  for (let item of array) {
    let condition = callback(item); //Check the condition. callback returns true or false.
    if (!condition) {
      result.push(item); //If truth, add it to the results.
    } else {
      break; //If false, break the for loop.
    }
  }

  return result; //Return the saved elements.
};

  
  
const icreamFLavours = ["Vanilla", "Chocolate", "Strawberry","Caramel","Blueberry","Mango","Pinneaple"];
const numbers = [1,2,3,4,5,6,7,8,9,10];

//This gets its value from takeUntil(). The takeUntil takes two arguments.
//The first argument is the array, the second is a function that returns true or false
const results1 = takeUntil(icreamFLavours, x => x === "Blueberry");
const results2 = takeUntil(numbers, x => x > 6);
  
console.log(results1);
console.log(results2);
  
  