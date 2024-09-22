let ProductModel = require("../model/ProductModel")

exports.storeProduct = async(product)=> {
    let result =  await ProductModel.create(product); 
    return result;
}


exports.findAll = async()=> {
    let products = await ProductModel.findAll();
    return products;
}



