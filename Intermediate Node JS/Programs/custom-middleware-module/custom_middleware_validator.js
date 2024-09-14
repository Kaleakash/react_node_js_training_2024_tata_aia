let express = require("express");
let app = express();
let PORT=9090
// custom middleware 
let validateRequestBody = (req,res,next)=> {
    let {username,email}=req.body;
    if(!username || !email){
        return res.status(400).send("Bad Request! username and email id must be required");
    }
    // if true 
    next();
}
// middleware 
app.use(express.json());        // if we pass the data json data must pass through view tech or post man 
//app.use(express.urlencoded({extended:true})); // if we pass data from form with method post 
app.use(validateRequestBody)

app.post("/register",(req,res)=> {
    let {username,email}=req.body;
    res.send(`User ${username} you registered with email id as ${email}`)
})



app.listen(PORT,()=>console.log(`Server running on port number ${PORT}`))