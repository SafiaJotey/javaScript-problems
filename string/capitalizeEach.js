const capitalizeEach=(str)=>{
    return str.split(/\s+/).map(item=>item[0].toUpperCase()+item.slice(1)).join(' ')
}
console.log(capitalizeEach("hello world") )