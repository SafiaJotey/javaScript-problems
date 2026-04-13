var timeLimit = function(fn, t) {
    
return async function(...args) {
    const timecountPromise=new Promise((_,reject)=>{
        setTimeout(()=>reject("Time Limit Exceeded"),t)
    })
    const functionCompletionTime=fn(...args);
    return Promise.race([timecountPromise,functionCompletionTime])
    
}
}

//  const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
//  limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 70);

limited(150)
  .then(res => console.log("Success:", res))
  .catch(err => console.log("Error:", err));