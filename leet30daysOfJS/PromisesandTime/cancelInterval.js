const cancellable=(fn, args, t)=>{
    fn(...args);
    const intervalTimeout=setInterval(()=>{
        fn(...args)
    },t)
    return function cancelFn(){
        clearInterval(intervalTimeout)
    }
}