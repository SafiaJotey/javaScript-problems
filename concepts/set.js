//set creation

//create empty and add elements
const emptySet= new Set()
console.log("My Empty set", emptySet)
emptySet.add('el1')
console.log("With one element",emptySet)

//create with values
const set1=new Set(["el1", "el2", "el3"])
console.log("set with intial value",set1)



// Basic operations
set1.add("el4")
console.log("add another unique value",set1)
set1.add("el5","el6")
console.log("add multiple another unique value",set1)
set1.add("el2")
console.log("add duplicate value",set1)
set1.delete("el2")
console.log("Delete el2", set1)
console.log("el2 is in the set",set1.has("el2"))
console.log("el3 is in the set",set1.has("el3"))
console.log("set size",set1.size)//not like this size()
set1.clear()
console.log("clear the set", set1)
console.log("after clearing set size", set1.size)


// 3. Sets Can Store Different Data Types
const mixedSet = new Set();

mixedSet.add(42);              // number
mixedSet.add('hello');         // string
mixedSet.add(true);            // boolean
mixedSet.add(null);            // null
mixedSet.add(undefined);       // undefined
mixedSet.add({ name: 'John' }); // object
mixedSet.add([1, 2, 3]);       // array

console.log(mixedSet.size); // 7

// Note: Objects and array are compared by reference
const obj1 = { id: 1 };
const obj2 = { id: 1 };
mixedSet.add(obj1);
mixedSet.add(obj2); // Both added because different references
mixedSet.add([1,2,3])

console.log(mixedSet.size); // 10
console.log(mixedSet)


//iterate over sets

const numSet=new Set([11,12,13,14,14,15,16,17,18])
console.log(numSet)

for( const num of numSet){
    console.log(num)
}

numSet.forEach((value, key, set)=>{
    console.log( value, key, set)// for set keys are same as values
})
const iterator= numSet.values()
console.log(iterator.next().value,iterator.next().value)


// 5. Converting Between Sets and Arrays

// Array to Set (remove duplicates)
const arr = [1, 2, 2, 3, 4, 4, 5];
const setFromArray = new Set(arr);
console.log(setFromArray); // Set(5) {1, 2, 3, 4, 5}

// Set to Array
const arrFromSet = [...setFromArray];
console.log(arrFromSet); // [1, 2, 3, 4, 5]

// Alternative: Array.from()
const anotherArray = Array.from(setFromArray);
console.log(anotherArray); // [1, 2, 3, 4, 5]

const uniqueArray = [...new Set([1, 2, 2, 3, 3, 4])];
console.log(uniqueArray); // [1, 2, 3, 4]



// some common opperation with set

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

// Union (A ∪ B)
const union = new Set([...setA, ...setB]);
console.log("set union",union); // Set(6) {1, 2, 3, 4, 5, 6}

// Intersection (A ∩ B)
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log("set intersection",intersection); // Set(2) {3, 4}

// Difference (A - B)
const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log("difference",difference); // Set(2) {1, 2}

// Symmetric Difference (A Δ B)
const symmetricDiff = new Set([
    ...[...setA].filter(x => !setB.has(x)),
    ...[...setB].filter(x => !setA.has(x))
]);
console.log("symmetricDiff", symmetricDiff); // Set(4) {1, 2, 5, 6}

// Subset check
const isSubset = (setA, setB) => [...setA].every(x => setB.has(x));
console.log("subset checking",isSubset(new Set([1, 2]), setA)); // true
console.log("subset checking",isSubset(new Set([1, 5]), setA)); // false

// Superset check
const isSuperset = (setA, setB) => [...setB].every(x => setA.has(x));
console.log("Super set checking",isSuperset(setA, new Set([1, 2]))); // true