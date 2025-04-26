const firstNonRepeating=(str)=>{
let charCount={}
for(char of str){
    charCount[char]=(charCount[char]||0)+1
}
for(char of str){
  if(  charCount[char]===1) return char;
}
return null
}

console.log(firstNonRepeating("bbayyiaiinkjlk"))