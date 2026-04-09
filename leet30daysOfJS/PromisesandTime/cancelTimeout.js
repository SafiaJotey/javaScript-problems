const cancelTimeoutFn=(fn,args,t)=>{
   const timeoutId= setTimeout(()=>{
        fn(...args)
    },t)
    return function cancelFn(){
        clearTimeout(timeoutId)
    }
}
cancelTimeoutFn((x,y,z,a)=>console.log(x*y*z*a),[3,4,4,4],300)