const fizzBuzzArray=(n)=>{
    return Array.from({length:n},(_,i)=>{
        const num=i+1;
        if(num%15===0) return "fizzBuzz";
        if(num%5===0) return "Buzz";
        if(num%3==0)  return "fizz"
        return num
    })

}

console.log(fizzBuzzArray(16))