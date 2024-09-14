
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
    res.json({"msg":result});
    }catch(error){
        res.json({"msg":error})
    }
}

exports.updateProductPrice = async(req,res)=> {
    try{   
    let product = req.body;
    let result = await productRepository.updateProductPrice(product);
    res.json({"msg":result});
    }catch(error){
        res.json({"msg":error})
    }
}


exports.deleteProduct = async(req,res)=> {
    try{   
    let pid = req.params.pid
    let result = await productRepository.deleteProduct(pid)
    res.json({"msg":result});
    }catch(error){
        res.json({"msg":error})
    }
}
