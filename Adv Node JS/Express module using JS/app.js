let express = require("express");  // load the modules external module 
let fs = require("fs");             // to do file handling program core module 
let pg = require("pg");     // loaded pg module 
let app = express();
// let app1 = express();
// let app2 = express();

let pool = new pg.Pool({
  database:"my_db",
  user:"postgres",
  password:"postgres",
  host:"localhost",
  port:5432  
});

let employees = [
    {id:100,name:"Ravi",age:21},
    {id:101,name:"Raj",age:25},
    {id:102,name:"Ramesh",age:28}
]

// http://localhost:9090
app.get("/",(req,res)=> {
    res.sendFile(__dirname+"/index.html");
})

app.get("/say",(req,res)=> {
    res.send("Welcome to Rest Full Web Service")
})

app.get("/employees",(req,res)=> {
    res.json(employees)
})

app.get("/employeesfromdb",async (req,res)=> {
        try{
       let result    = await pool.query("select * from employee");  // asynchronous 
       //console.log(result);
       if(result.rowCount>0){
            res.json(result.rows)
       }else {
            res.json({"msg":"No Record are present"});
       }
       
        }catch(error){
            res.json({"msg":error.message});
        }
})

app.listen(9090,()=>console.log("Server running on port number 9090"));