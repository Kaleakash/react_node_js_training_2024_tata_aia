let fs = require("fs");
let path ="C:\\Users\\akash\\Desktop\\EC2 Plugin Install1.txt"
fs.readFile(path,(err,data)=> {
    if(!err){
        console.log(data);      // buffer format 
        console.log(data.toString())    // string format 
       
    }else {
        console.log(err)
        
    }

    console.log("Normal Statement1")
})


console.log("Normal Statement2")
console.log("Normal Statement3")