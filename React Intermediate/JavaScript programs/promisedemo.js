// creating user defined promise object. 
// it is use to handle asychronous event of data. 

// let obj = new Promise((resolve,reject)=> {
//     resolve("work done")
//     //reject("reject with error")
// });

// if promise resolve it call then, if promise reject it call catch 
// obj.then(result=>console.log("resolved "+result)).catch(error=>console.log("rejected "+error))
// console.log("1")
// console.log("2")
// console.log("3")

fetch("https://fakestoreapi.com/products").
then(result=>result.json()).then(result=>console.log(result)).catch(error=>console.log(error))