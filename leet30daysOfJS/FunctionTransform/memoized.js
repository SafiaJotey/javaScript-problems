function memoize(fn) {
    let cache=new Map()
    let callcount=0
 function memoizedFn(...args) {
        let key=args.join(",");
        if(cache.has(key)){
            return cache.get(key)
        }
        callcount++;
        let result=fn(...args)
        cache.set(key,result)
        return result;
    }
memoizedFn.getCallCount = () => callcount;
    return memoizedFn;
}
function memoize(fn) {
    const cache = new Map();
    let callCount = 0;
    
    const memoizedFn = function(...args) {
        const key = args.join(',');
        
        if (cache.has(key)) {
            return cache.get(key);
        }
        
        callCount++;
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
    
    memoizedFn.getCallCount = () => callCount;
    
    return memoizedFn;
}
// Test it
const sum = (a, b) => a + b;
const memoSum = memoize(sum);

console.log(memoSum(2,2));  // 4 (calls sum)
console.log(memoSum(2,2));  // 4 (from cache)
console.log(memoSum(3,2));  // 5 (calls sum - different key "3,2")
console.log(memoSum(2,3));  // 5 (calls sum - different key "2,3")
console.log(memoSum.getCallCount()); // 3 (called three times)