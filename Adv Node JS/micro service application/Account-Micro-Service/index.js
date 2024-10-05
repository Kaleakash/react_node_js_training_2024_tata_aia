const express = require("express")
    const Consul = require("consul");      // load the module 
const app = express();
    const consul=new Consul();          // created reference of Consul
let port = 9494;
// it is use to register on consul server or service 
let accounts =[
    {"accno":100,name:"Ravi","emailid":"ravi@gmail.com","amount":1500},
    {"accno":101,name:"Ramesh","emailid":"ramesh@gmail.com","amount":1800},
    {"accno":102,name:"Rajesh","emailid":"rajesh@gmail.com","amount":2500},
    {"accno":103,name:"Ram","emailid":"ram@gmail.com","amount":2800}
]
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
// http://localhost:9191
app.get("/",(req,res)=> {
    res.send("Welcome to Account Micro Service")
})
// http://localhost:9191/accounts
app.get("/accounts",(req,res)=> {
    res.json(accounts);
})

// http://localhost:9191/find_balance/ravi@gmail.com
// http://localhost:9191/find_balance/ajay@gmail.com
app.get("/find_balance/:emailid",(req,res)=> {
    let emailid = req.params.emailid;
    let result = accounts.find(a=>a.emailid==emailid);
    if(result==undefined){
        res.json({"msg":"Account not present"})
    }else {
        res.json({"msg":`Your balance amount is ${result.amount}`});
    }
})

app.listen(port,()=> console.log(`Micro service up on port number ${port}`))