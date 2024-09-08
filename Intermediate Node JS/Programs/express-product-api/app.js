let express = require("express");       // load the module 
let app = express();                // created the reference. 

let products = [
    {"pid":1,"pname":"Tv","price":68000},
    {"pid":2,"pname":"Computer","price":46000},
];

// Get method : retrieve all product details. 
app.get("/products",(req,res)=> {
    res.json(products);
});
// get method using query param technique get product info 
app.get("/product_query",(req,res)=> {
    // let data = req.query
    // console.log(data)
    let pid = req.query.pid;
    let result = products.find(p=>p.pid==pid);  // if record present it return that record else undefined. 
    if(result==undefined){
        res.json({"msg":"Record not present with pid as "+pid})
    }else {
        res.json(result);
    }
})
// get method using path param technique get product info 
app.get("/product_param/:pid",(req,res)=> {
     let pid = req.params.pid
    //console.log(data)
    let result = products.find(p=>p.pid==pid);  // if record present it return that record else undefined. 
    if(result==undefined){
        res.json({"msg":"Record not present with pid as "+pid})
    }else {
        res.json(result);
    }
    //res.send("path param done!")
})


app.listen(9090,()=>console.log("Server running on port number 9090"));