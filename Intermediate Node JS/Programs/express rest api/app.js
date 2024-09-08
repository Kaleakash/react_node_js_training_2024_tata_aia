let express = require("express");
let app = express();
let product = {id:100,name:"Computer",price:45000}

app.get("/product",(req,res)=> {
    res.json(product)
})


app.listen(9090,()=>console.log("express server up"))


// http://localhost:9090/product 
