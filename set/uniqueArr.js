// Write a function that removes duplicate values from an array 
 

function uniqueElements(arr){
    return [...new Set(arr)]
}
console.log(uniqueElements([11, 11, 0,2,3,4,2,7])) 