// function search(array, item) {
//   let index = null; // 1

//   for (
//     let i = 0; // 1
//     i < array.length; // n + 1
//     i++ // n
//     ) {
//     if (item === array[i]) { // n
//       index = i; // only happens once if found, so not counting for worst case
//       break;
//     }
//   }

//   return index; // 1
// }



// Binary search

// function search(array, item) {
//   let min = 0; // 1
//   let max = array.length - 1; // 1

//   while (true) { // lg n
//     const endIndex = min + max; // lg n
//     const middleDecimal = endIndex/2.0; // lg n
//     const middleIndex = Math.floor(middleDecimal); // lg n

//     const currentItem = array[middleIndex]; // lg n

//     if (currentItem === item) { // lg n
//       return middleIndex;
//     } else if (currentItem < item) { // lg n
//       min = middleIndex + 1;
//     } else {
//       max = middleIndex - 1; // lg n
//     }

//     if (min > max) { // lg n
//       return null; // 1
//     }
//   }
// }



// Linear Search function
function search(array, item) {
  let index = null;

  for (let i = 0; i < array.length; i++) {
    if (item === array[i]) {
      index = i;
      break;
    }
  }

  return index;
}


//THE BEST OPTION IS THE BINARY SEARCH

//Let's refactor our search algorithm to use binary search:

function search(array, item) {
  let min = 0;
  let max = array.length - 1;

  while (true) {
    const middleIndex = Math.floor((min + max)/2.0);
    const currentItem = array[middleIndex];

    if (currentItem === item) {
      // Found it
      return middleIndex;
    } else if (currentItem < item) {
      // Look at the right side
      min = middleIndex + 1;
    } else {
      // Look at the left side
      max = middleIndex - 1;
    }

    if (min > max) {
      return null;
    }
  }
}

search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -1);
