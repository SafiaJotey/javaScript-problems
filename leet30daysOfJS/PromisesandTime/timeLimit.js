var timeLimit = function(fn, t) {
    
       return async function(...args) {
   
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);
        });

        // The actual function call
        const functionPromise = fn(...args);

        // Race them! Whichever finishes first wins.
        return Promise.race([functionPromise, timeoutPromise]);
    }

}

//  const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
//  limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 700);

limited(150)
  .then(res => console.log("Success:", res))
  .catch(err => console.log("Error:", err));