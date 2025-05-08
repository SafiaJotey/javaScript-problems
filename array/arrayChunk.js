const arrChunk=(arr, size)=>{
    const chunks=[]
    for(let i=0; i<=arr.length;i+=size){
   chunks.push( arr.slice(i,i+size))


    }
    return chunks
}

console.log(arrChunk([1,2,3,4,5,6,7],2))