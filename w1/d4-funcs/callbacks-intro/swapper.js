// ACTUAL FUNCTION
const swapper = function(key1, object1, key2, object2) {
  console.log('Swap!');

  const swap = x => x;
  object2[key2] = swap(object1[key1], object1[key1] = object2[key2]);

  // print the object after swapping
  console.log('object1: ', object1);
  console.log('object2: ', object2);
};

swapper('a', { a: 1 , b: 2, c: 3 }, 'c', { a: 4, b: 3, c: 5 });
swapper('b', { a: 8 , b: 7, c: 6 }, 'd', { a: 5, b: 1, c: 2, d: 12});
swapper('c', { a: 1 , b: 3, c: 3, d: 7 }, 'c', { a: 4, b: 0, c: 5 });