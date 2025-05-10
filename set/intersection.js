// Find Intersection of Two Arrays


const arr1 = [1, 2, 3, 4,5, 5];
const arr2 = [3, 4, 5, 6, 7];



//with array
const intersection1=(arr1, arr2)=>{
    const intersectEllements=arr1.filter(item=>arr2.includes(item))
    return intersectEllements 

}

console.log(intersection1(arr1, arr2))

//with set
const intersection2=(arr1, arr2)=>{

  return [...new Set(arr1.filter(element => new Set(arr2).has(element))) ];

}
console.log(intersection2(arr1, arr2))
