function removeDuplicates(arr) {
  const uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

// Example
console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // Output: [1, 2, 3, 4]
