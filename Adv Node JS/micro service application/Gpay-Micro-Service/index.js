const express = require("express")
const Consul = require("consul");      // load the module 
const app = express();
const consul=new Consul();          // created reference of Consul
let port = 9292;
// it is use to register on consul server or service 
consul.agent.service.register({
    name:"google-pay-service",
    address:"localhost",
    port:port,
    tags:["google-pay-tag"]

},(error)=> {
    if(error){
        console.log("Error Generated ")
        console.log(error)
    }else {
        console.log("Register")
    }
})
app.get("/",(req,res)=> {
    res.send("Welcome to Googl Pay Micro Service")
})
app.listen(port,()=> console.log(`Micro service up on port number ${port}`))