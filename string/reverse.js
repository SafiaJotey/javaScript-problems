

const reverseStringBuiltin=(str)=>{
return str.split('').reverse().join('')
}

const reverseStringManual=(str)=>{
let reversedStr=[]
for(i=str.length-1; i>=0; i--){
    reversedStr.push(str[i])
}
return reversedStr.join('')
    }
console.log(reverseStringManual("hello"))
console.log(reverseStringBuiltin("hello"))