let counter = 2

function add(a, b){
    return a+b;
}
funcion delay (func){
    return new Promise((resolve,peject) => {
        setTimeout(handler:()=>{
            resolve(func)
        }, timeout: 3000)
    })
}
delay(add(func: 2,counter)).then(onfulfilled: result=>{
    console.log(data[0]:result) 4
})