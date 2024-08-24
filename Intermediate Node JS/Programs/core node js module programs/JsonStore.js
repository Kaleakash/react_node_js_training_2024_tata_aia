let fs = require("fs");
let emp = {id:101,name:"Raj",age:22}   // literal style object 
console.log(emp)
console.log(emp.id)
console.log(emp.name)
console.log(emp.age)
// JSON : JavaScript Object Notation 
// key must be in double quote. 
let empString = JSON.stringify(emp);   // convert literal object to json object to string 
let empJson = JSON.parse(empString);     // parse function is use to convert string to json 
console.log(empString);     // object in string format 
console.log(empString.id)
console.log(empString.name)
console.log(empString.age)
console.log(empJson)            // json object. 
console.log(empJson.id)
console.log(empJson.name)
console.log(empJson.age)
// Write Operation 
fs.writeFile("emp.json",empString,(err,result)=> {
    if(!err){
        console.log("Store the data")
    }
})

// Read Operation 

// fs.readFile("emp.json",(err,data)=> {
//     if(!err){
//         console.log(data)
//         let empJsonData = JSON.parse(data.toString());
//         console.log(empJsonData.id);
//         console.log(empJsonData.name);
//         console.log(empJsonData.age);
//     }
// })
