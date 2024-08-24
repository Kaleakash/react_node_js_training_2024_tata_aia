// import {fun1,fun2} from 'path or modulename'
let fs = require("fs");

setTimeout(()=> {
    let data = fs.readFileSync("demo.txt");
    console.log(data);
    console.log(data.toString())    // toString method convert buffer to string format. 
    console.log("normal code1")
},2000)

console.log("normal code2")
console.log("normal code3")
