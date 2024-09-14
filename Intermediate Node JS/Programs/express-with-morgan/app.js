let express = require("express");
let app = express();
let fs = require("fs");
let morgan  = require("morgan");
let PORT=9090;

let products = [
    {"pid":100,"pname":"TV","price":56000},
    {"pid":101,"pname":"Computer","price":45000}
]

// middleware 
//app.use(morgan("combined"))
//app.use(morgan("common"))
//app.use(morgan("dev"))
//app.use(morgan("short"))
//app.use(morgan("tiny"))
let fsModuleRef = fs.createWriteStream("my_log_file.log",{flags:"a"})
//app.use(morgan("Method :method - URL :url - Status :status Response Time :response-time ms",{stream:fsModuleRef}));
app.use(morgan("combined",{stream:fsModuleRef}));
app.use(express.json())

app.get("/",(req,res)=> {
    res.send("Welcome to Simple Logger Example")
})

app.get("/products",(req,res)=> {
    res.json(products);
})


app.listen(PORT,()=>console.log(`Server running on port number ${PORT}`));