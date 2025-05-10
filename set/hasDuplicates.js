// Write a function that checks if an array has duplicate values.
const arr = [1, 2,  3, 4, ,5,5];
const haveDuplicates=(arr)=>{
   if(arr.length!==new Set(arr).size)return true
return false
}
console.log(haveDuplicates(arr))