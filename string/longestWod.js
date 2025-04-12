
//with reduce
// const longestWord=(str)=>{
// return str.split(/\s+/).reduce((longest,current)=>longest.length>current.length?longest:current,"")
// }

const longestWord=(str)=>{
   let words= str.split(/\s+/);
   let longest=''
   for(let word of words){
if(word.length>longest.length) longest=word
    
   }
   return longest
    }
    

console.log(longestWord("hi I am      Jotey"))

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