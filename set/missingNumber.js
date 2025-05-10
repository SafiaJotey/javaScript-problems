// Find Missing Number

const missing_num=(arr)=>{
    const n = arr.length ;
    const numSet = new Set(arr);
    for (let i = 1; i <= n; i++) {
      if (!numSet.has(i)) return i;
    }
    return null;

}
console.log(missing_num([7,4,1,2,5,8,3]))