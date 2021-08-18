// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
    
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

/* TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);*/


const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const countries = [
"Argentinna",
"Canada",
"France",
"United Stated",
"China",
"France",
"Japan",
"Canada",
"France",
]

const result1 = countOnly(firstNames, { "Jason": true, "Karina": true, "Fang": true, "Agouhanna": false });
const result2 = countOnly(countries, {"Canada" : true, "Japan": true, "China": false, "France": true});

console.log(result1);
console.log(result2);
/* assertEqual(result1, {"Fang": 2, "Jason": 1}); */