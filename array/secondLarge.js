function secondLarge(arr){
    return [...new Set(arr)].sort((a,b)=>a-b)[1]

}
console.log(secondLarge([7,4,9,6,96,4,0,5]))