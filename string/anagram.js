const  anagramChecker=(str1,str2)=>{
    const cleaned=(str)=>str.toLowerCase().replace(/[^a-z]/g,'').split('').sort().join('')
    return cleaned(str1)===cleaned(str2)
}
console.log(anagramChecker("listen", "silent") )// => true
 console.log(anagramChecker("hello", "world")  )// => false