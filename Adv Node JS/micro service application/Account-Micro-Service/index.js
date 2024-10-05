const express = require("express")
const Consul = require("consul");      // load the module 
const app = express();
const consul=new Consul();          // created reference of Consul
let port = 9191;
// it is use to register on consul server or service 
consul.agent.service.register({
    name:"account-service",
    address:"localhost",
    port:port,
    tags:["account-tag"]

},(error)=> {
    if(error){
        console.log("Error Generated ")
        console.log(error)
    }else {
        console.log("Register")
    }
})
app.get("/",(req,res)=> {
    res.send("Welcome to Account Micro Service")
})
app.listen(port,()=> console.log(`Micro service up on port number ${port}`))