function findMaxManual(arr) {
   let max=0;
   for(item of arr){
    if(item>max){
        max=item
    }
   }
   return max
  }
  function findMaxBuiltin(arr) {
  return arr.reduce((max, current)=>max>current?max:current,0)
   }
  console.log(findMaxManual([5, 2, 9, 1,15,0]))
  console.log(findMaxBuiltin([5, 2, 9, 1,15,0]))
  // Example: findMax([5, 2, 9, 1]) → 9