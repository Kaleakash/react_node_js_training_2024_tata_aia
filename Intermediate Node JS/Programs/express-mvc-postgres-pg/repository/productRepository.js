let pool = require("../config/dbConfig");       // load dbConfig file 

exports.getAllProducts = async ()=> {
    try {
        const result = await pool.query("select * from product");
        return result.rows;
    } catch (error) {
        throw error.message
    }
}

