// Write a function that takes a string and returns a new string with only unique characters.



const str = "hello world";

const uniqueString=(str)=>{
    return [...new Set(str)].join('')
    

}
console.log(uniqueString(str))