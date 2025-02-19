// Write a function that removes duplicate values from an array 
 

function uniqueElements(arr){
    // const uniqueElements=[...new Set(arr)]
    const uniqueElements=Array.from(new Set(arr))
    return uniqueElements;
}
console.log(uniqueElements([11, 11, 0,2,3,4,2,7]))