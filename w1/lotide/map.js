const shopping = (quantityBlouses, processThePrice)=> {
  let price = (quantityBlouses * 10);
  const text = processThePrice(price);
  const output = `${text}... You got ${quantityBlouses} and paid ${price}`;
  console.log(output);
  return output;
  
};

let calculatePrice = function(ThePrice) {
  if (ThePrice > 300) {
    return "Wow, you spent a lot";
  } else {
    return "Nice, that is a good deal";
  }
};

shopping(100, calculatePrice);
shopping(8, calculatePrice);
shopping(3, calculatePrice);
 


module.exports = shopping;