// Write a function that returns the first repeating element in an array.
// If no element repeats, return null.
const arr=[1,2,,2,4,3,4,,5,3,5]
const repeatingElement=(arr)=>{

const newSet= new Set()
for(let item of arr){
    if(newSet.has(item)){
        return item
    }
    newSet.add(item)
}

}


console.log(repeatingElement(arr))