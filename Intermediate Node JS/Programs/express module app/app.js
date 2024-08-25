let express = require("express");  // load the modules 
let app = express();            // get top most function reference of express module 
let bodyParser = require("body-parser")
let fs = require("fs");

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
    let loginData = JSON.parse(fs.readFileSync("login.json").toString())
    let result  = loginData.find(l=>l.emailid==emailid && l.password==password);
    if(result!=undefined){
            res.send("Successfully login with get method")
    }else {
            res.send("Failure try once again with get method")
    }
})

app.get("/signuppage",(req,res)=> {
    res.sendFile(__dirname+"/signup.html")
})
// post method 
app.post("/checkLoginDetails",(req,res)=> {
    let data = req.body;
    let loginData = JSON.parse(fs.readFileSync("login.json").toString())
    let result  = loginData.find(l=>l.emailid==data.emailid && l.password==data.password);
    if(result!=undefined){
        res.send("Successfully login with Post method")
}else {
        res.send("Failure try once again with post method")
}

})

app.post("/signup",(req,res)=> {
    let data = req.body;            // data receive from form. 
    let loginData = JSON.parse(fs.readFileSync("login.json").toString())
     let result  = loginData.find(l=>l.emailid==data.emailid);// if return not present it return undefined. 
     if(result==undefined){
            loginData.push(data);
            fs.writeFileSync("login.json",JSON.stringify(loginData));
            console.log("account created..")
     }else {
        console.log(result);
        console.log("emailid id must be unique")
    }
    res.sendFile(__dirname+"/signup.html");
})


app.get("/**",(req,res)=> {
    res.send("Page not found")
})

app.listen(9090,()=> {
    console.log("Server running on port number 9090")
})