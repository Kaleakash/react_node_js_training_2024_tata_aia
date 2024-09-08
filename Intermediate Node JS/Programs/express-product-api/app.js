let express = require("express");       // load the module 
let app = express();                // created the reference. 
let bodyParser = require("body-parser");

// middleware 

//app.use(express.json());                // enable json data from request body. 
app.use(bodyParser.json());             // enable json data from request body using bodyParser 
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

// store product details using post method 
// http://localhost:9090/store_product      method post data {"pid":3,"pname":"Pen Drive","price":1600}
app.post("/store_product",(req,res)=> {
    let product = req.body;     // it is use to extract data from request body. 
    console.log(product);
    let result = products.find(p=>p.pid==product.pid);  // if record present it return that record else undefined. 
    if(result==undefined){
        products.push(product);
        res.json({"msg":"Product information stored"})
    }else {
        res.json({"msg":"Product id must be unique"});
    }
})


app.listen(9090,()=>console.log("Server running on port number 9090"));