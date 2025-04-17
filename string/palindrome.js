

// with building fun
// function isPalindrome(str) {
// const cleanedStr=str.toLowerCase().replace(/[^a-z0-9]/g,'');
// return cleanedStr===cleanedStr.split('').reverse().join('')
// }




  // using two pointer
  function isPalindrome(str) {
  let cleanedStr=str.toLowerCase().replace(/[^a-z0-9]/g,'')
  let left=0, right=cleanedStr.length-1;
  if(left<right){
    if(cleanedStr[left]!==cleanedStr[right]) return false;
  left++;
  right--;
  }
    return true;
      }
    
  console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
//   Explanation:
// / ... /: This denotes the start and end of the regular expression.

// [^a-z0-9]: This is a character class with a ^ at the beginning, which negates the class. It matches any character that is NOT:

// a-z: any lowercase letter from a to z

// 0-9: any digit from 0 to 9

// g: This is the global flag, which means the regex will match all occurrences in the input string, not just the first one.