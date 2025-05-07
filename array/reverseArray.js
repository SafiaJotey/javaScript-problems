function reverseArrayMannual(arr) {
   let arr1=[];
   for(let i=arr.length-1; i>=0; i--){
    console.log(arr[i])
    arr1.push(arr[i])
   }
   return arr1
  }
  function reverseArraybuildin(arr) {
   
    return arr.reverse()
   }
  console.log( reverseArrayMannual([1, 2, 3, 4]))
  console.log( reverseArraybuildin([1, 2, 3, 4]))
  // Example: reverseArray([1, 2, 3, 4]) → [4, 3, 2, 1]