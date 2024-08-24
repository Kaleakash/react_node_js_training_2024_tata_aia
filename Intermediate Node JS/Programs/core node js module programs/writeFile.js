let fs = require("fs");
let data = "We are learning Fs module";
//fs.writeFileSync("demo1.txt",data);           //override the data 
//fs.writeFileSync("demo4.txt",data,{flag:"a"});             // append the data 
fs.appendFileSync("demo5.txt",data);
console.log("Data stored in file");
console.log("normal statement")