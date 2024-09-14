let express = require("express");
let app = express();
let PORT=9090;
let REQUEST_LIMIT=5;            // within 1 minute max 5 request 
let CLIENT_TIME=1000*60;       // 1 minute 
let rate_info = {};             // empty literal object. 
let rateLimit = (req,res,next)=> {
const ip = req.ip;          // 1st client send request from one ip 
//console.log(ip);
if(!rate_info[ip]){
    rate_info[ip]={count:1,lastRequestTime:Date.now()}
    //console.log(rate_info[ip])
}else {
    console.log("false")
    let currentTime = Date.now();
    console.log(currentTime)
    console.log(rate_info[ip].lastRequestTime)
    console.log(currentTime-rate_info[ip].lastRequestTime);
    if(currentTime-rate_info[ip].lastRequestTime < CLIENT_TIME){
        rate_info[ip].count++;
    }else {
        rate_info[ip].count=1;
        rate_info[ip].lastRequestTime=currentTime;
    }
        if(rate_info[ip].count>REQUEST_LIMIT){
        return res.status(425).send("Too many request, please try after 1 minute!")
        }
    }
    next();
}
app.use(rateLimit);     // added middleware 
app.get("/",(req,res)=> {
    console.log("client send the request")
    res.send("Welcome to Simple Rate Limit App middleware")
})
app.listen(PORT,()=>console.log(`server up on port number ${PORT}`))