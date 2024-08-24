let fs = require("fs");
let employees = [
    {id:100,name:"Ravi",age:34},
    {id:101,name:"Raj",age:36},
    {id:102,name:"Ramesh",age:38}
]
let emp = {id:100,name:"Ravi",age:32}
fs.readFile("employees.json",(err,data)=> {
    if(!err){
        let employeeJson = JSON.parse(data.toString())
        console.log(employeeJson.length)
        let info = employeeJson.find(e=>e.id==emp.id);
        if(info==undefined){
            employeeJson.push(emp);
            console.log("employee record stored")
        }else {
            console.log("id must be unique")
        }
        fs.writeFile("employees.json",JSON.stringify(employeeJson),(err1,result)=> {
            if(!err1){

            }else {
                console.log("write error "+err1)
            }
        })
    }else {
        console.log(err)
    }
})