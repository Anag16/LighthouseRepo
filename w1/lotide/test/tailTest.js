const tail = require('../tail');
const assertEqual = require('../assertEqual');




//Test code//
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);
