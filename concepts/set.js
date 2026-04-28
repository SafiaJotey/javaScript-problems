//set creation

//create empty and add elements
const emptySet= new Set()
console.log("My Empty set", emptySet)
emptySet.add('el1')
console.log("With one element",emptySet)

//create with values
const set1=new Set(["el1", "el2", "el3"])
console.log("set with intial value",set1)



// Basic operations
set1.add("el4")
console.log("add another unique value",set1)
set1.add("el5","el6")
console.log("add multiple another unique value",set1)
set1.add("el2")
console.log("add duplicate value",set1)
set1.delete("el2")
console.log("Delete el2", set1)
console.log("el2 is in the set",set1.has("el2"))
console.log("el3 is in the set",set1.has("el3"))
console.log("set size",set1.size)//not like this size()
set1.clear()
console.log("clear the set", set1)
console.log("after clearing set size", set1.size)
