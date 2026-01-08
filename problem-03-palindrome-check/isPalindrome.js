function isPalindrome(str) {
  const cleanStr = str.toLowerCase();
  const reversedStr = cleanStr.split('').reverse().join('');

  return cleanStr === reversedStr;
}

// Example
console.log(isPalindrome('madam')); // Output: true
