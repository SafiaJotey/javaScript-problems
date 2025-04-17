// const reverseString=(str)=>{
// return str.split('').reverse().join('')
// }

const reverseString=(str)=>{
let reversedStr=[]
for(let i=str.split('').length-1; i>=0; i--){

    reversedStr.push(str.split('')[i])
}
return reversedStr.join('')
    }
console.log(reverseString("hello"))