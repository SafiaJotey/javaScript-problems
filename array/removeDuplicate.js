function removeDuplicatesManual(arr) {
 return arr.filter((item, index)=>arr.indexOf(item)===index)
  }
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 4]))
  // Example: removeDuplicates([1, 2, 2, 3, 4, 4, 4]) → [1, 2, 3, 4]