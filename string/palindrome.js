

// with building fun
// function isPalindrome(str) {
// const cleaned=str.toLowerCase().replace(/[^a-z0-9]/g,'');
// return cleaned===cleaned.split('').reverse().join('')
//   }




  // using two pointer
  function isPalindrome(str) {
    const cleaned=str.toLowerCase().replace(/[^a-z0-9]/g,'')
    let left=0, right=cleaned.length-1
    if(left<right){
      if(cleaned[left]!==cleaned[right])return false;
      left++;
      right--;
    }
    return true
      }
    
  console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
//   Explanation:
// / ... /: This denotes the start and end of the regular expression.

// [^a-z0-9]: This is a character class with a ^ at the beginning, which negates the class. It matches any character that is NOT:

// a-z: any lowercase letter from a to z

// 0-9: any digit from 0 to 9

// g: This is the global flag, which means the regex will match all occurrences in the input string, not just the first one.