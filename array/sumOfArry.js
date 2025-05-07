function sumArrayManual(arr) {
    let sum=0;
    for(item of arr){
        sum+=item
    }
    return sum
  }

  function sumArrayBuildin(arr) {
 
   return arr.reduce((sum, current)=>sum+current,0)
  }
  console.log(sumArrayManual([1,2,3,4,5]))
  console.log(sumArrayBuildin([1,2,3,4]))
  // Example: sumArray([1, 2, 3, 4]) → 10