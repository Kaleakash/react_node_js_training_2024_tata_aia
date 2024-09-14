let express = require("express");
let app = express();
let PORT=9090;
let auth_middleware = (req,res,next)=> {
    let isAuthenticated = req.headers["authorization"]
    console.log(isAuthenticated)
    if(!isAuthenticated)
    {
        res.status(401).send("Unauthorized: Please Provide the token with your request")
    }else {
        next();
    } 
}
let valid_token = (req,res,next)=> {
    let isAuthenticated = req.headers["authorization"]
    if(isAuthenticated==="mytokenvalue")
    {
        next();
    }else {
        res.status(401).send("Unauthorized: Please provide valid token!")
    }
}
app.get("/public",(req,res)=> {
    res.send("This is public end point")
})
// apply middleware to verify auth token 
app.get("/protected",auth_middleware,valid_token,(req,res)=> {
    res.send("This is protected end point")
})
app.listen(PORT,()=>console.log(`Server running on port number ${PORT}`));