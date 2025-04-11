const countVowel=(str)=>{

    return str.match(/[aeiou]/ig).length

}
console.log(countVowel('asde'))