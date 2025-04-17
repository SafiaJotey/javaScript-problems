// const  anagramChecker=(str1,str2)=>{
// const cleaned=(str)=>str.toLowerCase().replace([/[^a-z]/g],'').split('').sort().join('')
// return cleaned(str1)===cleaned(str2)
// }
const  anagramChecker=(str1,str2)=>{
   if(str1.length!==str2.length) return false;
   let charCount={}
   for(char of str1.toLowerCase()){
    charCount[char]=(charCount[char]||0)+1
   } 
   for (char of str2.toLowerCase()){
    if(!charCount[char]) return false;
    charCount[charCount]--;
   }
return true
    }
console.log(anagramChecker("listen", "silent") )// => true
 console.log(anagramChecker("hello", "world")  )// => false