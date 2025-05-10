// Count Unique Elements in an Array
function countElement(arr){
return new Set(arr).size
}

const items = ["apple", "banana", "orange", "apple", "banana"];
console.log(countElement(items))