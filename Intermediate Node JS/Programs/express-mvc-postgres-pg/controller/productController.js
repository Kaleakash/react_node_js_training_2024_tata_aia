
let productRepository = require("../repository/productRepository");


exports.findAllProducts = async(req,res)=> {
    try{
    let result = await productRepository.getAllProducts();
    res.json(result);
    }catch(error){
        res.json({"msg":error.message})
    }
}



