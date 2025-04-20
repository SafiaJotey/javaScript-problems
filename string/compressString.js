function compressString(str) {
  if (!str.length) return str;
  
  let compressed = '';
  let count = 1;
  let currentChar = str[0];
  
  for (let i = 1; i < str.length; i++) {
    if (str[i] === currentChar) {
      count++;
    } else {
      compressed += currentChar + (count > 1 ? count : '');
      currentChar = str[i];
      count = 1;
    }
  }
  
  compressed += currentChar + (count > 1 ? count : '');
  return compressed
  // return compressed.length < str.length ? compressed : str;
}
  // Example:

  console.log( compressString("aaabbbcc") ) ; // => "a3b3c2"    
  console.log( compressString("abc")  )// => "abc" (since compression doesn't help)