// The second argument/parameter is expected to be a (callback) function
const findWaldo = (names, found) => {                 //this is my forEach
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
    found(name, i);   // execute callback
  }

  //firstNames.forEach(name => console.log(name)); refacted function
};


const firstNames = ["Alice", "Bob", "Waldo", "Winston","Jeriel"];

findWaldo(firstNames, (name, index) => console.log("found " + name , "in index # " + index));
