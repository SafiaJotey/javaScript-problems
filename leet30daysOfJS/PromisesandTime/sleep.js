const sleep=(millis)=>{
setTimeout(()=>{
    return new Promise(resolve=>resolve(millis))
},millis)
}

async function sleep(millis) {
    return new Promise(resolve=>{
        setTimeout(()=>{

        resolve(millis) 
        },millis)
    })
}