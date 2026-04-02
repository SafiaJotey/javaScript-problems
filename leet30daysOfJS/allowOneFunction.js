/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let hasbeennCalled=false;
    return function(...args){
        if(!hasbeennCalled){
          hasbeennCalled=true;
           return fn(...args)
        }else{
return undefined;
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 **/
