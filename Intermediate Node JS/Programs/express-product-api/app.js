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

// update product price using put method 
// http://localhost:9090/update_product_price      method put data {"pid":3,"price":1600}
app.put("/update_product_price",(req,res)=> {
    let product = req.body;     // it is use to extract data from request body. 
    console.log(product);
    let index = products.findIndex(p=>p.pid==product.pid);  // if record present it return that record index position else -1
    if(index==-1){
        res.json({"msg":"Product didn't update it is not present"}); 
    }else {
       products[index].price=product.price;
       res.json({"msg":"Product price updated successfully"})
    }
})
// delete the product using pid 
// http://localhost:9090/delete_product/1
 // http://localhost:9090/delete_product/100
app.delete("/delete_product/:pid",(req,res)=> {
    let pid = req.params.pid;
    let index = products.findIndex(p=>p.pid==pid);
    if(index==-1){
        res.json({"msg":"Product didn't delete it is not present"}); 
    }else {
       products.splice(index,1);        //1st parameter index position and 2nd parameter number of record to delete. 
       // splice 1st parameter index position, 2nd parameter number of record to delete, 3rd, 4th,nth parameter add the elements.
       //products.splice(index,2);
       // products.splice(index,2,product1,product2);
       res.json({"msg":"Product deleted successfully"})
    }
})
app.listen(9090,()=>console.log("Server running on port number 9090"));