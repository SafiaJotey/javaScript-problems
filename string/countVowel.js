const countVowel=(str)=>{

    return str.match(/[aeiou]/ig).length

}
console.log(countVowel('asde'))


// Breakdown:
// / ... /: Delimiters for the regular expression.

// [aeiou]: A character class that matches any one vowel:

// a, e, i, o, or u.

// i: The case-insensitive flag — it will match both uppercase and lowercase vowels (A, E, I, O, U).

// g: The global flag — it will match all occurrences in the string, not just the first one.

