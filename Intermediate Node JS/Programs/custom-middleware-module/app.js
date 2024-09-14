let express = require("express")
let app = express();
let PORT=9090

let myCustomModule = (req,res,next)=> {
    console.log("This is my simple middleware module");
    //res.send("Hello")
    let currentDateTime = new Date();
    let method = req.method;
    let url = req.url;
    console.log(`Current and time ${currentDateTime} method : ${method} client URL: ${url}`)
    next();         // pass to another middleware or router or specific end point 
}

app.use(myCustomModule)
app.get("/",(req,res)=> {
    res.send("welcome to simple custom middleware module")
})

app.get("/info/:name",(req,res)=> {
    let name = req.params.name;
    res.send("welcome to simple custom middleware module user "+name)
})
app.listen(PORT,()=>console.log(`Application running on port number ${PORT}`));