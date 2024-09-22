import express,{Request,Response}from 'express';      // let express = requires("express")

let app = express();
let PORT:number=9090;

interface EmployeeType {
    id:number;
    name:string,
    salary:number;
    age?:number
}

let employees :Array<EmployeeType>=[
    {id:100,name:"Ravi",salary:34000},
    {id:101,name:"Raj",salary:36000,age:34},
    {id:102,name:"Ramesh",salary:32000,age:32}
]

app.get("/employees",(req:Request,res:Response)=> {
    res.json(employees);
})

app.listen(PORT,()=>console.log(`Server running on port number ${PORT}`));