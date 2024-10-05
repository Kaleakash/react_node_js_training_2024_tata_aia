
let ProductRepository = require("../repository/ProductRepository");


exports.storeProduct = async(req,res)=> {
    try {
        let product = req.body;
        let result = await ProductRepository.storeProduct(product);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.json({"msg":error.message});
    }
}

exports.updateProduct = async(req,res)=> {
    try {
        let product = req.body;
        let pid = product.pid;
        let result = await ProductRepository.updateProduct(pid,product)
        if(result[0]>0) {
            res.json({"msg":"Product details updated successfully"});
        }else {
            res.json({"msg":"Product not present"});
        }
        
    } catch (error) {
        res.json({"msg":error.message});
    }
}


exports.findProduct = async(req,res)=> {
    try {
        let products = await ProductRepository.findAll();
        console.log(products);
        res.json(products);
    } catch (error) {
        res.json({"msg":error.message});
    }
}

exports.findProductById = async(req,res)=> {
    try {
        let pid = req.params.pid;
        console.log(pid);
        let products = await ProductRepository.findById(pid);
        console.log(products);
        res.json(products);
    } catch (error) {
        res.json({"msg":error.message});
    }
}

exports.deleteProductUsingPid = async(req,res)=> {
    try {
        let pid = req.params.pid;
        console.log(pid);
        let result = await ProductRepository.deleteById(pid)
        if(result>0){
            res.json({"msg":"Product deleted successfully"})
        }else {
            res.json({"msg":"Product not preset"})
        }
    } catch (error) {
        res.json({"msg":error.message});
    }
}