let express = require("express");
let cookieParser = require("cookie-parser")
let session = require("express-session");
let app = express();
let PORT=9090;
app.use(cookieParser())

let sessionMiddleware = (req,res,next)=> {
    session({
        secret:"my-key",
        resave:false,
        saveUninitialized:true
        // cookie:{
        //     maxAge:1000*60*60
        // }
    })
    next();
}

let myMiddleware=(req,res,next)=> {
    let cookiesInfo = req.cookies;
    console.log("cookies details");
    if(!req.session.count){
    req.session.count=0;
    }
    console.log(cookiesInfo)
    console.log(cookiesInfo["connect.sid"])
    next();
}

// custom middleware 
app.use(sessionMiddleware)
app.use(myMiddleware)

// end point 
app.get("/",(req,res)=> {
    res.send(`Welcome to Session Tracking Example! You hit this application number of times. ${req.session.count}`)
})


app.listen(PORT,()=>console.log(`Server up on port number ${PORT}`));