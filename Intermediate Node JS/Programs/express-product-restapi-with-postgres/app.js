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
// Get all product from database ie postgres 

app.get("/products",async(req,res)=> {
    try{
    let product_info =await pool.query("select * from product");
    res.json(product_info.rows);
    }catch(ex){
        res.json({"msg":ex.message})
    }
})

// find product information base upon pid 
app.get("/find_product/:pid",async (req,res)=> {
    //let {pid}= req.params
    try{
    let pid = req.params.pid;
    let product_info = await pool.query("select * from product where pid = $1",[pid]);
    //console.log(product_info);
    if(product_info.rowCount>0){
        res.json(product_info.rows[0]);
    }else {
        res.json({"msg":"Product not present with pid as "+pid}); 
    }
}catch(ex){
    res.json({"msg":ex.message})
}

})
app.listen(9090,()=>console.log("Server running on port number 9090"));