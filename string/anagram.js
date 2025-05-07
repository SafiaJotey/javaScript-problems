const  anagramCheckerBuildin=(str1,str2)=>{
const cleaned=(str)=>str.toLowerCase().replace([/[^a-z]/g],'').split('').sort().join('')
return cleaned(str1)===cleaned(str2)
}


    const  anagramCheckerManual=(str1,str2)=>{
        if(str1.length!==str2.length) return false;
        let charCount={}
        for(char of str1.toLowerCase()){
           charCount[char]=(charCount[char]||0)+1
        }
        for(char of  str2.toLowerCase()){
           if(!charCount[char]) return false;
           charCount[char]--
        }
       return true
           }
console.log(anagramCheckerManual("listenss", "silssent") )// => true
 console.log(anagramCheckerManual("hello", "world")  )// => false

console.log(anagramCheckerBuildin("listenss", "silssent") )// => true
 console.log(anagramCheckerBuildin("hello", "world")  )// => false