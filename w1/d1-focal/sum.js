const args = process.argv.slice(-2);
// console.log(args);
 
let sum = function(num1, num2) {
  return Number(num1) + Number(num2);
};

console.log(sum(args[0], args[1]));

