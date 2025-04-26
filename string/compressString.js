function compressString(str) {
  let compressed = '';
  let count = 1;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compressed += str[i] + count;
      count = 1;
    }
  }
  
  return compressed;
}
  // Example:

  console.log( compressString("aaabbbcc") ) ; // => "a3b3c2"    
  console.log( compressString("abc")  )// => "abc" (since compression doesn't help)