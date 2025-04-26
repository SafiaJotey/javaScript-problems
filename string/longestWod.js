
//with reduce
const longestWordBulitin=(str)=>{
return str.split(/\s+/).reduce((longest,current)=>current.length>longest.length?current:longest,'')
}

const longestWordManual=(str)=>{
let longest='';
let cleaned= str.split(/\s+/);

for(word of cleaned){
  
   if(word.length >= longest.length){
      longest=word
   }
}
return longest
}
       
    

console.log(longestWordBulitin("hi I am      Jotey"))
console.log(longestWordManual("hi I am      Jotey"))

// Explanation:
// / ... /: Denotes the regular expression.

// \s: Matches any whitespace character. This includes:

// Space ( )

// Tab (\t)

// Newline (\n)

// Carriage return (\r)

// Vertical tab (\v)

// Form feed (\f)

// +: Quantifier meaning "one or more" of the preceding token.

// So, /\s+/ matches:
// One or more consecutive whitespace characters.