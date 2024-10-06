// load the all required module 
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {sequelize,Login}=require("./config");
// creating reference of express 
const app = express();

//middleware 
app.use(express.json());            // enable json data from body part while signIn and signUp

// SignUp ie Admin or User 
app.post("/signUp",async(req,res)=> {
    let {email,password,role}=req.body;         // {"email":"admin@gmail.com","password":"admin@123","role":"admin"}
    try{
    //console.log(password)
     let hashPassword = await bcrypt.hash(password,10);     
     //console.log(hashPassword);
    let result = await Login.create({email,password:hashPassword,role})
    //console.log(result);
    res.json({"msg":"Account created successfully"})  
    }catch(error){
        res.json(error.message);
    }
})

// Sign ie Admin or User 
app.post("/signIn",async(req,res)=> {
    let {email,password,role}=req.body;
    try{
        let User = await Login.findByPk(email);             // retrieve data using PK. 
        if(User==null){
            res.json({"msg":"User Not found"})
        }else {
            let isMatch  = await bcrypt.compare(password,User.password)
            if(!isMatch){
                res.json({"msg":"InValid Password!"})
            }else {
            const token = await jwt.sign({email:email,role:role},"my_key",{expiresIn:"1m"});
            res.json(token);
            }
        }
        
    }catch(error){
        res.json(error.message)
    }

})

// Creating Rest API    -- Public End point  
app.get("/test",(req,res)=>{
    res.json({"msg":"Public End Point"})
})

// Creating one middleware which verify token 
const verifyToken = (req,res,next)=> {
    const token = req.headers["authorization"]
    try{
    if(token==undefined){       
        res.json({"Msg":"Access denied, Token not present"})
    }else {
        //console.log(token)
        const decode = jwt.verify(token,"my_key")
        req.role = decode.role;
        req.email=decode.email;
        next();         // redirect to next middleware or end point or router 
        }
    }catch(error){
            res.json({"msg":error.message})
    }
}

// creating middleware for to check admin 
const isAdmin = (req,res,next)=>{
    if(req.role!="admin"){
        res.json({"msg":"Required Admin Role"})
    }
    next();
}
// creating middleware for to check user 
const isUserOrAdmin = (req,res,next)=>{
    if(req.role=="user" || req.role=="admin"){
        next();
    }else {
        res.json({"msg":"Required User Role or Admin Role"})
    }
}
// creating middleware for admin and user


// This access by user as well as admin 
app.get("/user",verifyToken,isUserOrAdmin,(req,res)=>{
    res.json({"msg":`Welcome ${req.role=="admin"?"Admin":`${req.email}`}`})
})
// This access by admin 
app.get("/admin",verifyToken,isAdmin,(req,res)=>{
    res.json({"msg":"Welcome Admin"})
})

// sync data and start the server 
sequelize.sync().then(result=>console.log("Database connected")).catch(error=>console.log(error));

app.listen(9090,()=>console.log("Server running on port number 9090"));