// Write a function that counts the occurrences of each character in a string.


const str="hello world"
const charOccurance=(str1)=>{
     let count={}
     new Set(str1).forEach(item=>{
          count[item]=str1.split(item).length-1
     })
     return count
}
console.log(charOccurance(str))