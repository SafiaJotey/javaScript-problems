// Find Intersection of Two Arrays


const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];



//with array
const intersection1=(arr1, arr2)=>{
    const intersectEllements=arr1.filter(item=>arr2.includes(item))
    console.log(intersectEllements)

}
intersection1(arr1, arr2)

//with set
const intersection2=(arr1, arr2)=>{

    const intersectEllements=arr1.filter(item=>new Set(arr2).has(item))
    console.log(intersectEllements)

}
intersection2(arr1, arr2)
