const anagramGrp=(arrChunk)=>{
    const group=new Map()
for( let chunk of arrChunk){
    let sort=chunk.toLowerCase().replace(/[^a-z]/g,'').split('').sort().join('')
    if(!group.has(sort))group.set(sort,[])
        group.get(sort).push(chunk)
}
return Array.from(group.values())
}
console.log(anagramGrp(["eat","tea","tan","ate","nat","bat"]))