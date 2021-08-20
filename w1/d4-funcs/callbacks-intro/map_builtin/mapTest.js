/*The array of numbers should be the length of each name in the lighthouses.

Start with the code below:*/


const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

// write code here to use map

let countLetters = lighthouses.map(function(lighthouses) {
  return (lighthouses.length);
});

console.log(countLetters);

// It should output: [ 15, 13, 11, 16, 10, 11, 10 ]
