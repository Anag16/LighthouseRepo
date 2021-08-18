const raisinAlarm = function (cookie) {
  // Put your solution here
  let count = 0;

  for (let key of cookie) {
    // console.log(key);
    if (key === "🍇") {
      count++;
      console.log("Raisin alert!");
    } else {
      console.log("All good");
    }
  }
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log("---");
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log("---");
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

////////// 2da solucion

const raisinAlarm = function (cookie) {
  // Put your solution here
  for (let i = 0; i < cookie.length; i++) {
    if (cookie[i] === "🍇") {
      console.log("Raisin alert");
    } else {
      console.log("All good");
    }
  }
  // let count = 0;

  // for (let key of cookie) {
  //   // console.log(key);
  //   if (key === "🍇") {
  //     count++;
  //     console.log("Raisin alert!");
  //   } else {
  //     console.log("All good");
  //   }
  // }
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log("---");
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log("---");
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));