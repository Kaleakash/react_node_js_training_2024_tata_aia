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

app.use(express.json());        // enable json data from request body 

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

// store product information in postgres database 
app.post("/store_product",async(req,res)=> {
    try {
        let product = req.body;
        let result = await pool.query("insert into product values($1,$2,$3)",
            [product.pid,product.pname,product.price]);

        if(result.rowCount>0) {
            res.json({"msg":"Product details stored in db successfully"})
        }
    } catch (ex) {
        res.json({"msg":ex.message});
    }

})

// update the product price 
app.put("/update_product_price",async(req,res)=> {
    try {
        let product =req.body;
        let result = await pool.query("update product set price = $1 where pid=$2",
            [product.price,product.pid]);
        if(result.rowCount>0) {
            res.json({"msg":"Product price updated successfully"})
        }else {
            res.json({"msg":"Record didn't update"})
        }
    } catch (ex) {
        res.json({"msg":ex.message})
    }
})
// delete the product 
app.delete("/delete_product/:pid",async(req,res)=> {
    try {
        let pid = req.params.pid;
        let result = await pool.query("delete from product where pid = $1",[pid]);
        if(result.rowCount>0) {
            res.json({"msg":"Product deleted successfully"})
        }else {
            res.json({"msg":"Record not present"})
        }
    } catch (ex) {
        res.json({"msg":ex.message})   
    }
})


app.listen(9090,()=>console.log("Server running on port number 9090"));