
let productRepository = require("../repository/productRepository");


exports.findAllProducts = async(req,res)=> {
    try{   
    let result = await productRepository.getAllProducts();
    res.json(result);
    }catch(error){
        res.json({"msg":error})
    }
}


exports.storeProduct = async(req,res)=> {
    try{   
    let product = req.body;
    let result = await productRepository.storeProduct(product);
    res.json(result);
    }catch(error){
        res.json({"msg":error})
    }
}




