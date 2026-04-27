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

// Basic Operations
// 1. set(key, value) - Add/Update entries
const map = new Map();

// Adding entries
map.set('name', 'Alice');
map.set('age', 25);
map.set(100, 'hundred');
map.set(true, 'boolean key');

// Chaining (returns the Map object)
map.set('city', 'Paris')
   .set('country', 'France')
   .set('zip', 75001);

console.log(map);
// Map(7) {'name' => 'Alice', 'age' => 25, 100 => 'hundred', true => 'boolean key', 'city' => 'Paris', …}


// 2. get(key) - Retrieve values
console.log(map.get('name'));     // 'Alice'
console.log(map.get('age'));      // 25
console.log(map.get(100));        // 'hundred'
console.log(map.get(true));       // 'boolean key'
console.log(map.get('notExist')); // undefined


// 3. has(key) - Check existence
console.log(map.has('name'));     // true
console.log(map.has('address'));  // false
console.log(map.has(100));        // true

// 4. delete(key) - Remove entry


const d1= map.delete('age');
console.log(d1)// true
console.log(map.has('age'));  // false
console.log(map.size);        // Size decreased by 1

// Returns boolean
const deleted = map.delete('notExist');
console.log(deleted);  // false



// 5. clear() - Remove all entries
map.clear();
console.log(map.size);  // 0
console.log(map);       // Map(0) {}






// 6. size - Get number of entries (property, not method)

const fruits = new Map([
  ['apple', 5],
  ['banana', 3],
  ['orange', 7]
]);

console.log(fruits.size);  // 3

// Iterating Over Maps
