
let OrdersRepository = require("../repository/OrdersRepository");

exports.placeOrder = async(req,res)=> {
    try {
        let order = req.body;
        let result = await OrdersRepository.storeOrders(order)
        res.json(result);
    } catch (error) {
        res.json({"msg":error.message});
    }
}

exports.findOrders = async(req,res)=> {
    try {
        let orders = await OrdersRepository.findAll();
        res.json(orders);
    } catch (error) {
        res.json({"msg":error.message});
    }
}

exports.findOrderId = async(req,res)=> {
    try {
        let oid = req.params.oid;
        let order = await OrdersRepository.findById(oid)
        res.json(order);
    } catch (error) {
        res.json({"msg":error.message});
    }
}

