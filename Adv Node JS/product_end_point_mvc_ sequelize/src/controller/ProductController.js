
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


exports.findProduct = async(req,res)=> {
    try {
        let products = await ProductRepository.findAll();
        console.log(products);
        res.json(products);
    } catch (error) {
        res.json({"msg":error.message});
    }
}