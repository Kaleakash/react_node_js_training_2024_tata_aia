// synchronous statement 

// console.log("statement1")
// console.log("statement2")
// console.log("statement3")


// asynchronous statement 
let i=0;

let obj = setInterval(()=> {
    console.log("statement1 "+i)
    i++;
},10000)
setTimeout(()=> {
    console.log("statement2")
},2000) 
setInterval(()=> {
    console.log("statement3")
    if(i==5){
        clearInterval(obj);
    }
},1000)
