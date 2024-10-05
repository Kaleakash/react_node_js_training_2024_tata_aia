let ProductModel = require("../model/ProductModel")
exports.storeProduct = async(product)=> {
    let result =  await ProductModel.create(product); 
    return result;
}
exports.updateProduct = async(p_id,productData)=> {
    let result =  await ProductModel.update(productData,{where:{pid:p_id}}) 
    return result;
}
exports.findAll = async()=> {
    let products = await ProductModel.findAll();
    return products;
}
exports.findById = async(pid)=> {
    let product = await ProductModel.findByPk(pid)
    return product;
}
exports.deleteById = async(p_id)=> {
    let result = await ProductModel.destroy({where:{pid:p_id}})
    return result;
}



