function avg(arr){
return arr.reduce((sum, current)=>sum+current,0)/arr.length
}
console.log(avg([1,3,4,2,5]))