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
