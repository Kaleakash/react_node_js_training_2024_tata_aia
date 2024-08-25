let express = require("express");  // load the modules 
let app = express();            // get top most function reference of express module 
let bodyParser = require("body-parser")

//middleware 

app.use(bodyParser.urlencoded({extended:true}));  // enable post raw data to extract in app

// http://localhsot:9090/

app.get("/",(req,res)=>{
    //res.send("<h2>Welcome to Express JS App</h2>")
    //res.sendFile("index.html")
    //res.sendFile("D:\\Desktop\\Tata_AIA\\Repository\\Intermediate Node JS\\Programs\\express module app\\index.html")
    //res.send(__dirname);   // it provide current folder path.
    res.sendFile(__dirname+"/index.html"); 
   //res.sendFile("./index.html");
})

app.get("/aboutus",(req,res)=>{
    res.sendFile(__dirname+"/aboutus.html")
    //res.send("<h2>About Us Page</h2>")
})

app.get("/contactus",(req,res)=>{
    //res.send("<h2>Contact Us Page</h2>")
    res.sendFile(__dirname+"/contactus.html")
})

app.get("/feedback",(req,res)=>{
    //res.send("<h2>Feedback</h2>")
    res.sendFile(__dirname+"/feedback.html")
})

app.get("/login",(req,res)=>{
    //res.send("<h2>Feedback</h2>")
    res.sendFile(__dirname+"/login.html")
})

app.get("/checkLoginDetails",(req,res)=> {
    //let emailid = req.query.emailid
    //let password = req.query.password
    let emailid = req.query["emailid"]
    let password = req.query["password"]
    if(emailid=="raj@gmail.com" && password=="123"){
            res.send("Successfully login with get method")
    }else {
            res.send("Failure try once again with get method")
    }
})

app.get("/**",(req,res)=> {
    res.send("Page not found")
})


// post method 
app.post("/checkLoginDetails",(req,res)=> {
    let data = req.body;
    console.log(data)
    if(data.emailid=="raj@gmail.com" && data.password=="123"){
        res.send("Successfully login with post method")
}else {
        res.send("Failure try once again with post method")
}
})

app.listen(9090,()=> {
    console.log("Server running on port number 9090")
})