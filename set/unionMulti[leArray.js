
// flat used to flat nested array
// const words = ["hello", "world"];
// const result = words.map(word => word.split("")).flat();
// console.log(result);
// flatMap do map+flat
// const words1 = ["hello", "world"];
// const result1 = words1.flatMap(word => word.split(""));
// console.log(result1);



// Union of Multiple Sets
const unionSets = (...sets) => {

   return new Set(sets.map(set=>[...set]).flat())
    // new Set(sets.flatMap(set => [...set]))
};
const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);
const set3 = new Set([5, 6, 7]);
console.log(unionSets(set1,set2,set3))