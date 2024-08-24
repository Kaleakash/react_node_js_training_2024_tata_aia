let fs = require("fs");
let data = fs.readFileSync("demo.txt");
console.log(data);
console.log(data.toString())    // toString method convert buffer to string format. 
console.log("normal code1")
console.log("normal code2")
console.log("normal code3")