// Write a function that counts the occurrences of each character in a string.


const str="hello world"
const charOccurance=(str1)=>{
const uniqueStr=new Set(str);
const result={}

uniqueStr.forEach(str=>{

     result[str]=str1.split(str).length-1

})
return result;
}
console.log(charOccurance(str))