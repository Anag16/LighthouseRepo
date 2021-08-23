const findKey = function(obj, callback) {
  let result;

  //Check each element in the array.
  for (let item in obj) {
    let condition = callback(obj[item]); //Check the condition. callback returns true or false.
    if (condition) {
      return item; //Return the key if the condition is true.
    }
  }
  return undefined;  //If we get here, nothing was found. Return undefined.
};


/*Si, solo que en la funcion vas a reemplazar en los if que en lugar de regresar una array de resultados, regrese la KEY del elemento :v La cosa es que eso es un objecto, y en los values tiene otro objeto. https://jsfiddle.net/bvm4n3t7/23/ En las for loops de los objetos, ítem es la key.
object[item] vendría siendo el value.
Porque es como decir, por ejemplo,  Ana["age"] Entonces eso es lo que pasas al callback*/
  
  
let results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

let results2 = findKey({
  "Ana": { age: 22 },
  "Jeriel":   { age: 24 },
  "Messi":      { age: 34 },
  "Arjona":   { age: 60 },
  "Daniel":       { age: 70 },
  "Isa":  { age: 11 }
}, x => x.age === 60); // => "Arjona"

let results3 = findKey({
  "Canada": 80,
  "Nicaragua":   65,
  "Mexico":     70,
  "Colombia":   72
}, x => x === 70); // => "Mexico"


console.log(results1);
console.log(results2);
console.log(results3);
  
module.exports = findKey;