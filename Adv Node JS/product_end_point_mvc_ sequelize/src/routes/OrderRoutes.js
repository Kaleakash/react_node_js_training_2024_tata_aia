let express = require("express");
let router = express.Router();
let OrdersController = require("../controller/OrdersController");



router.post("/place_order",OrdersController.placeOrder);
router.get("/find",OrdersController.findOrders)
router.get("/find_by_id/:oid",OrdersController.findOrderId)


module.exports=router;