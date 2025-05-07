function countOccurrences(arr, value) {

    return arr.filter(item=>item===value).length
}
console.log(countOccurrences([1,2,5,6,7,8,9,44,7,5,896,5,7,8,4], 7))