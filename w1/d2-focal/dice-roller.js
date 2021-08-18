let diceRoller = function(number) {
  let diceResults = [];

  for (let i = 0; i < number; i ++) {
    diceResults[i] = Math.ceil(Math.random() * 6);
  }
  // Rolled 3 dice: 2, 6, 5
  let resultString = `Rolled ${number} dice: ${joinList(diceResults)}`;
  console.log(resultString);
};

let joinList  = function(list) {
  
  let joinedList = "";

  for (let i = 0; i < list.length; i++) {

    if (i === list.length - 1) {
      joinedList += list[i];
    } else {
      joinedList += list[i] + ", ";
    }
  }
  return joinedList;
};


diceRoller(5);

diceRoller(4);

diceRoller(8);

diceRoller(20);

diceRoller(15);