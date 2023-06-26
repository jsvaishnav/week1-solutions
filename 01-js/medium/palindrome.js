/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
function rev(str)
{
  var array= str.split("")
  array=array.reverse();
  var sortedstring=array.join("")
  return sortedstring
}

function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "");
  if(rev(str.toLowerCase())==str.toLowerCase()) return true;
  else return false;
 
}


module.exports = isPalindrome;
