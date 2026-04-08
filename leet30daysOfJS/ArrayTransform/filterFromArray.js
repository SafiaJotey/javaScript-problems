/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filteredArray=[]
    for(let i=0; i<arr.length; i++){
      
        if(fn(arr[i],i)){
            filteredArray.push(arr[i])
        }
    }
    return filteredArray;
};
console.log( filter([-2,-1,0,1,2],function plusOne(n) { return n + 1 }))