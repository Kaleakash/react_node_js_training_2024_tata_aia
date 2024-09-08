let express = require("express");
let app = express();
let pg = require("pg");
let pool = new pg.Pool({
    "user":"postgres",
    "password":"postgres",
    "database":"testdb",
    "host":"localhost",
    "port":5432
})
// Get app product from database ie postgres 

app.get("/products",async(req,res)=> {
    try{
    let product_info =await pool.query("select * from product");
    res.json(product_info.rows);
    }catch(ex){
        res.json({"msg":ex.message})
    }
})

app.listen(9090,()=>console.log("Server running on port number 9090"));