const express = require("express")
const Consul = require("consul");      // load the module 
const { default: axios } = require("axios");
const app = express();
const consul=new Consul();          // created reference of Consul
let port = 9292;

let gpay_accounts =[
    {"gpayid":1,"emailid":"ravi@gmail.com"},
    {"gpayid":2,"emailid":"ramesh@gmail.com"},
    {"gpayid":3,"emailid":"rajesh@gmail.com"},
    {"gpayid":4,"emailid":"ram@gmail.com"},
    {"gpayid":5,"emailid":"ajay@gmail.com"}
]

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
// http://localhost:9292
app.get("/",(req,res)=> {
    res.send("Welcome to Googl Pay Micro Service")
})
// http://localhost:9292/service_test 

app.get("/service_test",async (req,res)=> {
    try{
    let service = await consul.agent.service.list();
    res.json({"msg":service})
    }catch(error){
        res.json({"msg":error.message})
    }
})
// http://localhost:9292/find_balance/1
// http://localhost:9292/find_balance/10
app.get("/find_balance/:g_pay_id",async (req,res)=> {
    try{
    let g_pay_id = req.params.g_pay_id
    let result = gpay_accounts.find(g=>g.gpayid==g_pay_id);
    if(result==undefined){
            res.json({"msg":"G Pay Account not exists"})
    } else {
        let service = await consul.agent.service.list();
        let account_service = Object.values(service).find(s=>s.Service=="account-service") 
        //console.log(service);   
        //console.log(account_service);
        const serviceUrl = `http://${account_service.Address}:${account_service.Port}/find_balance/${result.emailid}`;
        let response = await axios.get(serviceUrl);     // it is calling account micro service 
        console.log(response.data.msg);     
        res.json({"msg":response.data.msg}) 
    } 
    //let service = await consul.agent.service.list();
    //res.json({"msg":service})
    }catch(error){
        res.json({"msg":error.message})
    }
})

app.listen(port,()=> console.log(`Micro service up on port number ${port}`))