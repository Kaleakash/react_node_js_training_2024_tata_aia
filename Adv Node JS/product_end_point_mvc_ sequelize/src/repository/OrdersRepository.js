let OrdersModel = require("../model/OrdersModel")

exports.storeOrders = async(order)=> {
    let result =  await OrdersModel.create(order); 
    return result;
}

exports.findAll = async()=> {
    let orders = await OrdersModel.findAll();
    return orders;
}
exports.findById = async(oid)=> {
    let order = await OrdersModel.findByPk(oid)
    return order;
}




