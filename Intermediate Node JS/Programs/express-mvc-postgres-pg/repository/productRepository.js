let pool = require("../config/dbConfig");       // load dbConfig file 

exports.getAllProducts = async ()=> {
    try {
        const result = await pool.query("select * from product");
        return result.rows;
    } catch (error) {
        throw error.message
    }
}

exports.storeProduct = async (product)=> {
    try {
        let {pid,pname,price}=product;
        const result = await pool.query("insert into product values($1,$2,$3)",
            [pid,pname,price]);
        if(result.rowCount>0){
            return "Product stored successfully";
        }
    } catch (error) {
        throw error.message
    }
}

exports.updateProductPrice = async (product)=> {
    try {
        let {pid,price}=product;
        const result = await pool.query("update product set price = $1 where pid=$2 returning *",
            [price,pid]);
        if(result.rowCount>0){
            return "Product price updated successfully";
        }else {
            return "Product not present";
        }
    } catch (error) {
        throw error.message
    }
}

exports.deleteProduct = async (pid)=> {
    try {
        const result = await pool.query("delete from product where pid = $1 returning *",
            [pid]);
        if(result.rowCount>0){
            return "Product deleted successfully";
        }else {
            return "Product not present"
        }
    } catch (error) {
        throw error.message
    }
}