const express = require("express");
const app = express();

// http://localhost:9090/
app.get("/",(req,res)=> {
    res.send("Welcome to Express with Docker")
})

// http://localhost:9090/greeting/raj

app.get("/greeting/:name",(req,res)=> {
    let name = req.params.name;
    res.send("Welcome to user "+name+" to Express with Docker")
})


app.listen(9090,()=>console.log("Server running on port number 9090"))