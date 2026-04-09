
//using then chaining

const WithPromiseAll1 = (promise1, promise2) => {
    return Promise.all([promise1, promise2])
           .then(([value1, value2]) => value1 + value2)  
}


const WithoutPromiseAll1 = (promise1, promise2) => {
    let value1, value2;
    
    return promise1
        .then(result1 => {
            value1 = result1;
            return promise2;
        })
        .then(result2 => {
            value2 = result2;
            return value1 + value2;
        });
}




const WithoutPromiseAll2 = (promise1, promise2) => {
    return Promise.resolve()
        .then(() => promise1)
        .then(val1 => promise2.then(val2 => val1 + val2));
}


const addTwoPromiseWithoutPromiseAll3 = (promise1, promise2) => {
    return promise1.then(val1 => 
        promise2.then(val2 => val1 + val2)
    );
}


//using async/await 
//method1
const addTwoPromise1=async(promise1,promise2)=>{
  const[value1,value2]= await Promise.all([promise1,promise2])
  return value1+value2
}


//method2
const addTwoPromise2=async(promise1,promise2)=>{
     const value1=await promise1;
     const value2= await promise2;
     return value1+value2
}


const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

// Method 1: Using await (must be inside an async function)
// async function main() {
//     console.log(await addTwoPromise(promise1, promise2));  // ✅ 7
// }
// main();

// Method 2: Using .then()
addTwoPromise1(promise1, promise2).then(result => console.log(result));  // ✅ 7
addTwoPromise2(promise1, promise2).then(result => console.log(result));
addTwoPromiseWithThen(promise1, promise2).then(result => console.log(result));