// Creating a Map(have to use Array of array)
// (method1-1) Empty Map
const map1 = new Map();

//(method1-2) Pre-filled Map/ From array of arrays
const map2 = new Map([
  ['name', 'John'],
  ['age', 30],
  ['city', 'New York']
]);


const map3 = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three']
]);
console.log(map1)